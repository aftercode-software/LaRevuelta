"use client";
import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import TextBox from "./TextBox";

export default function CirculoVirtuoso() {
  return (
    <TimelineProvider triggerSelector=".container-circulo-virtuoso">
      <EscenaCirculoVirtuoso />
    </TimelineProvider>
  );
}

function EscenaCirculoVirtuoso() {
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
    <div className="container-circulo-virtuoso relative flex flex-col w-full h-screen bg-black overflow-hidden">
      <div className="relative flex-1 w-full h-full flex flex-col items-center justify-center">
        {/* Person */}
        <img
          src="/images/filosofia/myman.png"
          alt="Person"
          className="person w-32"
          ref={personRef}
        />
        <NecesidadesCircleStore />
      </div>

      <TextBox label="firstpart">
        <p>
          Se genera un círculo virtuoso con <b>múltiples beneficios</b>: los
          usuarios satisfacen sus necesidades mediante empresas afines a sus
          valores, mientras las empresas fortalecen su propuesta de valor
          mejorando vidas.
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

export function NecesidadesCircleStore() {
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
      <NecesidadBox top="5%" centerX />
      <NecesidadBox top="25%" right="25%" />
      <NecesidadBox bottom="25%" right="25%" />
      <NecesidadBox bottom="3%" centerX />
      <NecesidadBox bottom="25%" left="25%" />
      <NecesidadBox top="25%" left="25%" />
      <img
        src="/images/filosofia/elipse.svg"
        alt="Circle"
        className="circle2 opacity-40 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[45vw]"
      />
    </div>
  );
}
