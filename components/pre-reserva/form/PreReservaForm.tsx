"use client";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IconBrandWhatsapp,
  IconLockSquareRounded,
  IconMail,
} from "@tabler/icons-react";
import {
  preReservaSchema,
  type PreReservaFormData,
} from "@/lib/schemas/preReservaSchema";
import {
  formatDocumentNumber,
  formatTelefono,
  formatSoloLetras,
} from "@/lib/documentFormatters";
import PreReservaModal from "@/components/pre-reserva/modal/PreReservaModal";
import TerminosModal from "@/components/pre-reserva/modal/TerminosModal";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomFormItem from "@/components/ui/CustomFormItem";
import CustomCard from "@/components/ui/CustomCard";
import { Controller, useWatch, useForm } from "react-hook-form";
import {
  TIPOS_DOCUMENTO,
  CODIGOS_PAIS,
  VerificarPor,
  DOCUMENTO_PLACEHOLDERS,
} from "@/lib/constants/preReserva";

export default function PreReservaForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showTerminosModal, setShowTerminosModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<PreReservaFormData | null>(
    null,
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PreReservaFormData>({
    resolver: yupResolver(preReservaSchema),
    mode: "onTouched",
    defaultValues: {
      verificarPor: VerificarPor.WHATSAPP,
      aceptaTerminos: false,
    },
  });

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border px-3 py-2 font-nunito text-xs text-grey-900 placeholder:text-grey-500 outline-none focus:border-propi-green md:text-base ${
      hasError ? "border-red-500 focus:border-red-500" : "border-grey-300"
    }`;

  const verificarPor = useWatch({ control, name: "verificarPor" });
  const tipoDocumento = useWatch({ control, name: "tipoDocumento" });
  const aceptaTerminos = useWatch({ control, name: "aceptaTerminos" });

  const documentoPlaceholder =
    DOCUMENTO_PLACEHOLDERS[tipoDocumento ?? ""] ?? "Selecciona tipo de documento";

  const onSubmit = (data: PreReservaFormData) => {
    setSubmittedData(data);
    setShowSuccessModal(true);
  };

  return (
    <>
      <PreReservaModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        data={submittedData}
      />
      <TerminosModal
        isOpen={showTerminosModal}
        onClose={() => setShowTerminosModal(false)}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 text-xs sm:text-sm"
      >
        <div className="hidden sm:block">
          <h2 className="font-sans text-[22px] font-bold text-grey-900">
            Información personal
          </h2>
          <p className="font-nunito text-base text-grey-900">
            Completa los datos para continuar con la reserva
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <CustomFormItem
            label="Nombre"
            htmlFor="nombre"
            error={errors.nombre?.message}
            errorId="nombre-error"
          >
            <Controller
              name="nombre"
              control={control}
              render={({ field }) => (
                <input
                  id="nombre"
                  {...field}
                  className={inputClass(!!errors.nombre)}
                  placeholder="Hugo"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  onChange={(e) => {
                    field.onChange(formatSoloLetras(e.target.value));
                  }}
                />
              )}
            />
          </CustomFormItem>
          <CustomFormItem
            label="Apellido"
            htmlFor="apellido"
            error={errors.apellido?.message}
            errorId="apellido-error"
          >
            <Controller
              name="apellido"
              control={control}
              render={({ field }) => (
                <input
                  id="apellido"
                  {...field}
                  className={inputClass(!!errors.apellido)}
                  placeholder="Barrientos"
                  aria-invalid={!!errors.apellido}
                  aria-describedby={
                    errors.apellido ? "apellido-error" : undefined
                  }
                  onChange={(e) => {
                    field.onChange(formatSoloLetras(e.target.value));
                  }}
                />
              )}
            />
          </CustomFormItem>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <CustomFormItem
            label="Tipo de documento"
            htmlFor="tipoDocumento"
            error={errors.tipoDocumento?.message}
            errorId="tipoDocumento-error"
          >
            <Controller
              name="tipoDocumento"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  id="tipoDocumento"
                  value={field.value}
                  onChange={(val) => {
                    field.onChange(val);
                    setValue("numeroDocumento", "");
                  }}
                  options={TIPOS_DOCUMENTO}
                  placeholder="Seleccionar"
                  hasError={!!errors.tipoDocumento}
                  aria-invalid={!!errors.tipoDocumento}
                  aria-describedby={
                    errors.tipoDocumento ? "tipoDocumento-error" : undefined
                  }
                />
              )}
            />
          </CustomFormItem>
          <CustomFormItem
            label="N° de documento"
            htmlFor="numeroDocumento"
            error={errors.numeroDocumento?.message}
            errorId="numeroDocumento-error"
          >
            <Controller
              name="numeroDocumento"
              control={control}
              render={({ field }) => (
                <input
                  id="numeroDocumento"
                  {...field}
                  className={inputClass(!!errors.numeroDocumento)}
                  placeholder={documentoPlaceholder}
                  aria-invalid={!!errors.numeroDocumento}
                  aria-describedby={
                    errors.numeroDocumento ? "numeroDocumento-error" : undefined
                  }
                  onChange={(e) => {
                    const formatted = formatDocumentNumber(
                      e.target.value,
                      tipoDocumento,
                    );
                    field.onChange(formatted);
                  }}
                />
              )}
            />
          </CustomFormItem>
        </div>

        <CustomFormItem
          label="Correo electrónico"
          htmlFor="email"
          error={errors.email?.message}
          errorId="email-error"
        >
          <input
            id="email"
            type="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
            placeholder="hugo.barrientos@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </CustomFormItem>

        <div className="grid grid-cols-[8rem_1fr] gap-4 sm:grid-cols-[9rem_1fr]">
          <CustomFormItem
            label="Código"
            htmlFor="codigoPais"
            error={errors.codigoPais?.message}
            errorId="codigoPais-error"
            className="min-w-0"
          >
            <Controller
              name="codigoPais"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  id="codigoPais"
                  value={field.value}
                  onChange={field.onChange}
                  options={CODIGOS_PAIS}
                  placeholder="Seleccionar"
                  hasError={!!errors.codigoPais}
                  className="w-full min-w-0"
                  aria-invalid={!!errors.codigoPais}
                  aria-describedby={
                    errors.codigoPais ? "codigoPais-error" : undefined
                  }
                />
              )}
            />
          </CustomFormItem>
          <CustomFormItem
            label="Número de teléfono"
            htmlFor="telefono"
            error={errors.telefono?.message}
            errorId="telefono-error"
          >
            <Controller
              name="telefono"
              control={control}
              render={({ field }) => (
                <input
                  id="telefono"
                  {...field}
                  type="tel"
                  inputMode="numeric"
                  className={inputClass(!!errors.telefono)}
                  placeholder="6060 7890"
                  aria-invalid={!!errors.telefono}
                  aria-describedby={
                    errors.telefono ? "telefono-error" : undefined
                  }
                  onChange={(e) => {
                    field.onChange(formatTelefono(e.target.value));
                  }}
                />
              )}
            />
          </CustomFormItem>
        </div>

        <CustomFormItem label="Verificar número de teléfono por">
          <div
            className="mt-2 flex flex-col gap-3"
            role="radiogroup"
            aria-label="Verificar número de teléfono por"
          >
            <CustomCard
              id="verificarPor-whatsapp"
              value={VerificarPor.WHATSAPP}
              selected={verificarPor === VerificarPor.WHATSAPP}
              icon={<IconBrandWhatsapp size={20} />}
              label="Whatsapp"
              registerProps={register("verificarPor")}
            />
            <CustomCard
              id="verificarPor-sms"
              value={VerificarPor.SMS}
              selected={verificarPor === VerificarPor.SMS}
              icon={<IconMail size={20} />}
              label="Mensaje de texto"
              registerProps={register("verificarPor")}
            />
          </div>
        </CustomFormItem>

        <CustomFormItem
          label={
            <span className="text-[10px] md:text-xs">
              He leído y acepto los{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowTerminosModal(true);
                }}
                className="text-propi-green cursor-pointer hover:text-propi-green/90"
              >
                términos y condiciones
              </button>
            </span>
          }
          htmlFor="aceptaTerminos"
          error={errors.aceptaTerminos?.message}
          errorId="aceptaTerminos-error"
          inline
        >
          <CustomCheckbox
            id="aceptaTerminos"
            checked={!!aceptaTerminos}
            hasError={!!errors.aceptaTerminos}
            {...register("aceptaTerminos")}
            aria-invalid={!!errors.aceptaTerminos}
            aria-describedby={
              errors.aceptaTerminos ? "aceptaTerminos-error" : undefined
            }
          />
        </CustomFormItem>

        <button
          type="submit"
          disabled={!aceptaTerminos}
          className="w-full rounded-lg bg-propi-green py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-propi-green/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-propi-green sm:text-base"
        >
          Confirmar reserva
        </button>

        <div className="flex items-center justify-center gap-2 rounded-xl border border-grey-300 bg-grey-200 px-4 py-3 font-nunito text-[10px] text-grey-700 md:text-xs">
          <IconLockSquareRounded size={18} className="shrink-0 text-grey-700" />
          <span>
            Tus datos están protegidos y encriptados. Solo serán utilizados para
            procesar tu prereserva.
          </span>
        </div>
      </form>
    </>
  );
}
