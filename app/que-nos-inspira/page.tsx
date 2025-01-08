"use client";
import Container from "@/components/Container";
import InspirationCard from "@/components/InspirationCard";
import React, { useState, useEffect } from "react";

export interface Inspiration {
  title: string;
  desc: string;
  slug: string;
  img: string;
  imgAbove?: string;
  audioHover: string;
  fullAudio?: string;
}

const inspirations = [
  {
    title: "Nike",
    desc: `De ser los nuevos en la cancha a cambiar las reglas del juego. Apostaron por los rebeldes del deporte y llevaron su estilo a las calles.`,
    slug: "nike",
    img: "/inspiracion/phil_knight.webp",
    audioHover: "/audio/Humble cut.mp3",
  },
  {
    title: "The Beatles",
    desc: `No solo hicieron música, crearon un movimiento global. Con la "Invasión Británica", rompieron fronteras y marcaron la historia del rock.`,
    slug: "the-beatles",
    img: "/inspiracion/beatles-fondo.webp",
    imgAbove: "/inspiracion/vinyl.webp",
    audioHover: "/audio/Penny Lane cut.mp3",
  },
  {
    title: "YSY y Duki",
    desc: `Transformaron la improvisación de barrio en un fenómeno masivo. Desde El Quinto Escalón, le dieron ritmo y voz a toda una generación.`,
    slug: "ysy-y-duki",
    img: "/inspiracion/dukiysy.webp",
    audioHover: "/audio/Vuelta a la Luna cut.mp3",
  },
];

export default function Page() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Container className="grid lg:grid-cols-3 gap-12 mb-10 justify-center">
      {inspirations.map((inspo) => (
        <InspirationCard key={inspo.slug} inspo={inspo} />
      ))}
    </Container>
  );
}
