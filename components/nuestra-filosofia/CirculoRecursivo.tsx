"use client";

import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Container from "../Container";
import GlowingText from "./GlowingText";

// const config = {
//   scrollTrigger: {
//     trigger: ".container-circulo-recursivo",
//     start: "top 80%",
//     end: "+=1000",
//     scrub: 0.8,
//     markers: true,
//   },
// };

export default function CirculoRecursivo() {
  return (
    <TimelineProvider
      end="+=1000"
      // defaultConfig={config}
      triggerSelector=".container-circulo-recursivo"
    >
      <EscenaCirculoRecursivo />
    </TimelineProvider>
  );
}

function EscenaCirculoRecursivo() {
  const tl = useTimeline();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!tl) return;

      tl.from(".first-text-rec", {
        x: -100,
        opacity: 0,
        scale: 0.9,
        ease: "power2.inOut",
      });

      tl.from(
        ".recursive-circle-p",
        {
          opacity: 0,
          stagger: 0.5,
          ease: "sine.inOut",
        },
        ">+=4"
      );
    },
    {
      scope: containerRef,
      dependencies: [tl],
    }
  );

  return (
    <section
      ref={containerRef}
      className="container-circulo-recursivo relative flex flex-col justify-center w-full h-screen bg-black overflow-hidden"
    >
      <div className="h-[10vh]"></div>
      <Container className="w-[90vw] h-fit mb-4">
        <span className="block first-text-rec text-3xl font-onest">
          Pero lo verdaderamente gratificante es que <br /> este sistema es{" "}
          <GlowingText>infinito</GlowingText> y{" "}
          <GlowingText>exponencial</GlowingText>
        </span>
      </Container>
      <div className="-ml-20 sm:-ml-10 mt-8 flex gap-8 sm:gap-24 w-full">
        {/* <CirculoConPersona /> */}
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={"img-c-rec-" + i}
            src="/images/filosofia/person_w_needs.webp"
            alt="Person"
            className="recursive-circle-p w-48 sm:w-80"
          />
        ))}
      </div>
      <div className="-ml-6 sm:ml-10 mt-10 flex gap-8 sm:gap-24 w-full">
        {/* <CirculoConPersona /> */}
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={"img-c-rec-" + i}
            src="/images/filosofia/person_w_needs.webp"
            alt="Person"
            className="recursive-circle-p w-48 sm:w-80"
          />
        ))}
      </div>
    </section>
  );
}
