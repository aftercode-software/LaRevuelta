"use client";
import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import TextBox from "./TextBox";

export default function Necesidades() {
  return (
    <TimelineProvider triggerSelector=".container-necesidades">
      <EscenaNecesidades />
    </TimelineProvider>
  );
}

function EscenaNecesidades() {
  const personRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const tl = useTimeline();

  useGSAP(
    () => {
      if (!tl) return;

      tl.from(
        personRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 2,
          ease: "power4.inOut",
        },
        "firstpart"
      );
      tl.to(
        personRef.current,
        {
          opacity: 0,
          scale: 0.6,
          duration: 2,
          ease: "power4.inOut",
        },
        "+=1"
      );
    },
    {
      scope: containerRef,
      dependencies: [tl],
    }
  );

  return (
    <div
      ref={containerRef}
      className="container-necesidades relative flex flex-col w-full h-screen bg-black overflow-hidden"
    >
      <div className="h-[10vh]"></div>
      <div className="relative flex-1 w-full h-full flex flex-col items-center justify-center">
        {/* Person */}
        <img
          src="/images/filosofia/myman.png"
          alt="Person"
          className="person w-20 sm:w-32"
          ref={personRef}
        />
        <NecesidadesCircle />
      </div>

      <TextBox label="firstpart">
        <p>
          Las personas tenemos miles incluso
          <b> millones de necesidades</b> que se manifiestan en función de
          nuestras creencias, experiencias, rutinas, cultura y demás variables.
        </p>
      </TextBox>
    </div>
  );
}

type NecesidadBoxProps = {
  className?: string;
  id?: string;
};

function NecesidadBox({ className, id }: NecesidadBoxProps) {
  return (
    <div
      id={id}
      className={`necesidad absolute flex flex-col items-center gap-1 py-1 sm:py-2 px-3 sm:px-6 bg-black z-30 text-white rounded-xl border-2 border-primario-500 w-fit ${className}`}
    >
      <img
        src="/images/filosofia/bulb.svg"
        alt="Necesidad"
        className="w-5 sm:w-6"
      />
      <span className="text-lg sm:text-xl font-medium font-onest">
        Necesidad
      </span>
    </div>
  );
}

function NecesidadesCircle() {
  const tl = useTimeline();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!tl) return;

    tl.from(
      ".necesidad",
      {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        stagger: 2,
        ease: "circ.inOut",
      },
      "secondpart"
    );

    tl.from(
      ".circle",
      {
        rotation: 360,
        opacity: 0,
        ease: "power3.inOut",
      },
      "<+=0.5"
    );

    tl.to(
      ".necesidad",
      {
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      "+=3"
    );

    tl.to(
      ".circle",
      {
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      "<"
    );
  }, [tl]);

  return (
    <div ref={containerRef}>
      <NecesidadBox className="top-[2vh] sm:top-[3vh] lg:top-[2vh] left-1/2 -translate-x-1/2" />
      <NecesidadBox className="top-[20vh] right-2 md:right-[15vw] lg:right-[20vw] xl:right-[25vw] 2xl:right-[28vw]" />
      <NecesidadBox className="bottom-[20vh] right-2 md:right-[15vw] lg:right-[20vw] xl:right-[25vw] 2xl:right-[28vw]" />
      <NecesidadBox className="bottom-[2vh] sm:bottom-[3vh] lg:bottom-[2vh] left-1/2 -translate-x-1/2" />
      <NecesidadBox className="bottom-[20vh] left-2 md:left-[15vw] lg:left-[20vw] xl:left-[25vw] 2xl:left-[28vw]" />
      <NecesidadBox className="top-[20vh] left-2 md:left-[15vw] lg:left-[20vw] xl:left-[25vw] 2xl:left-[28vw]" />
      <img
        src="/images/filosofia/elipse.svg"
        alt="Circle"
        className="circle opacity-40 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden sm:block h-[90%]"
      />
    </div>
  );
}
