"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { contextSafe } = useGSAP(() => {}, [isOpen]);

  const handleClick = contextSafe(() => {
    if (isOpen) {
      gsap.to(".nav-menu", {
        right: "-50vw",
        duration: 0.5,
        ease: "power2.in",
      });
    } else {
      let gsapTimeline = gsap.timeline();
      gsapTimeline.to(".nav-menu", {
        right: "0vw",
        duration: 0.5,
        ease: "power2.in",
      });

      gsapTimeline.from(
        ".nav-item span",
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.6,
        },
        "<+=0.4"
      );
    }
    setIsOpen(!isOpen);
  });

  return (
    <div
      className={cn(
        "fixed left-0 top-0  z-50 w-full",
        isOpen ? "h-screen bg-black/40" : "bg-transparent h-fit"
      )}
    >
      <nav className="flex justify-between items-center8 border-b-2 z-50 w-full bg-transparent backdrop-blur-md">
        {" "}
        <div className="border-r-2 border-white px-[5vw] py-8 h-full">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex  justify-center items-center border-l-2  border-white px-[5vw] py-8">
          <button onClick={handleClick}>
            <Menu size={32} />
          </button>
        </div>
      </nav>
      <ul
        className={cn(
          "nav-menu absolute flex flex-col gap-0 *:font-onest *:flex-1 -right-[50vw] w-[50vw] bg-transparent backdrop-blur-md border-white border-l-2 border-b-2 h-[90vh]"
        )}
      >
        {[
          <span>
            Nuestra <br /> Inspiración
          </span>,
          <span>
            Proceso de <br /> transformación
          </span>,
          <span>Clientes</span>,
          <span>Filosofía</span>,
        ].map((item, index) => {
          const isActive = index === 0;
          return (
            <li className="">
              <Link
                className={cn(
                  "nav-item flex items-center pl-20 h-full w-full text-4xl transition-all duration-300 ",
                  isActive
                    ? "text-black font-bold bg-primario-400"
                    : "hover:font-semibold hover:bg-black/40  text-white"
                )}
                href="/"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
