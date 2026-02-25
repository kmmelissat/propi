import * as yup from "yup";
import { VerificarPor } from "@/lib/constants/preReserva";

const duiRegex = /^\d{8}-\d$/;
const nitRegex = /^\d{4}-\d{6}-\d{3}-\d$/;
const pasaporteRegex = /^[A-Z0-9]{1,20}$/;
function getDocumentoError(tipo: string): string {
  if (tipo === "dui") return "Formato DUI inválido ";
  if (tipo === "nit") return "Formato NIT inválido ";
  if (tipo === "pasaporte") return "Máximo 20 caracteres alfanuméricos";
  return "Formato inválido";
}

export const preReservaSchema = yup.object({
  nombre: yup.string().required("El nombre es requerido"),
  apellido: yup.string().required("El apellido es requerido"),
  tipoDocumento: yup.string().required("Selecciona un tipo de documento"),
  numeroDocumento: yup
    .string()
    .required("El número de documento es requerido")
    .test(
      "formato-documento",
      (params: Record<string, unknown>) => {
        const parent = params?.parent as { tipoDocumento?: string } | undefined;
        const tipo = parent?.tipoDocumento;
        return getDocumentoError(tipo ?? "");
      },
      (value, context) => {
        const tipo = context?.parent?.tipoDocumento as string | undefined;
        if (!value || !tipo) return true;
        if (tipo === "dui") return duiRegex.test(value);
        if (tipo === "nit") return nitRegex.test(value);
        if (tipo === "pasaporte") return pasaporteRegex.test(value);
        return true;
      },
    ),
  email: yup
    .string()
    .required("El correo es requerido")
    .email("Correo electrónico inválido"),
  codigoPais: yup.string().required("Selecciona el código de país"),
  telefono: yup.string().required("El número de teléfono es requerido"),
  verificarPor: yup
    .string()
    .oneOf([VerificarPor.WHATSAPP, VerificarPor.SMS])
    .required(),
  aceptaTerminos: yup
    .boolean()
    .required("Debes aceptar los términos y condiciones")
    .oneOf([true], "Debes aceptar los términos y condiciones"),
});

export type PreReservaFormData = yup.InferType<typeof preReservaSchema>;
