"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

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
        end: "30% 80%",
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
        end: "30% 80%",
        scrub: 1,
      },
    });

    gsap.to(".cloud-3", {
      y: -50,
      opacity: 1,
      x: 50,
      scale: 1.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% bottom",
        end: "80% 60%",
        scrub: 1,
      },
    });

    gsap.to(".cloud-4", {
      y: -50,
      opacity: 1,
      x: -50,
      scale: 1.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% bottom",
        end: "80% 60%",
        scrub: 1,
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="seccion-comprendemos relative h-[310vw] xs:h-[300vw] md:h-[120vh] flex flex-col overflow-hidden"
    >
      <img
        src="/images/comprendemos/white_cloud.webp"
        alt="ComprendemosTuSueño"
        className="cloud cloud-1 opacity-0 h-[200px] lg:h-[280px] absolute top-24 -left-64"
      />
      <img
        src="/images/comprendemos/white_cloud_2.webp"
        alt="ComprendemosTuSueño"
        className="cloud cloud-2 opacity-0 h-[200px] lg:h-[280px] absolute top-48 -right-64"
      />
      <section className="relative z-10 h-96 w-full flex items-center justify-center">
        <TituloTop />
      </section>
      <WorldSection />
      <img
        src="/images/comprendemos/white_cloud.webp"
        alt="ComprendemosTuSueño"
        className="cloud-3 opacity-0 h-[200px] lg:h-[280px] absolute bottom-0 brottom-24 -left-64"
      />
      <img
        src="/images/comprendemos/white_cloud_2.webp"
        alt="ComprendemosTuSueño"
        className="cloud-4 opacity-0 h-[200px] lg:h-[280px] absolute bottom-0 brottom-48 -right-64"
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
        end: "10% 70%",
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
        end: "10% 70%",
        scrub: 1,
      },
    });
  });

  return (
    <h2 className="title-1 opacity-0 flex flex-col sm:flex-row items-center gap-0 sm:gap-6 font-onest font-medium text-4xl text-white bg-black/30 md:bg-none backdrop-blur-lg md:backdrop-blur-none py-10 px-4 sm:pl-4 sm:pr-6 rounded-xl overflow-hidden">
      Comprendemos{" "}
      <span className="title-2 opacity-0 text-5xl font-black">tu sueño</span>
    </h2>
  );
}

function WorldSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) return; // Asegura que el DOM esté listo

    gsap.from(".world", {
      y: 200,
      scale: 0.95,
      filter: "grayscale(100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "30% bottom",
        end: "50% 70%",
        scrub: 1,
      },
    });

    gsap.from(".cloud-world-1", {
      y: 100,
      x: 100,
      opacity: 0,
      scale: 1.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "30% bottom",
        end: "50% 70%",
        scrub: 1,
      },
    });

    gsap.from(".cloud-world-2", {
      y: 100,
      x: -100,
      opacity: 0,
      scale: 1.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "30% bottom",
        end: "50% 70%",
        scrub: 1,
      },
    });

    gsap.from(".helper-text", {
      opacity: 0,
      y: 30,
      ease: "power1.out",
      stagger: 1,
      scrollTrigger: {
        trigger: section,
        start: "45% bottom",
        end: "40% 70%",
        scrub: 1,
      },
    });
  });

  return (
    <section ref={sectionRef} className="world-section relative w-full">
      <div className="pl-0 md:pl-[10vw] lg:pl-[20vw] flex flex-col md:flex-row justify-center md:justify-start items-center gap-20 rounded-xl text-black font-geist font-medium text-3xl">
        <div className="w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] xl:w-[25vw] xl:h-[25vw] relative">
          <img
            src="/images/comprendemos/world.webp"
            alt="World comprendemos"
            className="world w-full h-full"
          />
          <img
            src="/images/comprendemos/white_cloud_2.webp"
            alt="World comprendemos"
            className="cloud-world-1 absolute -bottom-5 sm:-bottom-10 -left-24 sm:-left-36 w-[90%] sm:w-[90%]"
          />
          <img
            src="/images/comprendemos/white_cloud_4.webp"
            alt="World comprendemos"
            className="cloud-world-2 absolute -bottom-5 sm:-bottom-10 -right-24 sm:-right-36 w-[90%] sm:w-[80%] -z-10"
          />
        </div>
        <div className="w-[90vw] md:w-[30vw] text-white rounded-xl">
          <h3 className="helper-text text-3xl font-onest font-normal">
            A través del <b>marketing</b> buscamos que tu empresa aporte cada
            vez{" "}
            <b
              style={{
                textShadow: "0 0 1.5em #FCF532, 0 0 0.6em #FCF532",
              }}
              className="helper-text text-primario-500"
            >
              más valor al mundo
            </b>
          </h3>
        </div>
      </div>
    </section>
  );
}
