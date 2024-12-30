"use client";

import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import Container from "../Container";

const config = {
  scrollTrigger: {
    trigger: ".container-circulo-recursivo",
    start: "top 80%",
    end: "+=1000",
    scrub: 0.8,
    markers: true,
  },
};

export default function CirculoRecursivo() {
  return (
    <TimelineProvider
      defaultConfig={config}
      triggerSelector=".container-circulo-recursivo"
    >
      <EscenaCirculoRecursivo />
    </TimelineProvider>
  );
}

function EscenaCirculoRecursivo() {
  const tl = useTimeline();

  useGSAP(() => {
    if (!tl) return;

    tl.from(".first-text-rec", {
      opacity: 0,
      scaleX: 0.4,
      ease: "power4.inOut",
    });

    tl.from(
      ".recursive-circle-p",
      {
        opacity: 0,
        stagger: 0.5,
        ease: "sine.inOut",
      },
      ">"
    );
  }, [tl]);

  return (
    <div className="container-circulo-recursivo relative flex flex-col justify-center w-full h-screen bg-black overflow-hidden">
      <Container className="w-[90vw]">
        <span className="first-text-rec text-2xl font-onest">
          Pero lo verdaderamente gratificante es que <br /> este sistema es{" "}
          <b className="text-primario-500">infinito</b> y{" "}
          <b className="text-primario-500">exponencial</b>
        </span>
      </Container>
      <div className="-ml-10 flex gap-24 w-full">
        {/* <CirculoConPersona /> */}
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={"img-c-rec-" + i}
            src="/images/filosofia/person_w_needs.png"
            alt="Person"
            className="recursive-circle-p w-80"
          />
        ))}
      </div>
      <div className="ml-10 mt-10 flex gap-24 w-full">
        {/* <CirculoConPersona /> */}
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={"img-c-rec-" + i}
            src="/images/filosofia/person_w_needs.png"
            alt="Person"
            className="recursive-circle-p w-80"
          />
        ))}
      </div>
      <span className="text-2xl font-geist">
        Pero lo verdaderamente gratificante es que este sistema es infinito y
        exponencial
      </span>
    </div>
  );
}
