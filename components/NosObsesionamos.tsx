import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BrainCircuit, Building, Eye, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";

export default function NosObsesionamos() {
  useGSAP(() => {
    gsap.from(".nos-obsesionamos", {
      opacity: 0,
      duration: 0.4,
      y: 50,
      delay: 3,
      ease: "power2.in",
    });
  });

  return (
    <span className="nos-obsesionamos flex flex-col md:flex-row items-center gap-1 md:gap-2 font-geist font-light text-2xl md:text-3xl">
      NOS <span className="font-onest font-black">OBSESIONAMOS</span> CON
      ENTENDER TU <BoxOpciones />
    </span>
  );
}

interface Item {
  text: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const opciones: Item[] = [
  {
    text: "NEGOCIO",
    icon: Building,
  },
  {
    text: "ENFOQUE",
    icon: BrainCircuit,
  },
  {
    text: "VISIÓN",
    icon: Eye,
  },
];

function BoxOpciones() {
  const parentBoxRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLSpanElement[]>([]);
  useGSAP((context, contextSafe) => {
    if (!contextSafe) return;

    const items = itemRefs.current;

    if (!parentBoxRef.current) {
      return;
    }

    gsap.set(items, { y: 100, opacity: 0 });
    gsap.set(items[0], { y: 0, opacity: 1 });

    const next = contextSafe((newIndex: number) => {
      let curIndex = newIndex - 1;
      if (newIndex === 0) {
        curIndex = items.length - 1;
      }

      gsap.to(items[curIndex], { y: -200, duration: 2 });
      gsap.fromTo(
        items[newIndex],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "expo.inOut",
          onComplete: () => {
            gsap.delayedCall(1, () => {
              if (newIndex === items.length - 1) {
                next(0);
              } else {
                next(newIndex + 1);
              }
            });
          },
        }
      );
    });
    next(0);
  });

  return (
    <div
      ref={parentBoxRef}
      className="relative parent-box font-onest font-bold inline-block text-2xl bg-transparent backdrop-blur-sm border border-primario-500/40 text-white w-48 rounded-full h-10 overflow-hidden"
    >
      {opciones.map(({ text, icon: Icon }, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) {
              itemRefs.current[index] = el;
            }
          }}
          className="opacity-0 w-fit flex gap-1 items-center justify-center absolute item left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          {text}
          <Icon className="text-primario-500" />
        </span>
      ))}
    </div>
  );
}
