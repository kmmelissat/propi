import { IconHomeCheck } from "@tabler/icons-react";

interface AvailabilityTagProps {
  variant?: "mobile" | "desktop";
  className?: string;
}

export default function AvailabilityTag({
  variant = "desktop",
  className = "",
}: AvailabilityTagProps) {
  const isMobile = variant === "mobile";

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full bg-propi-green-light font-nunito font-normal text-propi-green ${
        isMobile ? "gap-1 px-2 py-0.5 text-[10px]" : "gap-1.5 px-3 py-1 text-sm"
      } ${className}`}
    >
      <IconHomeCheck
        size={isMobile ? 10 : 16}
        stroke={2}
        className="shrink-0"
      />
      Disponible
    </span>
  );
}
