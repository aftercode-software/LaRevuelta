import React from "react";

import CirculoRecursivo from "./CirculoRecursivo";
import CirculoVirtuoso from "./CirculoVirtuoso";
import Empresas from "./Empresas";
import FinalFilosofia from "./FinalFilosofia";
import Necesidades from "./Necesidades";

export default function NuestraFilosofia() {
  return (
    <div>
      <Necesidades />
      <Empresas />
      <CirculoVirtuoso />
      <CirculoRecursivo />
      <FinalFilosofia />
    </div>
  );
}
