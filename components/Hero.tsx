"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Container from "./Container";
import NosObsesionamos from "./NosObsesionamos";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".background-hero", {
      opacity: 0,
      duration: 0.4,
      ease: "power4.inOut",
    });
  });

  return (
    <div className="mt-[8vh] background-hero text-4xl w-full h-screen sm:h-[90vh]">
      <Container className="flex flex-col pt-[20%] lg:pt-[10%]">
        <div>
          <HeroBadge />
          <HeroTitle />
          <HeroSubtitle />
        </div>
      </Container>
      <div className="-mt-40 sm:-mt-28 mx-auto w-fit">
        <NosObsesionamos />
      </div>
    </div>
  );
}

function HeroBadge() {
  useGSAP(() => {
    gsap.from(".vamos-posta", {
      opacity: 0,
      duration: 0.4,
      y: -30,
      delay: 2,
      ease: "expo.inOut",
    });
  });

  return (
    <span className="block w-fit vamos-posta text-base sm:text-lg rounded-full py-1 px-3 border border-primario-300 font-onest font-bold">
      VAMOS POSTA 👈
    </span>
  );
}

function HeroTitle() {
  useGSAP(() => {
    gsap.from(".color-text", {
      color: "white",
      textShadow: "0 0 0.125em black, 0 0 0.45em black",
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
      ease: "bounce.inOut",
      stagger: 0.8,
    });
    gsap.fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: 80,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.8,
      }
    );
  });
  return (
    <h1 className="text-5xl xs:text-5xl xl:text-6xl font-fustat mt-4">
      <span className="block hero-title">
        Rompemos{" "}
        <span
          style={{
            textShadow: "0 0 1em #FCF532, 0 0 0.6em #7E7A02",
          }}
          className="color-text font-semibold text-primario-400"
        >
          estructuras,
        </span>
      </span>
      <span className="block hero-title">
        redefinimos{" "}
        <span
          style={{
            textShadow: "0 0 1em #FCF532, 0 0 0.6em #7E7A02",
          }}
          className="color-text font-semibold text-primario-400"
        >
          estándares
        </span>
      </span>
    </h1>
  );
}

function HeroSubtitle() {
  useGSAP(() => {
    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 10,
      duration: 0.4,
      delay: 1.7,
      ease: "power3.out",
    });
  });

  return (
    <p className="hero-subtitle text-xl sm:text-2xl font-light font-geist lg:w-6/12 2xl:w-5/12 mt-5 text-white">
      Buscamos ayudar con <b className="font-bold">marketing</b> a los que
      <b className="font-bold"> apuestan a la creación de un mundo mejor</b>.
    </p>
  );
}
