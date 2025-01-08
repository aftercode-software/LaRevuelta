import ClienteCard from "@/components/clientes/ClienteCard";
import React from "react";

export interface Cliente {
  name: string;
  image: string;
  logo: string;
  href: string;
  category: string;
  year: string;
  description: React.ReactNode;
}

export const clientes: Cliente[] = [
  {
    name: "IPC Pools",
    image: "/images/clientes/ipc-banner.jpg",
    logo: "/images/clientes/ipc-logo.svg",
    href: "/clientes/ipc",
    category: "PISCINAS",
    year: "2024",
    description: (
      <>
        Nutriterra buscaba <b>fortalecer su marca en todo el territorio</b>{" "}
        donde tenía presencia comercial, para atenuar amenazas de la competencia
        y<b>consolidar su posición estratégica</b> de cara a la expansión
        planificada.
      </>
    ),
  },
  {
    name: "Nutriterra",
    image: "/images/clientes/nutriterra-banner.jpg",
    logo: "/images/clientes/nutriterra-logo.png",
    href: "/clientes/nutriterra",
    category: "AGRO",
    year: "2024",
    description: (
      <>
        Nutriterra buscaba <b>fortalecer su marca en todo el territorio</b>{" "}
        donde tenía presencia comercial, para atenuar amenazas de la competencia
        y<b>consolidar su posición estratégica</b> de cara a la expansión
        planificada.
      </>
    ),
  },
  {
    name: "Lila Software",
    image: "/images/clientes/lila-banner.jpg",
    logo: "/images/clientes/lila-logo.avif",
    href: "/clientes/lila",
    category: "SOFTWARE",
    year: "2024",
    description: (
      <>
        Nutriterra buscaba <b>fortalecer su marca en todo el territorio</b>{" "}
        donde tenía presencia comercial, para atenuar amenazas de la competencia
        y<b>consolidar su posición estratégica</b> de cara a la expansión
        planificada.
      </>
    ),
  },
];

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      {clientes.map((cliente) => (
        <ClienteCard key={cliente.name} {...cliente} />
      ))}
    </div>
  );
}
