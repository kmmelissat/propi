import type { Metadata } from "next";
import { menaGrotesk, nunito } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://propi-three.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "Propi | %s",
    default: "Propi",
  },
  description: "Encuentra en Propi los mejores inmuebles de LATAM. Compra en planos, compra inmediata o alquila el hogar que buscas.",
  keywords: ["inmuebles", "LATAM", "compra", "alquiler", "propiedades", "real estate"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Propi",
    title: "Propi",
    description: "Encuentra en Propi los mejores inmuebles de LATAM. Compra en planos, compra inmediata o alquila el hogar que buscas.",
    images: [
      {
        url: `${siteUrl}/propi_image_og.png`,
        width: 1200,
        height: 630,
        alt: "Propi - Inmuebles en Latinoamérica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propi - Inmuebles en Latinoamérica",
    description: "Encuentra en Propi los mejores inmuebles de LATAM.",
    images: [`${siteUrl}/propi_image_og.png`],
  },
  icons: {
    icon: "/propi_icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Propi",
    description: "Encuentra en Propi los mejores inmuebles de LATAM.",
    url: siteUrl,
  };

  return (
    <html lang="es">
      <body
        className={`${menaGrotesk.variable} ${nunito.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
