import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";

export const metadata = {
  title: "Propi | Inicio",
};

export default function Home() {
  return (
    <main className="relative h-[calc(100vh-100px)] min-h-[500px]">
      <Carousel />

      <div className="absolute inset-0 z-1 bg-black/40" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
        <header className="mb-8 max-w-2xl">
          <h1 className="font-sans text-4xl font-bold text-white drop-shadow-lg lg:text-5xl">
            Bienvenido a Propi
          </h1>
          <p className="mt-4 font-nunito text-lg text-white/95 drop-shadow-md">
            Encuentra los mejores inmuebles en Latinoamérica. Compra en planos,
            compra inmediata o alquila el hogar que buscas.
          </p>
        </header>

        <Link
          href="/pre-reserva"
          className="inline-flex items-center justify-center rounded-lg bg-propi-green px-6 py-3 font-sans font-semibold text-white shadow-lg transition-colors hover:bg-propi-green/90"
        >
          Ir a la pre-reserva
        </Link>
      </div>
    </main>
  );
}
