"use client";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  buttonText?: string;
}

export default function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  icon,
  buttonText = "Entendido",
}: CustomModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          {icon && <div className="mb-4">{icon}</div>}
          <h2
            id="modal-title"
            className="font-sans text-2xl font-bold text-grey-900"
          >
            {title}
          </h2>
          <div className="mt-3 font-nunito text-grey-600">{children}</div>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-lg bg-propi-green py-3 font-sans font-semibold text-white transition-colors hover:bg-propi-green/90"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
