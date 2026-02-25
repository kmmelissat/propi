/**
 * Formatea el número de documento mientras el usuario escribe,
 * según el tipo de documento seleccionado.
 */
export function formatDocumentNumber(
  value: string,
  tipoDocumento: string
): string {
  if (!tipoDocumento) return value;

  switch (tipoDocumento) {
    case "dui":
      return formatDui(value);
    case "nit":
      return formatNit(value);
    case "pasaporte":
      return formatPasaporte(value);
    default:
      return value;
  }
}

/** DUI: 8 dígitos + guión + 1 dígito (ej: 06734467-7) */
function formatDui(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  if (digits.length <= 8) return digits;
  return `${digits.slice(0, 8)}-${digits.slice(8)}`;
}

/** NIT: 14 dígitos en 4 grupos XXXX-XXXXXX-XXX-X */
function formatNit(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length <= 4) return digits;
  if (digits.length <= 10) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  if (digits.length <= 13)
    return `${digits.slice(0, 4)}-${digits.slice(4, 10)}-${digits.slice(10)}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 10)}-${digits.slice(10, 13)}-${digits.slice(13)}`;
}

/** Pasaporte: alfanumérico, hasta 20 caracteres (A, X, Y, Z + números) */
function formatPasaporte(value: string): string {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 20);
}

/** Solo letras, acentos, ñ, ü y espacios (para nombre/apellido) */
export function formatSoloLetras(value: string): string {
  return value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "");
}

/** Teléfono: solo dígitos, máximo 8 (formato: XXXX XXXX) */
export function formatTelefono(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 4) return digits;
  return `${digits.slice(0, 4)} ${digits.slice(4)}`;
}
