/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import portrait from "/public/images/Portrait.png";

export default function Home() {
  const name = "Andre Castillon".split("");

  return (
    <main className="flex min-h-screen items-center flex-col bg-dark-void">
      <div className="flex justify-center items-center relative mt-24">
        <Image
          src={portrait}
          width={600}
          height={600}
          alt="Picture of the author"
          quality={100}
          className="relative rounded-full z-1"
        />
      </div>
    </main>
  );
}
