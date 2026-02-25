import PropertyHeader from "@/components/property/property-header/PropertyHeader";
import { PropertyType } from "@/types";

export const metadata = {
  title: "Pre Reserva",
};

export default function PreReservaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PropertyHeader
        propertyName="Opera Tower"
        propertyType={PropertyType.APARTAMENTO}
      />
    </main>
  );
}
