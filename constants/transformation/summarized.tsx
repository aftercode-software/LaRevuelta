import { Sparkle } from "lucide-react";

const BOX = "flex flex-row text-gray-700 py-10 relative";
const BOX3 = "flex flex-row text-gray-700 pb-10 items-start relative";
const DURACION =
  "text-xl lg:text-2xl font-semibold font-geist mb-3 lg:mb-5 text-primario-950";
const TEXTOBRILLITO =
  "flex flex-wrap items-center gap-1 sm:gap-2 text-xl font-semibold font-fustat text-secundario-900 leading-5 sm:leading-6 mb-6";
const BRILLITO = "fill-current text-secundario-700";
const SUBTITULO1 = "text-2xl font-fustat text-primario-950";
const SUBTITULO2 = "text-2xl font-fustat mt-4 text-primario-950";
const LIST =
  "list-disc pl-4 text-lg text-primario-900 marker:text-sm marker:text-primario-900";
const MARGENTOP = "mt-8";

export const pasos = [
  {
    title: "ANALÍTICA",
    content: (
      <div className={BOX}>
        <aside className="flex flex-col">
          <p className={DURACION}>
            <strong>DURACIÓN</strong> 1 a 2 meses
          </p>
          <p className={TEXTOBRILLITO}>
            <Sparkle size={20} className={BRILLITO} strokeWidth={3} />
            <b className="font-bold">Generación</b> de una{" "}
            <b className="font-extrabold">hiper conciencia</b>
          </p>
          <strong className={SUBTITULO1}>Analítica Interna</strong>
          <ul className={LIST}>
            <li>
              Desarrollo de tableros con{" "}
              <b className="font-semibold">métricas claves del negocio.</b>
            </li>
            <li>
              Desarrollo de{" "}
              <b className="font-semibold">
                informe de análisis de mejoras, puntos ineficientes, variables
                críticas
              </b>{" "}
              a trabajar.
            </li>
          </ul>
          <strong className={SUBTITULO2}>Analítica Externa</strong>
          <ul className={LIST}>
            <li>
              Investigación <b className="font-semibold">integral.</b>
            </li>
            <li>
              <b className="font-semibold">
                {" "}
                Qué piensan los clientes de nosotros{" "}
              </b>
              , market share, qué nivel de posicionamiento tenemos, competencia.
            </li>
          </ul>
        </aside>
        <aside className="w-1/2 hidden lg:block">
          <img
            src="/images/transformation/velocimetro.webp"
            alt="rocket"
            className="absolute -right-20 w-[40%] xl:w-[30%] -bottom-4 z-10"
          />
        </aside>
      </div>
    ),
  },
  {
    title: "CRECIMIENTO",
    content: (
      <div className={BOX}>
        <aside className="lg:w-[60%]">
          <p className={DURACION}>
            <strong>DURACIÓN</strong> 6 meses a 1 año
          </p>
          <p className={TEXTOBRILLITO}>
            <Sparkle size={20} className={BRILLITO} strokeWidth={3} />
            <b className="font-extrabold">Potenciar tu negocio actual</b>
          </p>
          <p className={`${MARGENTOP} + text-xl text-primario-900`}>
            Con la{" "}
            <b className="font-semibold">
              información crítica obtenida en la fase anterior
            </b>
            , definimos un plan práctico que se adapta a tu realidad actual.
          </p>
          <p className="mt-2 text-xl text-primario-900">Trabajamos con:</p>

          <ul className={LIST}>
            <li>
              {" "}
              <b className="font-semibold">
                Tu estructura organizativa actual.
              </b>
            </li>
            <li>Los productos o servicios que ya ofreces.</li>
            <li>Las herramientas y nivel de desarrollo digital disponibles.</li>
          </ul>
        </aside>
        <aside className="w-1/2 hidden lg:block">
          <img
            src="/images/transformation/bars.webp"
            alt="rocket"
            className="absolute -right-16 w-[38%] xl:w-[25%] -bottom-10 "
          />
        </aside>
      </div>
    ),
  },
  {
    title: "MÁS ALLÁ",
    content: (
      <div className={BOX3}>
        <aside className="xl:w-[53%]">
          <p className={DURACION}>
            <strong>LUEGO DEL PRIMER AÑO DE UN PLAN</strong>
          </p>
          <p className={TEXTOBRILLITO}>
            <Sparkle size={20} className={BRILLITO} strokeWidth={3} />
            <b className="font-extrabold">Planteo y desarrollo de</b>
            <b className="font-extrabold">nuevos desafíos</b>
          </p>
          <p className={`${MARGENTOP} + text-xl text-primario-900`}>
            Tras estabilizar las necesidades críticas y orientar los esfuerzos
            hacia los objetivos definidos, es momento de{" "}
            <b className="font-semibold">
              {" "}
              expandir la visión de valor de tu empresa.
            </b>
          </p>
          <p className="mt-2 text-xl text-primario-900">Nos enfocamos en:</p>

          <ul className={LIST}>
            <li>
              Explorar <b className="font-semibold">nuevos mercados.</b>
            </li>
            <li>
              Dirigirnos a <b className="font-semibold">nuevos segmentos.</b>
            </li>
            <li>
              Lanzar nuevos{" "}
              <b className="font-semibold">productos o servicios.</b>
            </li>
            <li>
              Desarrollar <b className="font-semibold">nuevas marcas.</b>
            </li>
          </ul>
        </aside>
        <aside className="w-1/2 z-0 hidden lg:block">
          <img
            src="/images/transformation/rocket.webp"
            alt="rocket"
            className="absolute -right-8 xl:right-12 w-[38%] xl:w-[32%] -bottom-4 xl:-bottom-8"
          />
        </aside>
      </div>
    ),
  },
];
