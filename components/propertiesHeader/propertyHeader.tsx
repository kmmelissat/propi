import Image from "next/image";
import Link from "next/link";
import { IconArrowBackUp } from "@tabler/icons-react";
import { PropertyType, type PreReservaHeaderProps } from "@/types/property";

export default function PropertyHeader({
  propertyName,
  propertyType = PropertyType.APARTAMENTO,
}: PreReservaHeaderProps) {
  return (
    <header className="relative border-b border-grey-300 bg-white px-4 py-4 md:px-30">
      <div className="absolute right-4 top-4 md:hidden">
        <Image src="/propi_icon.svg" alt="Propi" width={32} height={32} />
      </div>

      <Link
        href="/"
        className="mb-4 inline-flex items-center text-grey-800 hover:text-grey-900"
        aria-label="Volver"
      >
        <IconArrowBackUp size={24} stroke={2} className="md:hidden" />
        <IconArrowBackUp size={32} stroke={2} className="hidden md:block" />
      </Link>

      <h1 className="font-sans text-xl font-bold text-grey-900 md:text-[28px]">
        Pre Reserva tu unidad
      </h1>
      <p className="mt-1 font-nunito text-sm text-grey-600 md:text-base">
        {propertyType} en {propertyName}
      </p>
    </header>
  );
}
