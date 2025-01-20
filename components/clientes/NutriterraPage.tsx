import React from "react";
import DataWarning from "./DataWarning";
import PieNutriterra from "./PieNutriterra";

export default function NutriterraPage() {
  return (
    <div>
      <Etapa1 />
      <Etapa2 />
    </div>
  );
}
function Etapa1() {
  return (
    <section className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <h2 className="font-semibold text-primario-300 text-3xl flex items-center gap-2 mb-4">
          <span className="font-light">Etapa 1</span> Generación de
          Hiper-conciencia
        </h2>
        <DataWarning />
        <p className="text-xl mt-3">
          La investigación inicial <b>reveló un desbalance</b>: Nutriterra,
          líder en fertilización líquida a medida,{" "}
          <b>no ocupaba una posición destacada en los canales clave</b>. El
          análisis del tráfico digital mostró que la competencia superaba a
          Nutriterra en visibilidad y asociación de marca, lo que representaba
          una{" "}
          <b>amenaza frente a las decisiones de compra de los productores</b>.
        </p>
        <p className="text-xl mt-2">
          Nutriterra necesitaba{" "}
          <b>mejorar su presencia en los puntos de contacto esenciales</b> con
          sus clientes ideales para mantener su liderazgo y evitar perder
          terreno frente a la competencia.
        </p>
      </div>
      <div className="w-full lg:w-[40vw]">
        <PieNutriterra />
      </div>
    </section>
  );
}

function Etapa2() {
  return (
    <section className="mt-10">
      <h2 className="font-semibold text-primario-300 text-3xl flex items-center gap-2 mb-4">
        <span className="font-light">Etapa 2</span> Plan de acción inmediato
      </h2>
      <p className="text-xl">
        Con base en los hallazgos de la investigación, se diseñó un{" "}
        <b>plan estratégico enfocado en maximizar la presencia de Nutriterra</b>{" "}
        en los puntos de referencia críticos para los productores agrícolas.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <Etapa2Lista />
        <div className="w-full lg:w-[40vw] flex flex-col gap-3">
          <img
            src="/images/clientes/nutriterra/bannerlimon.webp"
            className="rounded-xl"
            alt="Nutriterra Banner limón"
          />
          <img
            className="rounded-xl"
            src="/images/clientes/nutriterra/portalnutriterra.webp"
            alt="Nutriterra Portal"
          />
        </div>
      </div>
    </section>
  );
}

function Etapa2Lista() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <section>
        <h3 className="text-primario-300 text-xl font-semibold mb-1">
          1. Creación de una campaña offline integral:
        </h3>
        <ul className="text-xl list-disc list-inside pl-10">
          <li>
            <b>Vía pública</b> en Mendoza y Tucumán con piezas visuales
            adaptadas a cada región.
          </li>
          <li>
            <b>Radio con mensajes personalizados</b> según las necesidades de
            cada provincia.
          </li>
          <li>
            Utilización de <b>medios periodísticos especializados en agro</b>{" "}
            para aumentar la credibilidad y alcance.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-primario-300 text-xl font-semibold mb-1">
          2. Desarrollo de campaña online microsegmentada:{" "}
          <span className="font-medium text-white">
            Reconociendo la diversidad de necesidades según región y tipo de
            cultivo, se diseñó un flujo comercial personalizado
          </span>
        </h3>
        <ul className="text-xl list-disc list-inside pl-10">
          <li>
            <b>Mensajes específicos</b> para productores de Mendoza vs. el Norte
            de Argentina.
          </li>
          <li>Contenidos adaptados a cultivos como ajo, limón y vid.</li>
        </ul>
      </section>
      <section>
        <h3 className="text-primario-300 text-xl font-semibold mb-1">
          3. Intervención en universidades:{" "}
          <span className="font-medium text-white">
            Con el objetivo de influir en los futuros decisores de compra, se
            generó material técnico exclusivo para estudiantes de carreras
            agronómicas, posicionando a Nutriterra como un referente en
            formación profesional.
          </span>
        </h3>
      </section>
      <section>
        <h3 className="text-primario-300 text-xl font-semibold mb-1">
          4. Desarrollo de campaña online microsegmentada:{" "}
          <span className="font-medium text-white">
            Se desarrolló una plataforma centralizada con recursos de valor para
            productores e ingenieros agrónomos, disponible en formatos diversos.
          </span>
        </h3>
        <ul className="text-xl list-disc list-inside pl-10">
          <li>
            <b>Spotify</b>: Podcast con temas de actualidad agrícola.
          </li>
          <li>
            <b>YouTube</b>: Videos educativos y tutoriales.
          </li>
          <li>
            <b>Blog</b>: Artículos técnicos y casos de éxito.
          </li>
        </ul>
      </section>
    </div>
  );
}
