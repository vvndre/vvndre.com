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
        <link rel="icon" href="/public/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${dots.variable} ${oswald.variable} ${lora.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
