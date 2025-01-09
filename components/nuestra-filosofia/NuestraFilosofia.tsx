import React from "react";

import CirculoRecursivo from "./CirculoRecursivo";
import CirculoVirtuoso from "./CirculoVirtuoso";
import Empresas from "./Empresas";
import FinalFilosofia from "./FinalFilosofia";
import Necesidades from "./Necesidades";

export default function NuestraFilosofia() {
  return (
    <div className="relative">
      <div className="sticky w-full flex justify-end top-[10vh] pr-[4vw] z-40">
        <img src="/images/scroll.gif" className="w-16" alt="" />
      </div>

      <Necesidades />
      <Empresas />
      <CirculoVirtuoso />
      <CirculoRecursivo />
      <FinalFilosofia />
    </div>
  );
}
