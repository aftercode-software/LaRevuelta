import { useTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function TextBox({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useTimeline();

  useGSAP(() => {
    if (!tl) return;

    tl.from(
      containerRef.current,
      {
        opacity: 0,
        duration: 4,
        ease: "power4.inOut",
      },
      label
    );

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      `thirdpart`
    );
  }, [tl]);

  return (
    <div
      ref={containerRef}
      className=" py-9 px-12 text-center font-geist w-full text-2xl bg-primario-950/30 text-white border-t-2 border-primario-500"
    >
      {children}
    </div>
  );
}
