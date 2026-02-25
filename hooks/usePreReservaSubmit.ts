import type { PreReservaFormData } from "@/lib/schemas/preReservaSchema";

/**
 * Payload del request POST /pre-reserva.
 */
export interface PreReservaBackendPayload {
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  numeroDocumento: string;
  email: string;
  codigoPais: string;
  telefono: string;
  telefonoCompleto: string;
  verificarPor: string;
}

/**
 * Hook que transforma la data del formulario al payload que espera el API.
 */
export function usePreReservaSubmit() {
  const buildPayload = (data: PreReservaFormData): PreReservaBackendPayload => {
    const telefonoCompleto = `${data.codigoPais} ${data.telefono}`.trim();

    return {
      nombre: data.nombre.trim(),
      apellido: data.apellido.trim(),
      tipoDocumento: data.tipoDocumento,
      numeroDocumento: data.numeroDocumento.replace(/\s/g, ""),
      email: data.email.trim().toLowerCase(),
      codigoPais: data.codigoPais,
      telefono: data.telefono.replace(/\s/g, ""),
      telefonoCompleto,
      verificarPor: data.verificarPor,
    };
  };

  return { buildPayload };
}
