import type { Metadata } from "next";
import { menaGrotesk, nunito } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Propi | %s",
    default: "Propi",
  },
  description: "Encuentra en Propi los mejores inmuebles de LATAM",
  openGraph: {
    title: "Propi",
    description: "Encuentra en Propi los mejores inmuebles de LATAM",
    images: ["/propi_image.webp"],
  },
  icons: {
    icon: "/propi_icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${menaGrotesk.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
