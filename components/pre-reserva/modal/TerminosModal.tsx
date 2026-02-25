"use client";

import { IconMoodSmile } from "@tabler/icons-react";
import CustomModal from "@/components/ui/CustomModal";

interface TerminosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminosModal({
  isOpen,
  onClose,
}: TerminosModalProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Términos y condiciones"
      icon={
        <IconMoodSmile
          size={80}
          className="text-propi-green"
          stroke={1.5}
        />
      }
      buttonText="Jajaja ok"
    >
      <p>Just joking, no hay, esto es una prueba de melissa :)</p>
    </CustomModal>
  );
}
