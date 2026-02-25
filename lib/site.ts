export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://propi-three.vercel.app");

export const ogImage = {
  url: `${siteUrl}/propi_image_og.png`,
  width: 1200,
  height: 630,
  alt: "Propi - Inmuebles en Latinoamérica",
};
