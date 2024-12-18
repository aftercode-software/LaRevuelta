"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ComprendemosTuSueño() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".cloud-1", {
      y: -100,
      opacity: 1,
      x: 100,
      scale: 1.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
      },
    });

    gsap.to(".cloud-2", {
      y: -100,
      opacity: 1,
      x: -100,
      scale: 1.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "70% 50%",
        scrub: 1,
      },
    });

    gsap.to(".title-1", {
      opacity: 1,
      scale: 1.05,
      ease: "power3.in",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "20% 70%",
        scrub: 1,
      },
    });
    gsap.to(".title-2", {
      opacity: 1,
      scale: 1.05,
      ease: "power3.in",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "15% bottom",
        end: "25% 70%",
        scrub: 1,
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="seccion-comprendemos relative h-screen flex "
    >
      <section className="relative z-10 h-96 w-full flex items-center justify-center">
        <p className="title-1 opacity-0 flex items-center gap-6 font-onest font-medium text-4xl text-white">
          Comprendemos{" "}
          <span className="title-2 opacity-0 text-5xl font-black">
            tu sueño
          </span>
        </p>
      </section>
      <img
        src="/images/comprendemos/white_cloud.png"
        alt="ComprendemosTuSueño"
        className="cloud cloud-1 opacity-0 h-[300px] absolute top-24 -left-64"
      />
      <img
        src="/images/comprendemos/white_cloud_2.png"
        alt="ComprendemosTuSueño"
        className="cloud cloud-2 opacity-0 h-[300px] absolute top-48 -right-64"
      />
    </div>
  );
}

function TituloTop() {
  useGSAP(() => {
    gsap.to(".title-1", {
      opacity: 1,
      scale: 1.05,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".seccion-comprendemos",
        start: "top bottom",
        end: "20% 70%",
        scrub: 1,
      },
    });

    gsap.to(".title-2", {
      opacity: 1,
      scale: 1.05,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".seccion-comprendemos",
        start: "15% bottom",
        end: "25% 70%",
        scrub: 1,
      },
    });
  });

  return (
    <p className="title-1 opacity-0 flex items-center gap-6 font-onest font-medium text-4xl text-white">
      Comprendemos{" "}
      <span className="title-2 opacity-0 text-5xl font-black">tu sueño</span>
    </p>
  );
}
