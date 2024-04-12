import localfont from "next/font/local";

export const dots = localfont({
  src: [
    {
      path: "../../../public/fonts/schnee.ttf",
    },
  ],
  variable: "--font-dots",
  style: "normal",
});

export const oswald = localfont({
  src: [
    {
      path: "../../../public/fonts/Oswald/Oswald-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-oswald",
});

export const lora = localfont({
  src: [
    {
      path: "../../../public/fonts/Lora font/Lora-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-lora",
});
