"use client";
import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Circle from "./Circle";

// Register the plugin once
gsap.registerPlugin(ScrollTrigger);

export default function Necesidades() {
  return (
    <TimelineProvider triggerSelector=".container-necesidades">
      <EscenaNecesidades />
    </TimelineProvider>
  );
}

function EscenaNecesidades() {
  const personRef = useRef<HTMLImageElement>(null);

  const tl = useTimeline();

  useGSAP(() => {
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
  }, [tl]);

  return (
    <div className="container-necesidades relative flex flex-col w-full h-screen bg-black overflow-hidden">
      <div className="relative flex-1 w-full h-full flex flex-col items-center justify-center">
        {/* Person */}
        <img
          src="/images/filosofia/myman.png"
          alt="Person"
          className="person w-32"
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
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  centerX?: boolean;
  centerY?: boolean;
  id?: string;
};

function NecesidadBox({
  top,
  left,
  right,
  bottom,
  centerX,
  centerY,
  id,
}: NecesidadBoxProps) {
  return (
    <div
      style={{
        top: top ? `${top}` : undefined,
        left: left ? `${left}` : undefined,
        right: right ? `${right}` : undefined,
        bottom: bottom ? `${bottom}` : undefined,
        transform:
          centerX && centerY
            ? "translate(-50%, -50%)"
            : centerX
            ? "translateX(-50%)"
            : centerY
            ? "translateY(-50%)"
            : undefined,
      }}
      id={id}
      className="necesidad absolute flex flex-col items-center gap-1 py-2 px-6 bg-black z-30 text-white rounded-lg border-2 border-primario-500 w-fit"
    >
      <img
        src="/images/filosofia/important.svg"
        alt="Necesidad"
        className="w-8"
      />
      <span className="text-xl font-medium font-onest">Necesidad</span>
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
        ease: "power2.inOut",
      },
      ">"
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
      <NecesidadBox top="3%" centerX />
      <NecesidadBox top="25%" right="25%" />
      <NecesidadBox bottom="25%" right="25%" />
      <NecesidadBox bottom="3%" centerX />
      <NecesidadBox bottom="25%" left="25%" />
      <NecesidadBox top="25%" left="25%" />
      <img
        src="/images/filosofia/elipse.svg"
        alt="Circle"
        className="circle opacity-40 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[45vw]"
      />
    </div>
  );
}

function TextBox({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useTimeline();

  useGSAP(() => {
    if (!tl) return;

    tl.from(
      containerRef.current,
      {
        opacity: 0,
        duration: 4,
        ease: "power4.inOut",
      },
      label
    );

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      `${label}+50%`
    );
  }, [tl]);

  return (
    <div
      ref={containerRef}
      className=" py-9 px-12 text-center font-geist w-full text-2xl bg-primario-950/30 text-white border-t-2 border-primario-500"
    >
      {children}
    </div>
  );
}
