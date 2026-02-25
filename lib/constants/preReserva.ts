import type { SelectOption } from "@/components/ui/CustomSelect";

export enum VerificarPor {
  WHATSAPP = "whatsapp",
  SMS = "sms",
}

export const DOCUMENTO_PLACEHOLDERS: Record<string, string> = {
  dui: "06734467-7",
  nit: "0614-212345-678-1",
  pasaporte: "A12345678",
};

export const TIPOS_DOCUMENTO: SelectOption[] = [
  { value: "", label: "Seleccionar" },
  { value: "dui", label: "DUI" },
  { value: "pasaporte", label: "Pasaporte" },
  { value: "nit", label: "NIT" },
];

export const CODIGOS_PAIS: SelectOption[] = [
  { value: "", label: "Seleccionar" },
  { value: "+503", label: "+503", flag: "/props/el_salvador.svg" },
  { value: "+502", label: "+502" },
  { value: "+504", label: "+504" },
  { value: "+505", label: "+505" },
  { value: "+506", label: "+506" },
];
