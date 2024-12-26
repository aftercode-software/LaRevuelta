import { useGSAP } from "@gsap/react";
import { gsap, snap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { createContext, useContext, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const timelineContext = createContext<GSAPTimeline | null>(null);

export const useTimeline = () => {
  const timeline = useContext(timelineContext);
  return timeline;
};

export const TimelineProvider = ({
  children,
  triggerSelector,
  defaultConfig,
}: {
  children: React.ReactNode;
  triggerSelector: string;
  defaultConfig?: any;
}) => {
  const [tl, setTl] = useState<GSAPTimeline | null>(null);

  useGSAP(() => {
    let config = {
      scrollTrigger: {
        trigger: triggerSelector,
        start: "top top",
        end: "+=3100",
        pin: true,
        scrub: 0.8,
        autoRemoveChildren: true,
        markers: true,
      },
    };
    if (defaultConfig) config = { ...config, ...defaultConfig };
    const tl = gsap.timeline(config);
    tl.addLabel("firstpart", 0);
    tl.addLabel("secondpart", "firstpart+3");
    tl.addLabel("thirdpart", "firstpart>3");
    setTl(tl);
  }, []);

  return (
    <timelineContext.Provider value={tl}>{children}</timelineContext.Provider>
  );
};