"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const NavbarLinks = [
  {
    component: (
      <span>
        Nuestra <br /> Inspiración
      </span>
    ),
    href: "/que-nos-inspira",
  },
  {
    component: (
      <span>
        Proceso de <br /> transformación
      </span>
    ),
    href: "/proceso-transformacion",
  },
  {
    component: <span>Clientes</span>,
    href: "/clientes",
  },
  {
    component: <span>Filosofía</span>,
    href: "/#filosofia",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log("Pathname: ", pathname);
    console.log("Hash: ", window.location.hash);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(".nav-menu", {
        right: "0vw",
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".nav-item span", {
        opacity: 0,
        y: 40,
        delay: 0.3,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(".nav-menu", {
        right: "-100vw",
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 w-full",
        isOpen ? "h-screen bg-black/40" : "bg-transparent h-fit"
      )}
    >
      <nav className="flex justify-between items-center border-b-2 border-zinc-800 z-50 w-full bg-black/40 backdrop-blur-md">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="sm:border-r-2 border-zinc-800 px-[5vw] py-5 h-full"
        >
          <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
        </Link>
        <div className="flex justify-center items-center sm:border-l-2 border-zinc-800 px-[5vw] py-5">
          <button onClick={handleClick}>
            <Menu size={32} />
          </button>
        </div>
      </nav>
      <ul
        className={cn(
          "nav-menu absolute flex flex-col gap-0 *:font-onest *:flex-1 right-[-100vw] bg-black/70 backdrop-blur-md border-zinc-900 border-l-2 border-b-2 h-[85vh] sm:h-[90vh]",
          "w-full md:w-[50vw] lg:w-[40vw]"
        )}
      >
        {NavbarLinks.map(({ component, href }, index) => {
          const pathnameWithHash = `/${window.location.hash}`;
          const isActive = href === pathname || pathnameWithHash === href;
          return (
            <li key={index}>
              <Link
                className={cn(
                  "nav-item flex items-center pl-10 sm:pl-20 h-full w-full text-2xl sm:text-4xl transition-all duration-300",
                  isActive
                    ? "text-black font-bold bg-primario-400"
                    : "hover:font-semibold hover:bg-black/40 text-white"
                )}
                onClick={handleClick}
                href={href}
              >
                {component}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
