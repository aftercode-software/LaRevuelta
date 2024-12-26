"use client";
import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import TextBox from "./TextBox";

export default function Empresas() {
  return (
    <TimelineProvider triggerSelector=".container-empresas">
      <EscenaEmpresas />
    </TimelineProvider>
  );
}

function EscenaEmpresas() {
  const tl = useTimeline();

  useGSAP(() => {
    if (!tl) return;

    tl.from(
      ".store-off",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "firstpart"
    );
    tl.from(
      ".store-on",
      {
        opacity: 0,
        duration: 1.5,
        scale: 0.6,
        ease: "power4.inOut",
      },
      "firstpart+1"
    );
    tl.from(
      ".necesidad-w-arrow",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 1,
        y: 100,
        duration: 1,
        ease: "power4.inOut",
      },
      "firstpart+1.5"
    );
  }, [tl]);

  return (
    <div className="container-empresas relative flex flex-col w-full h-screen bg-black overflow-hidden">
      <div className="relative flex-1 w-full h-full flex flex-col items-center justify-center">
        <div className="necesidad-w-arrow flex flex-col items-center justify-center gap-4">
          <div className=" flex flex-col items-center gap-1 py-2 px-6 bg-black text-white rounded-lg border-2 border-primario-500 w-fit">
            <img
              src="/images/filosofia/important.svg"
              alt="Necesidad"
              className="w-8"
            />
            <span className="text-xl font-medium font-onest">Necesidad</span>
          </div>
          <img src="/images/filosofia/arrow.svg" alt="" />
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <img
            src="/images/filosofia/store-off.png"
            alt="Empresas"
            className="store-off w-48 h-fit opacity-40"
          />
          <img
            src="/images/filosofia/store-off.png"
            alt="Empresas"
            className="store-off w-48 h-fit opacity-40"
          />
          <img
            src="/images/filosofia/store-off.png"
            alt="Empresas"
            className="store-off w-48 h-fit opacity-40"
          />
          <div className="store-on flex flex-col items-center justify-center">
            <img
              src="/images/filosofia/store-on.png"
              alt="Empresas"
              className="w-96"
            />
            <p className="font-onest font-black text-4xl">EMPRESA</p>
          </div>
          <img
            src="/images/filosofia/store-off.png"
            alt="Empresas"
            className="store-off w-48 h-fit opacity-40"
          />
          <img
            src="/images/filosofia/store-off.png"
            alt="Empresas"
            className="store-off w-48 h-fit opacity-40"
          />
          <img
            src="/images/filosofia/store-off.png"
            alt="Empresas"
            className="store-off w-48 h-fit opacity-40"
          />
        </div>
      </div>
      <TextBox label="firstpart">
        <p>
          Las empresas son entidades que se crean para satisfacer necesidades de
          las personas.
        </p>
      </TextBox>
    </div>
  );
}
