"use client";

import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function CirculoRecursivo() {
  return (
    <TimelineProvider triggerSelector=".container-circulo-recursivo">
      <EscenaCirculoRecursivo />
    </TimelineProvider>
  );
}

function EscenaCirculoRecursivo() {
  return (
    <div className="container-circulo-recursivo relative flex flex-col justify-center w-full h-screen bg-black overflow-hidden">
      <div className="flex w-full bg-red-500 *:scale-50">
        <CirculoConPersona />
        <CirculoConPersona />
      </div>
    </div>
  );
}

function CirculoConPersona() {
  return (
    <div className="relative flex-1 w-full h-full flex flex-col items-center justify-center">
      {/* Person */}
      <img
        src="/images/filosofia/myman.png"
        alt="Person"
        className="person w-32"
      />
      <NecesidadesCircle />
    </div>
  );
}

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
      className="necesidad2 absolute  text-white w-fit z-30"
    >
      <div className="relative rounded-lg gap-1 bg-black flex flex-col items-center py-2 px-6 border-2 border-primario-500">
        <img
          src="/images/filosofia/important.svg"
          alt="Necesidad"
          className="w-8"
        />
        <span className="text-xl font-medium font-onest">Necesidad</span>
        <img
          src="/images/filosofia/store-on.png"
          alt="Arrow"
          className="absolute h-28 -left-16 -top-10 -z-50"
        />
      </div>
    </div>
  );
}

function NecesidadesCircle() {
  const tl = useTimeline();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!tl) return;

    tl.from(
      ".necesidad2",
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
      ".circle2",
      {
        rotation: 360,
        opacity: 0,
        ease: "power2.inOut",
      },
      ">"
    );

    tl.to(
      ".necesidad2",
      {
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      "+=3"
    );

    tl.to(
      ".circle2",
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
      <NecesidadBox top="-25%" centerX />
      <NecesidadBox top="15%" right="25%" />
      <NecesidadBox bottom="15%" right="25%" />
      <NecesidadBox bottom="-35%" centerX />
      <NecesidadBox bottom="15%" left="25%" />
      <NecesidadBox top="15%" left="25%" />
    </div>
  );
}
