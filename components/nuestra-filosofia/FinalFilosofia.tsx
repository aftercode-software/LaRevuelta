import React from "react";
import Container from "../Container";
import GlowingText from "./GlowingText";
export default function FinalFilosofia() {
  return (
    <div className="min-h-[20vh] bg-black mt-10 mb-20">
      <Container>
        <p className="first-text-rec text-2xl sm:text-3xl font-onest">
          Mientras más <GlowingText>claras</GlowingText> sean las propuestas de
          valor de las empresas y sus procesos estratégicos, mejor será el{" "}
          <GlowingText>nivel de vida</GlowingText> de las personas a las que
          apuntan y la <GlowingText>progresión económica</GlowingText> de los
          que hacen a hacen a las organizaciones.
        </p>

        <a
          href="https://wa.me/num"
          target="_blank"
          className="text-center mt-16 bg-primario-950/20 border-primario-500 border py-2 px-4 rounded-xl text-xl sm:text-2xl font-fustat font-semibold w-fit ml-auto block hover:scale-110 transition-transform duration-300"
        >
          Llevemos tu empresa al siguiente nivel 🚀
        </a>
      </Container>
    </div>
  );
}
