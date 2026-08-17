import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { dots, oswald, lora } from "./utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andre Castillon | vvndre.com",
  description:
    "Front-end Engineer bridging the gap between UX and code.",

  openGraph: {
    title: "Andre Castillon | Front-end Engineer & UX/UI Designer",
    description:
      "Front-end Engineer bridging the gap between UX and code.",
    url: "https://vvndre.com",
    siteName: "Andre Castillon",
    images: [
      {
        url: "/images/og/andre-portfolio-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Andre Castillon portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Andre Castillon | Front-end Engineer & UX/UI Designer",
    description:
      "Front-end Engineer bridging the gap between UX and code.",
    images: ["/images/og/andre-portfolio-v2.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${dots.variable} ${oswald.variable} ${lora.variable}`}>
        <link rel="icon" href="/images/icon.png" sizes="any" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
