import { Sparkle } from "lucide-react";

const BOX = "flex flex-row text-white py-8 relative";
const TEXTOBRILLITO =
  "flex flex-wrap items-center gap-1 sm:gap-1 text-2xl sm:text-xl md:text-3xl font-semibold font-fustat text-white leading-6 mb-6";
const SUBTITULO = "text-2xl font-fustat text-white mb-3";
const BRILLITO = "fill-current text-secundario-700";
const SUBTITULO1 = "text-2xl font-fustat font-bold text-primario-500 ";
const LIST =
  "list-disc pl-4 text-lg xl:text-xl space-y-2 font-geist text-white marker:text-sm marker:text-white";
const ASIDELEFT = "xl:w-[55%] xl:mr-10";
const ASIDERIGHT = "mt-10 xl:mt-0 xl:w-[45%]";
const ULTIMOTEXTO = "font-geist text-xl xl:text-2xl my-10";

export const pasos = [
  {
    title: "ANALITICA",
    duration: "DURACIÓN 1 a 2 meses",
    content: (
      <div className={BOX}>
        <section className="flex flex-col w-full">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <p className={TEXTOBRILLITO}>
              <Sparkle
                size={20}
                className={BRILLITO + " flex-shrink-0 mr-1"}
                strokeWidth={3}
              />
              <span className="font-bold">Desarrollo de</span>
              <span className="font-bold">de</span>
              <span className="font-bold">relevamiento </span>
              <span className="font-bold">y diagnóstico</span>
              <span className="font-bold">la empresa</span>
              <span className="font-bold">general de</span>
              <span className="font-bold">y/o mercado</span>
            </p>
          </div>

          <section>
            <p className={SUBTITULO}>
              Etapa 1 <b className={SUBTITULO1}>Analítica Interna</b>
            </p>
            <div className="flex flex-col lg:flex-row">
              <aside className={ASIDELEFT}>
                <ul className={LIST}>
                  <li>
                    Desarrollo de{" "}
                    <b className="font-bold">
                      tableros con métricas claves del negocio
                    </b>
                    : Power Bi – Looker Studio en función de preferencia.
                  </li>
                  <li>
                    Desarrollo de{" "}
                    <b className="font-semibold">
                      informe de análisis de mejoras, puntos ineficientes,
                      variables críticas
                    </b>{" "}
                    a trabajar.
                  </li>
                  <li>
                    <b className="font-bold">
                      Clusterización de embudo por canales
                    </b>
                    , para determinar eficiencia de cada canal y aporte real al
                    negocio.
                  </li>
                  <li>
                    <b className="font-bold">Análisis de procesos actuales</b>,
                    funcionamiento de tareas, intervención de diferentes áreas.
                  </li>
                  <li>
                    <b className="font-bold">
                      Análisis de la utilización y maximización de valor de cada
                      canal
                    </b>
                    : ¿Se está aprovechando la base de datos? ¿Existe un flujo
                    de abordaje completo de leads? ¿Se conoce el motivo de
                    abandono en el proceso comercial?
                  </li>
                </ul>
              </aside>
              <aside className={ASIDERIGHT}>
                <p className={SUBTITULO}>
                  <b className={SUBTITULO1}>Entregables</b>
                </p>
                <ul className={LIST}>
                  <li>
                    <b className="font-bold">
                      Informe completo del estado actual{" "}
                    </b>
                    del funcionamiento de la empresa.
                  </li>
                  <li>
                    <b className="font-bold">
                      Tablero interactivo con datos actualizados{" "}
                    </b>
                    para análisis y seguimiento continuo.
                  </li>
                  <li>
                    <b className="font-bold">
                      Conclusiones y recomendaciones estratégicas{" "}
                    </b>
                    basadas en la interpretación de los datos clave.
                  </li>
                  <li>
                    <b className="font-bold">
                      Análisis de ineficiencias y puntos débiles{" "}
                    </b>
                    con propuestas de mejora.
                  </li>
                  <li>
                    <b className="font-bold">
                      Identificación de oportunidades clave{" "}
                    </b>
                    para potenciar el negocio.
                  </li>
                </ul>
              </aside>
            </div>
            <p className={ULTIMOTEXTO}>
              En esta etapa clave{" "}
              <span className="text-secundario-500">nos obsesionamos </span> con
              que obtengas un{" "}
              <b className="font-bold">
                {" "}
                informe completo del estado actual de tu empresa
              </b>
              , para que comprendas de una forma simple{" "}
              <b className="font-bold">
                {" "}
                cuáles son las fortalezas actuales de la organización
              </b>{" "}
              y los puntos críticos en los que hay que hacer foco de cara a la
              <b className="font-bold">escalabilidad del negocio</b>.
            </p>
          </section>
          <section>
            <p className={SUBTITULO}>
              Etapa 2 <b className={SUBTITULO1}>Analítica Externa</b>
            </p>
            <div className="flex flex-col  lg:flex-row">
              <aside className="xl:w-[55%] xl:mr-10">
                <ul className={LIST}>
                  <li>
                    <b className="font-bold">
                      Planteo estratégico personalizado{" "}
                    </b>
                    de la investigación según las necesidades de la empresa.
                  </li>
                  <li>
                    Definición de objetivos, hipótesis a validar y ventajas
                    esperadas de la información obtenida.
                  </li>
                  <li>
                    <b className="font-bold">
                      Desarrollo completo del proceso de investigación
                    </b>{" "}
                    con trazabilidad en cada etapa clave.
                  </li>
                  <li>
                    <b className="font-bold">Análisis de mercado</b>: percepción
                    de la marca, productos, competencia y cuota de mercado.
                  </li>
                  <li>
                    <b className="font-bold">Segmentación del mercado</b> por
                    zonas o categorías según su potencial.
                  </li>
                  <li>
                    <b className="font-bold">
                      Identificación de nuevos insights
                    </b>{" "}
                    y puntos clave adicionales durante el proceso.
                  </li>
                </ul>
              </aside>
              <aside className="mt-10 xl:mt-0 xl:w-[45%]">
                <p className={SUBTITULO}>
                  <b className={SUBTITULO1}>Entregables</b>
                </p>
                <ul className={LIST}>
                  <li>
                    <b className="font-bold">
                      Informe completo con la información recopilada
                    </b>
                    , organizada para fácil uso y presentación.
                  </li>
                  <li>
                    <b className="font-bold">
                      Análisis e interpretación de datos por parte de nuestro
                      equipo experto
                    </b>
                    , facilitando la comprensión de los resultados y apoyando la
                    toma de decisiones estratégicas.
                  </li>
                </ul>
              </aside>
            </div>
            <p className={ULTIMOTEXTO}>
              En esta etapa clave{" "}
              <span className="text-secundario-500">nos obsesionamos </span>
              con que obtengas un{" "}
              <b className="font-bold">
                {" "}
                informe de investigación completo
              </b>{" "}
              que te muestre insights del público en el que apuntas tu{" "}
              <b className="font-bold">
                {" "}
                propuesta de valor, tendencias del sector y del mercado donde
                participas
              </b>{" "}
              , y demás información clave que sirva para que desarrolles un
              diagnóstico general del mundo en el que está conviviendo tu
              empresa.
            </p>
          </section>
        </section>
      </div>
    ),
  },
  {
    title: "CRECIMIENTO",
    duration: "DURACIÓN 6 meses a 1 año",
    content: (
      <div className={BOX}>
        <section className="flex flex-col   w-full">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <p className={TEXTOBRILLITO}>
              <Sparkle
                size={20}
                className={BRILLITO + " flex-shrink-0 mr-1"}
                strokeWidth={3}
              />
              <span className="font-bold">Desarrollo de</span>
              <span className="font-bold">de</span>
              <span className="font-bold">un plan </span>
              <span className="font-bold">de acción</span>
              <span className="font-bold">inmediato</span>
              <span className="font-bold">para incrementar</span>
              <span className="font-bold">tus resultados</span>
              <span className="font-bold">al corto plazo</span>
            </p>
          </div>

          <section>
            <p className={SUBTITULO}>
              <b className={SUBTITULO1}>
                Desarrollo de Plan de acción inmediato
              </b>
            </p>
            <div className="flex flex-col lg:flex-row">
              <aside className={ASIDELEFT}>
                <ul className={LIST}>
                  <p>
                    Plan <b className="font-bold">táctico de crecimiento </b>
                    para potenciar tus resultados hoy con tu estructura actual.
                  </p>
                  <p>
                    Para esta etapa contamos con una gran oportunidad:
                    <b className="font-bold text-secundario-500">
                      {" "}
                      La etapa de Analítica Interna y Externa del paso 1.
                    </b>
                  </p>
                  <li>
                    <b className="font-bold">
                      Formulación de carriles estratégicos
                    </b>{" "}
                    para estabilizar o potenciar objetivos críticos según el
                    diagnóstico inicial.
                  </li>
                  <li>
                    <b className="font-bold">
                      Desarrollo de una planilla de seguimiento en tiempo real
                    </b>{" "}
                    del estado de ejecución del plan.
                  </li>
                  <li>
                    <b className="font-bold">
                      Creación de un Gantt calendarizado
                    </b>{" "}
                    para establecer un roadmap claro y previsible.
                  </li>
                  <li>
                    <b className="font-bold">
                      Definición y seguimiento de métricas clave
                    </b>{" "}
                    para medir el impacto de cada acción y ajustar el plan según
                    los resultados.
                  </li>
                  <li>
                    <b className="font-bold">
                      Generación de reportes mensuales
                    </b>{" "}
                    con tareas ejecutadas, próximas acciones y comparación de
                    resultados vs lo planificado.
                  </li>
                </ul>
              </aside>
              <aside className={ASIDERIGHT}>
                <p className={SUBTITULO}>
                  <b className={SUBTITULO1}>Entregables</b>
                </p>
                <ul className={LIST}>
                  <li>
                    Objetivos estructurados en carriles y calendarizados para
                    una ejecución planificada y coordinada.
                  </li>
                  <li>
                    <b className="font-bold">Medición de acciones </b>
                    mediante métricas predefinidas para evaluar el progreso y
                    resultados.
                  </li>
                  <li>
                    <b className="font-bold">
                      Interpretación de resultados mensuales{" "}
                    </b>
                    con conclusiones estratégicas clave para la toma de
                    decisiones.
                  </li>
                  <li>
                    <b className="font-bold">
                      Análisis continuo para ajustar el plan
                    </b>
                    , incorporando nuevas acciones según la evolución y
                    resultados
                  </li>
                </ul>
              </aside>
            </div>
            <p className={ULTIMOTEXTO}>
              En esta etapa clave{" "}
              <span className="text-secundario-500">nos apasiona </span>{" "}
              desarrollar un
              <b className="font-bold">
                {" "}
                Plan Estratégico a corto plazo a medida
              </b>{" "}
              de las necesidades detectadas en la etapa 1: Analítica para
              potenciar y{" "}
              <b className="font-bold">
                generar un shock de crecimiento inmediato en la estructura de la
                empresa
              </b>
              , para facilitar al negocio el logro y la potenciación de los
              objetivos planteados.
            </p>
            <p className={ULTIMOTEXTO}>
              Nos{" "}
              <span className="text-secundario-500 font-bold">
                {" "}
                obsesiona y apasiona
              </span>{" "}
              <b className="font-bold">
                {" "}
                centrarnos en la propuesta de valor de la empresa
              </b>
              , por lo que todos los procesos y herramientas que aplicamos
              tienen como propósito explotar eso que hace distinta a tu empresa
              acercándola a su público ideal.
            </p>
          </section>
        </section>
      </div>
    ),
  },
  {
    title: "MÁS ALLÁ",
    duration: "LUEGO DEL PRIMER AÑO DE UN PLAN",
    content: (
      <div className={BOX}>
        <section className="flex flex-col   w-full">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <p className={TEXTOBRILLITO}>
              <Sparkle
                size={20}
                className={BRILLITO + " flex-shrink-0 mr-1"}
                strokeWidth={3}
              />
              <span className="font-bold">Impulsa tu futuro</span>
              <span className="font-bold">con un plan</span>
              <span className="font-bold">estratégico</span>
              <span className="font-bold"> a largo</span>
              <span className="font-bold">plazo enfocado</span>
              <span className="font-bold"> en nuevos</span>
              <span className="font-bold">desafíos</span>
            </p>
          </div>

          <section>
            <p className={SUBTITULO}>
              <b className={SUBTITULO1}>
                Redefine tus necesidades estratégicas y enfrenta nuevos desafíos
                con visión de futuro
              </b>
            </p>
            <div className="flex flex-col lg:flex-row">
              <aside className={ASIDELEFT}>
                <ul className={LIST}>
                  <li>
                    Definición de{" "}
                    <b className="font-bold">
                      nuevos objetivos de crecimiento y expansión
                    </b>
                    de la marca a largo plazo
                  </li>
                  <li>
                    <b className="font-semibold">
                      Análisis de nuevos segmentos
                    </b>{" "}
                    a los que abordar a través de la propuesta de valor de la
                    empresa
                  </li>
                  <li>
                    <b className="font-bold">
                      Definición de lanzamiento de nuevos productos y servicios
                    </b>{" "}
                    junto con estrategias de penetración personalizadas y
                    coordinadas
                  </li>
                  <li>
                    <b className="font-bold">
                      Investigaciones centradas en la obtención de información
                    </b>{" "}
                    específica para descubrir y aprovechar nuevas oportunidades
                  </li>
                  <li>
                    <b className="font-bold">
                      Rediseño del branding de la empresa
                    </b>{" "}
                    para asegurar que esté a la altura de una transformación
                    profunda y sostenible
                  </li>
                </ul>
              </aside>
              <aside className={ASIDERIGHT}>
                <p className={SUBTITULO}>
                  <b className={SUBTITULO1}>Entregables</b>
                </p>
                <ul className={LIST}>
                  <li>
                    <b className="font-bold">
                      Diseño de una hoja de ruta a largo plazo con planes
                      estratégicos integrales{" "}
                    </b>
                    , orientados a afrontar nuevos desafíos y alcanzar objetivos
                    ambiciosos.
                  </li>
                </ul>
              </aside>
            </div>
            <p className={ULTIMOTEXTO}>
              Esta etapa la materializamos como un espacio donde puedas
              <b className="font-bold">
                {" "}
                plasmar y analizar nuevas ideas y sueños que tenes con tu
                empresa
              </b>{" "}
              , para que se puedan sumar al funcionamiento probado que el
              negocio ya tiene y permitan extender el propósito de la
              organización a nuevos países, mercados, segmentos, a través del
              potenciamiento de los productos y servicios actuales o del
              lanzamiento de nuevos.
            </p>
            <p className={ULTIMOTEXTO}>
              Esta etapa{" "}
              <span className="text-secundario-500"> nos apasiona</span> por el
              alto grado de diversión que tiene y por la
              <b className="font-bold"> continua experimentación</b> que se vive
              en búsqueda de ir consolidando{" "}
              <b className="font-bold">
                la mejor versión posible de la empresa
              </b>{" "}
              bajo los valores que ésta tenga establecidos.
            </p>
            <p className={ULTIMOTEXTO}>
              El{" "}
              <b className="font-bold">
                {" "}
                único límite acá es la creatividad y la ambición
              </b>{" "}
              por hacer de los <b className="font-bold">usuarios y del mundo</b>
              , a través de la propuesta de valor de tu empresa,{" "}
              <b className="font-bold">un lugar mejor.</b>
            </p>
          </section>
        </section>
      </div>
    ),
  },
];
