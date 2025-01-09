import IpcPage from "@/components/clientes/IpcPage";
import NutriterraPage from "@/components/clientes/NutriterraPage";
import Pill from "@/components/clientes/Pill";
import StatCard from "@/components/clientes/StatCard";
import { Flag } from "lucide-react";
import React from "react";
import { Cliente, clientes } from "../page";

const pages = {
  nutriterra: <NutriterraPage />,
  ipc: <IpcPage />,
};

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const cliente = clientes.find(
    (cliente) => cliente.href === `/clientes/${slug}`
  );

  return (
    <main className="mt-10 font-onest">
      <section className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex flex-col gap-12 flex-1">
          <FirstSection cliente={cliente} />
          <StartingPoint startingPoint={cliente?.startingPoint} />
        </div>
        <aside className="w-full lg:w-[25vw]">
          <div className="relative rounded-xl z-40 overflow-hidden h-[30vh] lg:h-[50vh] pointer-events-none">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              className="object-cover w-full h-full z-10"
              src={cliente?.image}
              alt={cliente?.name}
            />
            <img
              className="absolute w-28 top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              src={cliente?.logo}
              alt={cliente?.name}
            />
          </div>
        </aside>
      </section>
      <div className="mt-10">{pages[slug]}</div>
    </main>
  );
}

function FirstSection({ cliente }: { cliente: Cliente }) {
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl text-primario-500 font-bold mb-2">
          {cliente?.name}
        </h1>
        <Pill text={cliente?.year} />
      </div>
      <p className="text-xl">{cliente?.description}</p>
      <div className="flex flex-wrap gap-4 mt-6">
        {cliente?.stats.map((stat) => (
          <StatCard
            description={stat.description}
            value={stat.title}
            key={stat.title}
          />
        ))}
      </div>
    </section>
  );
}

function StartingPoint({ startingPoint }: { startingPoint: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-onest font-semibold text-primario-300 text-3xl flex items-center gap-2 mb-4">
        <span className="bg-primario-300 rounded-full p-2">
          <Flag className="text-primario-950" size={20} strokeWidth={2} />
        </span>
        <span>Punto de partida</span>
      </h2>
      <p className="text-xl font-onest">{startingPoint}</p>
    </section>
  );
}
