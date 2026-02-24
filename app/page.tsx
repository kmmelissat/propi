import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <Image
        src="/propi_logo.png"
        alt="Propi"
        width={200}
        height={80}
        priority
      />
    </div>
  );
}