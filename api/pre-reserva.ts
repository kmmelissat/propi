import type { PreReservaBackendPayload } from "@/hooks/usePreReservaSubmit";
import { getInstance } from "./instance";

/**
 * Respuesta simulada del endpoint de pre-reserva.
 */
export interface PreReservaApiResponse {
  success: boolean;
  id: string;
  message: string;
}

/**
 * POST simulado a /pre-reserva.
 */
export async function submitPreReserva(
  payload: PreReservaBackendPayload
): Promise<PreReservaApiResponse> {
  const { data } = await (
    await getInstance("fake-token", false)
  ).post<PreReservaApiResponse>("/pre-reserva", payload);

  return {
    ...data,
    message: data?.message ?? "Pre-reserva registrada correctamente",
  };
}
