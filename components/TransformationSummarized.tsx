/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Container from "./Container";
import { CirclePlus, FileDown, Sparkle } from "lucide-react";

export default function TransformationSummarized() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]); // Manejo de refs para contenido
  const iconRefs = useRef<(SVGSVGElement | null)[]>([]); // Manejo de refs para íconos
  const [isDesktop, setIsDesktop] = useState(false);

  // Detectar si es desktop
  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // GSAP Animaciones para contenido y íconos
  useEffect(() => {
    contentRefs.current.forEach((content, i) => {
      if (content) {
        if (i === openIndex) {
          gsap.to(content, { height: "auto", opacity: 1, duration: 0.4 });
        } else {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.3 });
        }
      }
    });

    iconRefs.current.forEach((icon, i) => {
      if (icon) {
        if (i === openIndex) {
          gsap.to(icon, {
            rotation: 45,
            fill: "black",
            duration: 0.4,
          });
        } else {
          gsap.to(icon, {
            rotation: 0,
            fill: "transparent",
            duration: 0.4,
          });
        }
      }
    });
  }, [openIndex]);

  const items = [
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
                , market share, qué nivel de posicionamiento tenemos,
                competencia.
              </li>
            </ul>
          </aside>
          <aside className="w-1/2 hidden lg:block">
            <img
              src="/transformation/velocimetro.webp"
              alt="rocket"
              className="absolute -right-20 w-[40%] xl:w-[30%] -bottom-4"
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
              <li>
                Las herramientas y nivel de desarrollo digital disponibles.
              </li>
            </ul>
          </aside>
          <aside className="w-1/2 hidden lg:block">
            <img
              src="/transformation/bars.webp"
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
              src="/transformation/rocket.webp"
              alt="rocket"
              className="absolute -right-8 xl:right-12 w-[38%] xl:w-[32%] -bottom-4 xl:-bottom-8"
            />
          </aside>
        </div>
      ),
    },
  ];

  return (
    <Container className="h-auto pb-40">
      <div className="flex justify-center mb-20">
        <span className="uppercase font-onest text-2xl md:text-3xl font-semibold">
          nuestro proceso de{" "}
          <b className="text-gradient-border ">transformación</b> de tu empresa
        </span>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className={`overflow-hidden transition-all px-4 pt-4 border-[#424242] border-2 
         ${
           openIndex === index
             ? "bg-gradient-to-r from-primario-400 to-primario-500"
             : "text-white"
         }
         ${
           index === 0
             ? "rounded-t-xl"
             : index === items.length - 1
             ? "rounded-b-xl"
             : "border-t-0 border-b-0"
         }`}
        >
          <div
            className={`w-full z-10 ${
              index !== items.length - 1 ? "-mb-5 lg:-mb-6 xl:-mb-8" : " "
            }`}
          >
            <button
              className={`w-full font-geist text-left px-1 xl:px-4 py-3 text-[2.4rem] leading-[2.4rem] sm:text-[2.6rem] sm:leading-[2.6rem] md:text-6xl sm:leading-6xl lg:text-6xl xl:text-[7rem] xl:leading-[7rem] font-bold flex justify-between items-center ${
                openIndex === index ? "text-black" : "text-white"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>
                <span
                  className={`mr-2 min-w-80 ${
                    openIndex === index ? "text-black" : "text-primario-500"
                  }`}
                >
                  {index + 1}
                </span>
                {item.title}
              </span>
              <span className="hidden md:flex flex-col items-start -mt-4 h-full">
                <CirclePlus
                  ref={(el) => {
                    iconRefs.current[index] = el;
                  }}
                  size={isDesktop ? 60 : 40}
                  strokeWidth={1}
                  className="stroke-primario-500"
                />
              </span>
            </button>
          </div>

          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="px-2 lg:px-12 opacity-0 *:font-geist"
          >
            {item.content}
          </div>
        </div>
      ))}

      <div className="flex justify-end mt-10">
        <button className="uppercase flex gap-4 py-3 px-6 rounded-xl border-primario-500 border-[1px] bg-primario-500/20 items-center font-onest text-2xl font-semibold">
          descargar brochure <FileDown className="text-primario-500" />
        </button>
      </div>
    </Container>
  );
}

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
