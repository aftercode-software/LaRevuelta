import ComprendemosTuSueño from "@/components/ComprendemosTuSueño";
import Hero from "@/components/Hero";
import TransformationSummarized from "@/components/TransformationSummarized";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ComprendemosTuSueño />
      <TransformationSummarized />
    </div>
  );
}
