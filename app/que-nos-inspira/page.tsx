import Container from "@/components/Container";
import React from "react";

export default function Page() {
  return (
    <div>
      <HeaderInspira />
      <ItemsInspiracion />
    </div>
  );
}

function HeaderInspira() {
  return (
    <div className="background-inspiracion  h-[40vh] bg-cover bg-center">
      <Container className="flex flex-col justify-center">
        <img
          src="/images/que-nos-inspira/bulb.svg"
          alt="Que nos inspira"
          className="w-16"
        />
        <h1 className="text-5xl font-fustat font-bold">
          Que nos <span className="text-primario-500">inspira</span>
        </h1>
        <p className="text-xl font-medium font-geist">
          La inspiración es la clave para crear soluciones innovadoras y
          transformadoras.
        </p>
      </Container>
    </div>
  );
}

const items = [
  {
    title: "Nike",
    isCircle: false,
    description:
      "La música es una forma de expresión que nos conecta con el mundo y nos inspira a ser mejores personas.",
    image: "/images/que-nos-inspira/phil_knight.png",
  },
  {
    title: "Beatles",
    isCircle: true,
    description:
      "La música es una forma de expresión que nos conecta con el mundo y nos inspira a ser mejores personas.",
    image: "/images/que-nos-inspira/beatles.png",
  },
  {
    title: "Duki",
    isCircle: false,
    description:
      "La música es una forma de expresión que nos conecta con el mundo y nos inspira a ser mejores personas.",
    image: "/images/que-nos-inspira/dukiysy.jpg",
  },
];

function ItemsInspiracion() {
  return (
    <Container className="flex py-10 gap-20">
      {items.map((item) => (
        <ItemInspiracion
          key={item.title}
          title={item.title}
          isCircle={item.isCircle}
          description={item.description}
          image={item.image}
        />
      ))}
    </Container>
  );
}

function ItemInspiracion({
  title,
  description,
  isCircle,
  image,
}: {
  title: string;
  description: string;
  isCircle: boolean;
  image: string;
}) {
  return (
    <div className="flex items-center flex-col">
      <img
        src={image}
        alt={title}
        className={`w-full h-[400px] rounded-xl  mb-6 ${
          isCircle ? "object-contain" : "object-cover"
        }`}
      />
      <h2 className="text-4xl font-fustat font-bold text-primario-500">
        {title}
      </h2>
      <p className="text-xl font-normal font-geist">{description}</p>
    </div>
  );
}
