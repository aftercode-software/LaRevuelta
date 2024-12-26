import Container from "@/components/Container";
import HeroSections from "@/components/HeroSections";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSections
        url={"/inspiracion/hero-inspiracion.webp"}
        emoji="💡"
        tittle="Qué nos "
        tittleBold="inspira"
        desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
      />
      <Container className="grid lg:grid-cols-3 gap-8 justify-center">
        <InspiracionCard
          title="Nike"
          desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
          img="/inspiracion/phil_knight.webp"
        />
        <InspiracionCard
          title="Los Beatles"
          desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
          img="/inspiracion/vinyl.webp"
        />
        <InspiracionCard
          title="YSY y Duki"
          desc="Lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet lorem ipsum dolores amet"
          img="/inspiracion/dukiysy.webp"
        />
      </Container>
    </>
  );
}

function InspiracionCard({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <article className="flex flex-col items-center text-center w-full">
      <p className="font-fustat font-extrabold text-primario-300 text-4xl mb-4">
        {title}
      </p>
      <p className="font-geist text-base mb-4 w-[80%]">{desc}</p>
      <img
        src={img}
        alt={title}
        className="aspect-square object-cover rounded-xl w-[90%] saturate-0 hover:saturate-100"
      />
    </article>
  );
}
