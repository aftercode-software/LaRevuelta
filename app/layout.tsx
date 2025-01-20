import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import WhatsappBubble from "@/components/WhatsappBubble";
import type { Metadata } from "next";
import { Fustat, Geist, Onest } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Revuelta - Agencia de Marketing",
  description:
    "Redifinimos tus estándares. Ayudamos a empresas conscientes a potenciar su impacto y aportar valor al mundo a través de estrategias innovadoras, analítica avanzada y planes personalizados. Transformamos tu visión en crecimiento sostenible.",
  keywords:
    "marketing disruptivo, transformación empresarial, redefinir estándares, marketing innovador, marketing para empresas conscientes, crecimiento empresarial sostenible, marketing con impacto social, analítica empresarial, posicionamiento de marcas, expansión de mercados, nuevos desafíos empresariales, marketing estratégico, planes de marketing personalizados, marketing para startups, innovación en marketing digital, transformaciones empresariales, marketing para pymes, marketing para emprendedores, marketing para empresas, marketing para negocios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleAnalytics />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* <link
          rel="preload"
          as="image"
          href="/fotos/session.webp"
          type="image/webp"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${fustat.variable} ${onest.variable} antialiased relative`}
      >
        <Navbar />
        {children}
        <WhatsappBubble />
        <Footer />
      </body>
    </html>
  );
}
