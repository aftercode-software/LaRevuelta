import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Pill from "./Pill";

interface ClienteCardProps {
  name: string;
  image: string;
  logo: string;
  href: string;
  category: string;
  year: string;
}

export default function ClienteCard({
  name,
  image,
  logo,
  href,
  category,
  year,
}: ClienteCardProps) {
  return (
    <Link
      href={href}
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[40vh] lg:h-[60vh] w-full relative cursor-pointer rounded-xl bg-cover bg-center group transition-all duration-300"
    >
      <div className="rounded-full bg-primario-400 w-8 h-8 p-1 absolute top-8 right-8 flex items-center justify-center">
        <ArrowUpRightIcon className="w-full h-full text-primario-950" />
      </div>
      <img
        src={logo}
        alt={name}
        className="absolute w-16 lg:w-28 group-hover:scale-125 transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex flex-col gap-2 absolute bottom-4 left-8">
        <div className="flex gap-2">
          <Pill text={category} />
          <Pill text={year} />
        </div>
        <h2 className="font-onest text-primario-400 text-3xl font-bold">
          {name}
        </h2>
      </div>
    </Link>
  );
}
