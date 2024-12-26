"use client";
import { TimelineProvider, useTimeline } from "@/hooks/useTimeline";

export default function Empresas() {
  return (
    <TimelineProvider triggerSelector=".container-empresas">
      <EscenaEmpresas />
    </TimelineProvider>
  );
}

function EscenaEmpresas() {
  const tl = useTimeline();
  return (
    <div className="container-empresas relative flex flex-col w-full h-screen bg-black overflow-hidden">
      xD
    </div>
  );
}
