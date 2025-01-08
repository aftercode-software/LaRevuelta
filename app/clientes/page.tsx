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
  startingPoint: React.ReactNode;
  stats: {
    title: string;
    description: string;
  }[];
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
    stats: [
      {
        title: "+2000",
        description: "nuevos prospectos comerciales generados",
      },
      {
        title: "+500%",
        description: "aumento de flujo de personas",
      },
      {
        title: "+25%",
        description: "aumento en la base de datos",
      },
    ],
    startingPoint: (
      <>
        Nutriterra nació con una misión:{" "}
        <b>ofrecer soluciones nutricionales innovadoras para cultivos</b>. Este
        espíritu de vanguardia impulsó su crecimiento en regiones clave como{" "}
        <b>Mendoza</b>, <b>San Juan</b>, <b>Tucumán</b>, <b>La Rioja</b>y
        provincias conexas. Sin embargo, el desafío era{" "}
        <b>traducir ese progreso en una estrategia robusta</b> que destacara los
        atributos diferenciales de la marca, consolidando su estructura
        comercial en plazas estratégicas mediante acciones coordinadas.
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
    stats: [
      {
        title: "+2000",
        description: "nuevos prospectos comerciales generados",
      },
      {
        title: "+500%",
        description: "aumento de flujo de personas",
      },
      {
        title: "+25%",
        description: "aumento en la base de datos",
      },
    ],
    startingPoint: (
      <>
        Nutriterra nació con una misión: ofrecer soluciones nutricionales
        innovadoras para cultivos. Este espíritu de vanguardia impulsó su
        crecimiento en regiones clave como Mendoza, San Juan, Tucumán, La Rioja
        y provincias conexas. Sin embargo, el desafío era traducir ese progreso
        en una estrategia robusta que destacara los atributos diferenciales de
        la marca, consolidando su estructura comercial en plazas estratégicas
        mediante acciones coordinadas.
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
    stats: [
      {
        title: "+2000",
        description: "nuevos prospectos comerciales generados",
      },
    ],
    startingPoint: (
      <>
        Nutriterra nació con una misión: ofrecer soluciones nutricionales
        innovadoras para cultivos. Este espíritu de vanguardia impulsó su
        crecimiento en regiones clave como Mendoza, San Juan, Tucumán, La Rioja
        y provincias conexas. Sin embargo, el desafío era traducir ese progreso
        en una estrategia robusta que destacara los atributos diferenciales de
        la marca, consolidando su estructura comercial en plazas estratégicas
        mediante acciones coordinadas.
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
