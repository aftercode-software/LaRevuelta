"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Container from "./Container";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-title",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      }
    );
  });

  return (
    <div className="text-4xl w-full h-screen">
      <Container className="flex items-center">
        <div>
          <span className="text-lg rounded-full py-1 px-4 border-2 border-primario-200 font-onest font-bold">
            VAMOS POSTA 👈
          </span>
          <h1 className=" text-7xl font-fustat mt-4">
            <span className="overflow-hidden">
              <span className="hero-title">
                Rompemos{" "}
                <span className="font-bold text-primario-500">estructuras</span>
              </span>
            </span>
            ,
            <br /> redefinimos{" "}
            <span className="font-bold text-primario-500">estándares</span>
          </h1>
          <p className="text-2xl font-normal font-geist w-2/3 mt-5">
            Buscamos ayudar con marketing a los que apuestan a la creación de un
            mundo mejor.
          </p>
        </div>
      </Container>
    </div>
  );
}
