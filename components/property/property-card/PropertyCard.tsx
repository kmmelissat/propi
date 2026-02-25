import Image from "next/image";
import { IconBed, IconBath, IconRuler } from "@tabler/icons-react";
import type { PropertyCardProps } from "@/types";
import AvailabilityTag from "../availability-tag/AvailabilityTag";

export default function PropertyCard({
  imageSrc,
  imageAlt,
  buildingName,
  unitName,
  bedrooms,
  bathrooms,
  areaM2,
  price,
  isAvailable = true,
}: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <article className="flex overflow-hidden rounded-xl border border-grey-300 bg-white p-2 md:p-3">
      <div className="flex w-full flex-row gap-2 md:flex-col md:gap-3">
        {isAvailable && (
          <AvailabilityTag
            variant="desktop"
            className="max-md:hidden!"
          />
        )}
        <div className="relative h-[114px] w-[114px] shrink-0 overflow-hidden rounded-[12px] border border-grey-300 md:aspect-4/3 md:h-auto md:w-full md:border-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 114px, 400px"
          />
        </div>

        {/* Contenido */}
        <div className="relative flex min-w-0 flex-1 flex-col gap-1.5 md:gap-3">
          {isAvailable && (
            <AvailabilityTag
              variant="mobile"
              className="absolute right-0 top-0 z-10 md:hidden"
            />
          )}
          <div className="pt-5 md:pt-0">
            <p className="font-nunito text-xs font-normal text-grey-700 md:text-base">
              {buildingName}
            </p>
            <h3 className="mt-0.5 font-sans text-base font-bold text-grey-700 md:mt-1 md:text-[22px]">
              {unitName}
            </h3>
          </div>

          <div className="flex items-center gap-2 font-nunito text-xs text-grey-700 md:gap-3 md:text-sm">
            <span className="flex items-center gap-0.5">
              <IconBed
                size={14}
                stroke={2}
                className="md:w-[18px] md:h-[18px]"
              />
              {bedrooms}
            </span>
            <span className="flex items-center gap-0.5">
              <IconBath
                size={14}
                stroke={2}
                className="md:w-[18px] md:h-[18px]"
              />
              {bathrooms}
            </span>
            <span className="flex items-center gap-0.5">
              <IconRuler
                size={14}
                stroke={2}
                className="md:w-[18px] md:h-[18px]"
              />
              {areaM2} mt²
            </span>
          </div>

          <div className="hidden border-b border-grey-300 md:block" />
          <div className="rounded-lg p-0 md:bg-propi-green-ultra-light md:p-3">
            <p className="hidden font-nunito text-sm text-propi-green md:block">
              Precio
            </p>
            <p className="font-sans text-xl font-bold text-propi-green md:text-4xl">
              {formattedPrice}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
