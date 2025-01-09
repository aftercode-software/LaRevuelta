import { CircleAlert } from "lucide-react";
import React from "react";

export default function DataWarning() {
  return (
    <div className="w-full rounded-xl border-2 border-primario-300 bg-primario-300/20 flex items-center px-4 py-4">
      <span className="flex items-center gap-4">
        <CircleAlert strokeWidth={2.5} className="w-6 text-primario-300" />
        <p className="flex-1 text-xl font-medium leading-6 text-white">
          Datos reales obtenidos en la investigación. Los competidores están{" "}
          <b>ocultos por privacidad de la información</b>.
        </p>
      </span>
    </div>
  );
}
