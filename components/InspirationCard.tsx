/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Inspiration } from "@/app/que-nos-inspira/page";
import useSound from "use-sound";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

export default function InspirationCard({ inspo }: { inspo: Inspiration }) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop }] = useSound(inspo.audioHover, {
    onend: () => setIsPlaying(false),
    volume: 0.05,
  });

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "ease" }
      );
    }
  }, []);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const handleMouseEnter = () => {
    if (imgRef.current && inspo.slug === "the-beatles") {
      gsap.to(imgRef.current, {
        rotation: "+=360",
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
    play();
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      gsap.killTweensOf(imgRef.current);
      gsap.to(imgRef.current, {
        rotation: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
    stop();
  };

  return (
    <Link
      ref={cardRef}
      href={`/que-nos-inspira/${inspo.slug}`}
      className="relative flex flex-col justify-end items-center  rounded-xl overflow-hidden group text-center w-full aspect-square max-w-[320px] sm:max-w-full mx-auto cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="bg-primario-400  z-30 absolute p-1 rounded-full right-5 top-6">
        <ArrowUpRight className="text-black" />
      </span>
      <img
        src={inspo.img}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 saturate-0 group-hover:saturate-100  duration-500 rounded-xl"
      />
      <div className="absolute inset-0 z-20 bg-black bg-opacity-70 group-hover:bg-opacity-60  duration-500" />

      {inspo.imgAbove && (
        <img
          ref={imgRef}
          src={inspo.imgAbove}
          alt={inspo.title}
          className={`hidden sm:block sm:relative z-30 w-[70%] sm:pt-5 h-[65%] object-contain saturate-0 group-hover:saturate-100 ${
            inspo.slug === "the-beatles" ? " duration-500" : ""
          }`}
        />
      )}

      <div className="relative z-30 flex flex-col w-full text-left p-5 sm:px-8">
        <p className="font-fustat font-extrabold text-primario-300 text-3xl sm:text-4xl">
          {inspo.title}
        </p>
        <p className="font-geist text-base sm:text-lg mt-1">{inspo.desc}</p>
      </div>
    </Link>
  );
}
