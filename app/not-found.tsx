import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Página no encontrada",
};

const NotFoundPage = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-black text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[10rem] font-bold md:text-[15rem] lg:text-[40rem] tracking-widest text-white/10">
          404
        </h1>

        <div className="absolute text-center">
          <p className="text-lg font-medium tracking-widest uppercase mb-5 text-gray-400">
            Página no encontrada
          </p>

          <Link
            href={"/"}
            className="mt-4 px-8 py-2 border border-white text-lg uppercase font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
