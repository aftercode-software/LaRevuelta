import { Cliente } from "@/interfaces/clientes";

export const clientes: Cliente[] = [
  {
    name: "IPC Pools",
    image: "/images/clientes/ipc-banner.webp",
    logo: "/images/clientes/ipc-logo.svg",
    href: "/clientes/ipc",
    category: "PISCINAS",
    year: "2023-2024",
    description: (
      <>
        IPC tenía un <b>dolor claro</b>: quería consolidarse como el líder
        indiscutido del sector, posición que estaba siendo cuestionada por{" "}
        <b>acciones agresivas de la competencia</b> en los distintos mercados
        donde la empresa comercializa sus piscinas.
      </>
    ),
    stats: [
      {
        title: "+19k",
        description: "visitas orgánicas en la web",
      },
      {
        title: "+60%",
        description: "aumento de flujo de personas",
      },
      {
        title: "+220k",
        description: "reproducciones en el spot de Youtube",
      },
    ],
    startingPoint: (
      <>
        Tiene <b>atributos únicos</b> como empresa líder del sector, ya que es
        una compañía que prioriza como misión fundamental la innovación
        constante en el desarrollo de sus productos, con la base clave de que
        fue la{" "}
        <b>
          primer empresa en Argentina en fabricar piscinas de plástico con fibra
          de vidrio
        </b>
        .
      </>
    ),
  },
  {
    name: "Nutriterra",
    image: "/images/clientes/nutriterra-banner.webp",
    logo: "/images/clientes/nutriterra-logo.svg",
    href: "/clientes/nutriterra",
    category: "AGRO",
    year: "2024-ACT",
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
  // {
  //   name: "Lila Software",
  //   image: "/images/clientes/lila-banner.webp",
  //   logo: "/images/clientes/lila-logo.avif",
  //   href: "/clientes/lila",
  //   category: "SOFTWARE",
  //   year: "2024",
  //   description: (
  //     <>
  //       Nutriterra buscaba <b>fortalecer su marca en todo el territorio</b>{" "}
  //       donde tenía presencia comercial, para atenuar amenazas de la competencia
  //       y<b>consolidar su posición estratégica</b> de cara a la expansión
  //       planificada.
  //     </>
  //   ),
  //   stats: [
  //     {
  //       title: "+2000",
  //       description: "nuevos prospectos comerciales generados",
  //     },
  //   ],
  //   startingPoint: (
  //     <>
  //       Nutriterra nació con una misión: ofrecer soluciones nutricionales
  //       innovadoras para cultivos. Este espíritu de vanguardia impulsó su
  //       crecimiento en regiones clave como Mendoza, San Juan, Tucumán, La Rioja
  //       y provincias conexas. Sin embargo, el desafío era traducir ese progreso
  //       en una estrategia robusta que destacara los atributos diferenciales de
  //       la marca, consolidando su estructura comercial en plazas estratégicas
  //       mediante acciones coordinadas.
  //     </>
  //   ),
  // },
];
