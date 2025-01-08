import React from "react";

export default function Pill({ text }: { text: string }) {
  return (
    <div className="font-fustat text-sm font-extrabold bg-primario-400 text-primario-950 px-3 py-1 rounded-full">
      {text}
    </div>
  );
}
