import { ArrowRight } from "lucide-react";
import React from "react";
import DataWarning from "./DataWarning";
import PieIpc from "./PieIpc";

export default function IpcPage() {
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
          Realizamos una investigación en <b>octubre de 2023</b> que reveló que
          la competencia estaba ganando terreno en búsquedas digitales y ventas.
          Aunque IPC lideraba en tráfico orgánico al sitio web (12.1K),{" "}
          <b>sólo el 55.74% estaba asociado directamente a su marca</b>, frente
          a un <b>80.94%</b> de su competidor principal. En visitas netas
          asociadas a la marca, IPC quedaba en segundo lugar. Este análisis
          validó el problema y sirvió como base para diseñar un plan de acción.
        </p>
      </div>
      <div className="w-full lg:w-[40vw]">
        <PieIpc />
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
        Se desarrolló un <b>Plan de Acción Anual</b> que comprendió bastantes
        acciones con el objetivo de <b>consolidar el posicionamiento de IPC</b>{" "}
        como empresa líder y referente del sector, pero en esta ocasión{" "}
        <b>queremos destacar una</b>:
      </p>
      <section className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="flex-1">
          <h4 className="text-2xl text-primario-300 font-bold">
            Día de la pileta
          </h4>
          <p className="text-xl mt-3">
            Como destacamos en la presentación del caso, IPC fue la primer
            empresa en fabricar piscinas de plástico reforzadas con fibra de
            vidrio, y durante décadas ha innovado en la creación de nuevas
            piscinas pensadas para el confort del usuario, es por eso que{" "}
            <b>
              detectamos una oportunidad que se asemejaba de forma perfecta al
              objetivo planteado en el Plan
            </b>
            :
          </p>
          <div className="flex items-center gap-2 mt-3 text-xl font-bold text-primario-300">
            <ArrowRight className="w-6 h-6 text-primario-300" />{" "}
            <p>CREAR EL DÍA DE LA PILETA YA QUE EN ARGENTINA NO EXISTÍA</p>
          </div>
          <p className="text-xl mt-3">
            Si hay una empresa que era la <b>candidata ideal</b> para la
            creación de esta efeméride por su recorrido, conocimiento y calidad
            esa empresa era IPC.
          </p>
          <p className="text-xl mt-3">
            La creación del día{" "}
            <b>se patentó y se desarrolló un spot completo</b> que incluyó
            difusión digital y offline.
          </p>
        </div>
        <aside className="w-full lg:w-[40vw] flex flex-col gap-3">
          <img
            src="/images/clientes/ipc/diadepileta.webp"
            className="rounded-xl"
            alt="IPC Día de la pileta"
          />
        </aside>
      </section>
    </section>
  );
}
