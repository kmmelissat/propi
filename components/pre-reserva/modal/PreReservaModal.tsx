"use client";

import { IconCircleCheck } from "@tabler/icons-react";
import CustomModal from "@/components/ui/CustomModal";
import type { PreReservaFormData } from "@/lib/schemas/preReservaSchema";

interface PreReservaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PreReservaFormData | null;
}

export default function PreReservaModal({
  isOpen,
  onClose,
  data,
}: PreReservaModalProps) {
  const telefonoCompleto = data
    ? `${data.codigoPais} ${data.telefono}`.trim()
    : "";

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Gracias por tu pre-reservación"
      icon={
        <IconCircleCheck
          size={80}
          className="text-propi-green"
          stroke={1.5}
        />
      }
      buttonText="Entendido"
    >
      <p>
        Te llegará un mensaje al número{" "}
        <span className="font-semibold text-grey-900">{telefonoCompleto}</span>{" "}
        con más detalles de tu visita.
      </p>
    </CustomModal>
  );
}
