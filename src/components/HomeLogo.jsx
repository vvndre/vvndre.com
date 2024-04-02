import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";

function HomeLogo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={200}
        height={80}
        quality={100}
        alt="Logo"
        priority={true}
      />
    </Link>
  );
}

export default HomeLogo;
