import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
const inspirations = [
  {
    title: "Nike",
    desc: "Nike nos inspira por su innovación y redefinición del marketing.",
    slug: "nike",
    img: "/inspiracion/phil_knight.webp",
  },
  {
    title: "The Beatles",
    desc: "Creatividad e impacto cultural en la música.",
    slug: "the-beatles",
    img: "/inspiracion/vinyl.webp",
  },
  {
    title: "YSY y Duki",
    desc: "YSY y Duki nos inspiran con su ascenso global.",
    slug: "ysy-y-duki",
    img: "/inspiracion/dukiysy.webp",
  },
];

export default function Page() {
  return (
    <Container className="grid lg:grid-cols-3 gap-8 justify-center">
      {inspirations.map((inspo) => (
        <Link
          key={inspo.slug}
          href={`/que-nos-inspira/${inspo.slug}`}
          className="flex flex-col items-center text-center w-full cursor-pointer transition-transform"
        >
          <p className="font-fustat font-extrabold text-primario-300 text-4xl mb-4">
            {inspo.title}
          </p>
          <p className="font-geist text-base mb-4 w-[80%]">{inspo.desc}</p>
          <img
            src={inspo.img}
            alt={inspo.title}
            className="aspect-square object-cover rounded-xl w-[90%] saturate-0 hover:saturate-100"
          />
        </Link>
      ))}
    </Container>
  );
}
