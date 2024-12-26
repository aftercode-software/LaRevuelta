"use client";
import { useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {
  use,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

// Register the plugin once
gsap.registerPlugin(ScrollTrigger);

const necesidades = [
  {
    x: 1000,
    y: 100,
  },
  {
    x: 200,
    y: 200,
  },
  {
    x: 300,
    y: 300,
  },
  {
    x: 400,
    y: 400,
  },
  {
    x: 600,
    y: 600,
  },
];

export default function NeedsToStoreAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstFrameRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLImageElement>(null);

  // const tl = useTimeline();
  const [tl, setTl] = useState<GSAPTimeline | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% top", // When top of container hits top of viewport
        end: "50% top", // When bottom of container hits top of viewport
        scrub: true, // Smooth scrubbing as user scrolls
        pin: true, // Pin the container so that we can see the transition happen
        markers: true,
      },
    });

    setTl(tl);
  }, []);

  useGSAP(() => {
    if (!tl) return;

    tl.from(".person", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, [tl]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* First Frame */}
      <div ref={firstFrameRef} className="w-full h-full ">
        <div className="">
          {/* Person */}
          <img
            src="/images/filosofia/myman.png"
            alt="Person"
            className="person w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ref={personRef}
          />
        </div>
        {necesidades.map((necesidad, index) => (
          <NecesidadBox
            key={index}
            wrapperRef={firstFrameRef}
            necesidad={necesidad}
          />
        ))}
        <TextBox>
          <p>
            Las personas tenemos miles incluso millones de necesidades que se
            manifiestan en función de nuestras creencias, experiencias, rutinas,
            cultura y demás variables.
          </p>
        </TextBox>
      </div>
    </div>
  );
}

function TextBox({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useTimeline();

  useGSAP(() => {
    if (!tl) return;

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power4.inOut",
    });
  }, [tl]);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 p-8 font-geist max-w-full sm:max-w-[40vw] text-2xl bg-primario-950/30 text-white text-left border-t-2 border-primario-500 border-r-2 rounded-tr-2xl"
    >
      {children}
    </div>
  );
}

function NecesidadBox({
  wrapperRef,
  necesidad,
}: {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  necesidad: { x: number; y: number };
}) {
  const [positionWrapper, setPositionWrapper] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const [positionNecesidad, setPositionNecesidad] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const necesidadRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      if (wrapperRef.current == null || necesidadRef.current == null) return;
      const wrapper = wrapperRef.current.getBoundingClientRect();
      const necesidad = necesidadRef.current.getBoundingClientRect();

      const necesidadWidth = necesidad.width;
      const necesidadHeight = necesidad.height;

      setPositionWrapper({
        x: wrapper.width / 2,
        y: wrapper.height / 2,
      });
      setPositionNecesidad({
        x: necesidad.x + necesidadWidth + 20 - wrapper.x,
        y: necesidad.y + necesidadHeight + 10 - wrapper.y,
      });
    });
  }, [wrapperRef, necesidadRef]);

  return (
    <>
      <div className={`text-white text-left`}>
        <span
          ref={necesidadRef}
          style={{
            left: necesidad.x,
            top: necesidad.y,
          }}
          className="absolute border px-8 py-2 rounded-full bg-primario-950/50 text-2xl font-geist font-medium border-primario-500"
        >
          Necesidad
        </span>
      </div>
      {positionWrapper.x !== null &&
        positionNecesidad.x !== null &&
        positionWrapper.y !== null &&
        positionNecesidad.y !== null && (
          <Arrow
            x1={positionWrapper.x}
            y1={positionWrapper.y}
            x2={positionNecesidad.x}
            y2={positionNecesidad.y}
          />
        )}
    </>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      <defs>
        {/* Define an arrowhead marker */}
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="0.1"
          refY="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L0,10 L10,5 z" fill="#fcf53241" />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#fcf53241"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
}
