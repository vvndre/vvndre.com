import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { dots, oswald, lora } from "./utils/fonts";

export const metadata = {
  title: "vvndre",
  description: "Portfolio for Andre Castillon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>
      <body className={`${dots.variable} ${oswald.variable} ${lora.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
