"use client";
import { useParams } from "next/navigation";
import Container from "@/components/Container";

const data = {
  nike: {
    title: "Nike",
    content: "Nike nos inspira por su innovación y redefinición del marketing.",
  },
  "los-beatles": {
    title: "Los Beatles",
    content: "Creatividad e impacto cultural en la música.",
  },
  "ysy-y-duki": {
    title: "YSY y Duki",
    content: "YSY y Duki nos inspiran con su ascenso global.",
  },
};

export default function InspirationDetailPage() {
  const { slug } = useParams();

  const content = data[slug as keyof typeof data];

  if (!content) {
    return <p>No se encontró contenido para esta página.</p>;
  }

  return (
    <Container>
      <h1 className="text-4xl font-fustat font-extrabold text-center mb-4">
        {content.title}
      </h1>
      <p className="text-lg text-center font-geist">{content.content}</p>
    </Container>
  );
}
