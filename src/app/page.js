import Image from "next/image";
import portrait from "/public/images/Portrait-BW.png";
import RotatingText from "@/components/rotating-text/RotatingText";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-8 px-6 items-center flex-col bg-dark-void">
      <div className="py-12 container-xl text-center"></div>
      <div className="relative">
        <Image
          src={portrait}
          width={700}
          height={700}
          alt="Picture of the author"
          quality={100}
          className="rounded-full"
        />
        <RotatingText />
      </div>
    </main>
  );
}
