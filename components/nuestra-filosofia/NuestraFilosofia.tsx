import React from "react";
import Container from "../Container";
import CirculoRecursivo from "./CirculoRecursivo";
import CirculoVirtuoso from "./CirculoVirtuoso";
import Empresas from "./Empresas";
import FinalFilosofia from "./FinalFilosofia";
import Necesidades from "./Necesidades";
import NeedsDiagram from "./NeedsDiagram";

export default function NuestraFilosofia() {
  return (
    <div>
      <div className="h-[50vh] w-full bg-white">Spacer</div>
      <Necesidades />
      <Empresas />
      <CirculoVirtuoso />
      <CirculoRecursivo />
      <FinalFilosofia />
      <div className="h-[50vh] w-full bg-white">Spacer</div>
    </div>
  );
}
