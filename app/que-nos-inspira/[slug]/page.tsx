"use client";
import { useParams } from "next/navigation";
import Container from "@/components/Container";
import Link from "next/link";
import { CircleArrowLeft, Volume2, VolumeOff } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useSound from "use-sound";
import { inspiraciones } from "@/constants/que-nos-inpira/pageContent";

export default function InspirationDetailPage() {
  const { slug } = useParams();
  const inspiration = inspiraciones.find((inspo) => inspo.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null!);
  const imgContainerRef = useRef<HTMLDivElement>(null!);
  const tittleRef = useRef<HTMLHeadingElement>(null!);
  const descRef = useRef<HTMLParagraphElement>(null!);
  const backButtonRef = useRef<HTMLAnchorElement>(null!);
  const musicButtonRef = useRef<HTMLButtonElement>(null!);
  const [isMuted, setIsMuted] = useState(false);

  const [play, { stop, sound }] = useSound(inspiration.audioHover, {
    volume: 0.03,
    loop: true,
  });

  useEffect(() => {
    if (inspiration) {
      document.title = inspiration.title;
    } else {
      document.title = "Que nos inspira";
    }
  }, [inspiration]);

  useEffect(() => {
    const playOnUserInteraction = () => {
      play();
      window.removeEventListener("click", playOnUserInteraction);
      window.removeEventListener("mousemove", playOnUserInteraction);
    };

    window.addEventListener("click", playOnUserInteraction);
    window.addEventListener("mousemove", playOnUserInteraction);

    return () => {
      stop();
      window.removeEventListener("click", playOnUserInteraction);
      window.removeEventListener("mousemove", playOnUserInteraction);
    };
  }, [inspiration, play, stop]);

  useEffect(() => {
    if (
      inspiration &&
      contentRef.current &&
      tittleRef.current &&
      descRef.current
    ) {
      window.scrollTo(0, 0);
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          backButtonRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(
          musicButtonRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "<"
        );

      timeline
        .fromTo(
          tittleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "<"
        );

      timeline
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(
          imgContainerRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }
  }, [inspiration]);

  useEffect(() => {
    if (sound) {
      sound.volume(isMuted ? 0 : 0.03);
    }
  }, [isMuted, sound]);

  const { renderContent } = inspiration;

  return (
    <Container>
      <div className="flex justify-between items-center">
        <BackButton ref={backButtonRef} />
        <MusicButton
          ref={musicButtonRef}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
      </div>
      {renderContent({ ref: contentRef, tittleRef, descRef, imgContainerRef })}
    </Container>
  );
}
const BackButton = React.forwardRef<HTMLAnchorElement>((_, ref) => (
  <Link
    href="/que-nos-inspira"
    ref={ref}
    className="text-white bg-primario-500/10 px-4 py-2 rounded-xl w-max mb-4 border-[1px] border-primario-500 flex gap-2 font-onest font-semibold"
  >
    <CircleArrowLeft className="text-primario-500" /> Todos los artistas
  </Link>
));

BackButton.displayName = "BackButton";

const MusicButton = React.forwardRef<
  HTMLButtonElement,
  {
    isMuted: boolean;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ isMuted, setIsMuted }, ref) => {
  const handleClick = () => {
    setIsMuted((prev) => !prev);

    if (ref && "current" in ref && ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.2,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        }
      );
    }
  };

  return (
    <button
      ref={ref}
      className="text-white bg-primario-500/10 px-4 py-2 rounded-xl w-max mb-4 border-[1px] border-primario-500 flex gap-2 font-onest font-semibold"
      onClick={handleClick}
    >
      {isMuted ? <VolumeOff /> : <Volume2 />}
    </button>
  );
});

MusicButton.displayName = "MusicButton";
