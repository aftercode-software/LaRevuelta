"use client";
import Container from "@/components/Container";
import InspiracionCard from "@/components/inspiracion/InpiracionCard";
import { inspirationCards } from "@/constants/que-nos-inpira/cards";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Container
      className="grid lg:grid-cols-3 min-h-[60vh] gap-12 mb-10 justify-center"
      tag={"main"}
    >
      {inspirationCards.map((inspo) => (
        <InspiracionCard key={inspo.slug} inspo={inspo} />
      ))}
    </Container>
  );
}
