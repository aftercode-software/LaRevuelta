import Empresas from "@/components/nuestra-filosofia/Empresas";
import Necesidades from "@/components/nuestra-filosofia/Necesidades";
import NeedsDiagram from "@/components/nuestra-filosofia/NeedsDiagram";
import NuestraFilosofia from "@/components/nuestra-filosofia/NuestraFilosofia";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="h-[50vh] w-full bg-white">Spacer</div>
      <Necesidades />
      <Empresas />
      <div className="h-[50vh] w-full bg-white">Spacer</div>
      <div className="h-[50vh] w-full bg-white">Spacer</div>
    </div>
  );
}
