import type { Metadata } from "next";
import PropertyHeader from "@/components/property/property-header/PropertyHeader";
import PropertyCard from "@/components/property/property-card/PropertyCard";
import PreReservaForm from "@/components/pre-reserva/form/PreReservaForm";
import { PropertyType } from "@/types";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pre Reserva",
  description:
    "Reserva tu unidad en Opera Tower. Completa el formulario para continuar con tu pre-reserva.",
  openGraph: {
    title: "Propi | Pre Reserva - Opera Tower",
    description:
      "Reserva tu unidad en Opera Tower. Completa el formulario para continuar con tu pre-reserva.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propi | Pre Reserva",
    images: [ogImage.url],
  },
};

export default function PreReservaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PropertyHeader
        propertyName="Opera Tower"
        propertyType={PropertyType.APARTAMENTO}
      />

      <div className="px-4 py-6 md:px-[120px] md:py-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <PropertyCard
            imageSrc="/props/apartamento.png"
            imageAlt="Opera Tower"
            buildingName="Opera Tower"
            unitName="Apartamento BP13"
            bedrooms={2}
            bathrooms={2}
            areaM2={78}
            price={295000}
            isAvailable
          />
          <PreReservaForm />
        </div>
      </div>
    </main>
  );
}
