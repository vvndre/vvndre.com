import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "/public/images/logo.png";
import hoverLogo from "/public/images/logo-0.png";

function HomeLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: "relative", width: 200, height: 80 }}
      >
        <Image
          src={Logo}
          alt="Logo"
          layout="fill"
          objectFit="contain"
          style={{
            transition: "opacity 0.5s ease",
            opacity: isHovered ? 0 : 1,
          }}
        />
        <Image
          src={hoverLogo}
          alt="Hover Logo"
          layout="fill"
          objectFit="contain"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transition: "opacity 0.5s ease",
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </Link>
  );
}

export default HomeLogo;
