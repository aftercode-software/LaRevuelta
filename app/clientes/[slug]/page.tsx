import StatCard from "@/components/clientes/StatCard";
import Container from "@/components/Container";
import { Flag } from "lucide-react";
import React from "react";
import { Cliente, clientes } from "../page";

export default function page({ params }: { params: { slug: string } }) {
  const cliente = clientes.find(
    (cliente) => cliente.href === `/clientes/${params.slug}`
  );

  return (
    <main className="mt-10">
      <div className="flex gap-8">
        <FirstSection cliente={cliente} />
        <aside className="w-[30vw]">
          <div className="relative rounded-xl z-40 overflow-hidden h-[50vh] pointer-events-none">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              className="object-cover h-full z-10"
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
      </div>
    </main>
  );
}

function FirstSection({ cliente }: { cliente: Cliente }) {
  return (
    <section className="flex-1">
      <h1 className="text-5xl text-primario-500 font-bold mb-2">
        {cliente?.name}
      </h1>
      <p className="text-xl">{cliente?.description}</p>
      <div className="flex gap-4 mt-6">
        <StatCard
          description="nuevos prospectos comerciales generados"
          value="+2000"
        />
        <StatCard description="aumento de flujo de personas" value="+500%" />
        <StatCard description="aumento en la base de datos" value="+25%" />
      </div>
    </section>
  );
}

function StartingPoint({ startingPoint }: { startingPoint: string }) {
  return (
    <section>
      <h2>
        <span>
          <Flag />
        </span>
      </h2>
    </section>
  );
}
