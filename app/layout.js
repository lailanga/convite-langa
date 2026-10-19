import { Alfa_Slab_One, Nunito } from "next/font/google";
import "./globals.css";

const display = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Encontro da Família Langa",
  description:
    "Domingo, dia 07 de Fevereiro de 2027: missa às 10h, almoço tradicional e matinê em Paineira do Iguaçu, Cruzeiro do Iguaçu - PR.",
  openGraph: {
    title: "Encontro da Família Langa",
    description:
      "Missa às 10h, almoço tradicional e matinê. Venha, mesmo que seu sobrenome seja Longa, Langue ou Lange.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
