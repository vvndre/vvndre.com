import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { dots, oswald, lora } from "./utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vvndre",
  description: "Portfolio for Andre Castillon",
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
