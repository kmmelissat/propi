import localFont from "next/font/local";
import { Nunito } from "next/font/google";

export const menaGrotesk = localFont({
  src: [
    {
      path: "../fonts/Mena Grotesk Regular.otf",
      weight: "400",
      style: "normal",
    },
    { path: "../fonts/Mena Grotesk Medium.otf", weight: "500", style: "normal" },
    {
      path: "../fonts/Mena Grotesk SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    { path: "../fonts/Mena Grotesk Bold.otf", weight: "700", style: "normal" },
    {
      path: "../fonts/Mena Grotesk Regular Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Mena Grotesk Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-mena-grotesk",
});

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
