"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
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
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const amountStores = isMobile ? 2 : isTablet ? 4 : 6;

  useGSAP(() => {
    if (!tl) return;

    tl.from(
      ".store-off",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 0.5,
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
      "firstpart+=1"
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
      "firstpart+=1.5"
    );

    tl.to(
      ".store-off",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 0.5,
        ease: "power4.inOut",
      },
      "+=1"
    );

    tl.to(
      ".store-on",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 0.5,
        ease: "power4.inOut",
      },
      "+=1.5"
    );

    tl.to(
      ".necesidad-w-arrow",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 0.5,
        ease: "power4.inOut",
      },
      "<"
    );
  }, [tl]);

  return (
    <div className="container-empresas relative flex flex-col w-full h-screen bg-black overflow-hidden">
      <div className="relative flex-1 w-full h-full flex flex-col items-center justify-center">
        <div className="necesidad-w-arrow flex flex-col items-center justify-center gap-4">
          <div className=" flex flex-col items-center gap-1 py-2 px-6 bg-black text-white rounded-lg border-2 border-primario-500 w-fit">
            <img
              src="/images/filosofia/bulb.svg"
              alt="Necesidad"
              className="w-5 sm:w-6"
            />
            <span className="text-xl font-medium font-onest">Necesidad</span>
          </div>
          <img src="/images/filosofia/arrow.svg" alt="" />
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          {Array.from({ length: amountStores / 2 }).map((_, i) => (
            <img
              key={i}
              src="/images/filosofia/store-off.png"
              alt="Empresas"
              className="store-off w-28 sm:w-36 lg:w-44 2xl:w-48 h-28 sm:h-36 lg:h-44 2xl:h-48 object-contain opacity-40"
            />
          ))}
          <div className="store-on flex flex-col items-center justify-center">
            <img
              src="/images/filosofia/store-on.png"
              alt="Empresas"
              className="w-96"
            />
            <p className="font-onest font-black text-4xl">EMPRESA</p>
          </div>
          {Array.from({ length: amountStores / 2 }).map((_, i) => (
            <img
              key={i}
              src="/images/filosofia/store-off.png"
              alt="Empresas"
              className="store-off w-28 sm:w-36 lg:w-44 2xl:w-48 h-28 sm:h-36 lg:h-44 2xl:h-48 object-contain opacity-40"
            />
          ))}
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
