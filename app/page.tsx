import ComprendemosTuSueño from "@/components/ComprendemosTuSueño";
import Hero from "@/components/Hero";
import TransformationSummarized from "@/components/TransformationSummarized";
import dynamic from "next/dynamic";

const NuestraFilosofia = dynamic(
  () => import("@/components/nuestra-filosofia/NuestraFilosofia")
);

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ComprendemosTuSueño />
      <TransformationSummarized />
      <NuestraFilosofia />
    </div>
  );
}
