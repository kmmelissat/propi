import axios, { type AxiosInstance } from "axios";

/**
 * Adapter falso: simula la red sin hacer llamadas reales.
 */
const fakeAdapter = (config: { method?: string }) =>
  new Promise((resolve) => {
    const delay = 800 + Math.random() * 400;
    setTimeout(() => {
      const method = (config?.method ?? "get").toLowerCase();
      if (method === "post" || method === "put" || method === "patch") {
        resolve({
          data: { success: true, id: `fake-${Date.now()}` },
          status: method === "post" ? 201 : 200,
          statusText: method === "post" ? "Created" : "OK",
          headers: {},
          config,
          request: {},
        });
      } else {
        resolve({
          data: {},
          status: 200,
          statusText: "OK",
          headers: {},
          config,
          request: {},
        });
      }
    }, delay);
  });

/**
 * Crea una instancia axios falsa para el API.
 * Token, baseURL, etc. son ficticios; no se hacen llamadas reales.
 */
export const getInstance = async (
  token: string,
  file?: boolean,
): Promise<AxiosInstance> => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.propi.com/v1";
  const frontendSource = process.env.NEXT_PUBLIC_FRONTEND_SOURCE || "web";
  const timeout = 600000;

  const request = axios.create({
    baseURL,
    timeout,
    headers: {
      "x-frontend-source": frontendSource,
      "Content-Type": file ? "multipart/form-data" : "application/json",
      Authorization: `Bearer ${token}`,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adapter: fakeAdapter as any,
  });

  return request;
};
