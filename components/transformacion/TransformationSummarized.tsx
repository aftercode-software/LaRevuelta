"use client";
import { gsap } from "gsap";
import { CirclePlus, Sparkle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import useMediaQuery from "@/hooks/useMediaQuery";
import { pasos } from "@/constants/transformation/summarized";

export default function TransformationSummarized() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(SVGSVGElement | null)[]>([]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <Container className="h-screen pb-40">
      <div className="flex justify-center mb-10">
        <span className="uppercase text-center leading-10 font-onest text-2xl md:text-2xl font-semibold">
          nuestro proceso de{" "}
          <b className="text-gradient-border mx-[10%] md:mx-1 md:w-auto">
            transformación
          </b>{" "}
          de tu empresa
        </span>
      </div>

      {pasos.map((item, index) => (
        <div
          ref={containerRef}
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
             : index === pasos.length - 1
             ? "rounded-b-xl"
             : "border-t-0 border-b-0"
         }`}
        >
          <div
            className={`w-full z-50 ${
              index !== pasos.length - 1 ? "-mb-5 lg:-mb-6 xl:-mb-8" : " "
            }`}
          >
            <button
              className={`w-full font-geist text-left px-1 xl:px-4 py-3 text-[2.45rem] leading-[2.45rem] sm:text-[2.6rem] sm:leading-[2.6rem] md:text-6xl sm:leading-6xl lg:text-6xl xl:text-[7rem] xl:leading-[7rem] font-bold flex justify-between items-center ${
                openIndex === index ? "text-black" : "text-white"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>
                <span
                  className={`mr-1 md:mr-2 min-w-80 ${
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

      {/* <div className="flex justify-center sm:justify-end mt-10">
        <button className="uppercase flex gap-4 py-3 px-6 rounded-xl border-primario-500 border-[1px] bg-primario-500/20 items-center font-onest text-xl sm:text-2xl font-semibold">
          descargar brochure <FileDown className="text-primario-500" />
        </button>
      </div> */}
    </Container>
  );
}
