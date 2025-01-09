import ComprendemosTuSueño from "@/components/ComprendemosTuSueño";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import TransformationSummarized from "@/components/transformacion/TransformationSummarized";
import { ChevronsDown } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ComprendemosTuSueño />
      <TransformationSummarized />
      <Container className="mt-10 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl md:text-5xl text-center font-fustat">
          Conocé nuestra{" "}
          <span className="text-primario-500 font-bold">filosofía</span>
        </h2>
        <ChevronsDown className="text-primario-500 animate-bounce" size={60} />
      </Container>
      <NuestraFilosofia />
    </div>
  );
}
