import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { createContext, useContext, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const timelineContext = createContext<GSAPTimeline | null>(null);

export const useTimeline = () => {
  const timeline = useContext(timelineContext);
  return timeline;
};

export const TimelineProvider = ({
  children,
  triggerSelector,
  defaultConfig,
  start,
  end,
}: {
  children: React.ReactNode;
  triggerSelector: string;
  start?: string;
  end?: string;
  defaultConfig?: any;
}) => {
  const [tl, setTl] = useState<GSAPTimeline | null>(null);

  useGSAP(() => {
    let config = {
      scrollTrigger: {
        trigger: triggerSelector,
        start: start || "top top",
        end: end || "+=1400",
        pin: true,
        scrub: 1,
        markers: true,
      },
    };
    if (defaultConfig) config = defaultConfig;
    const tl = gsap.timeline(config);
    tl.addLabel("firstpart", 0);
    tl.addLabel("secondpart", "firstpart+1.5");
    tl.addLabel("thirdpart", "firstpart+3");
    setTl(tl);
  }, []);

  return (
    <timelineContext.Provider value={tl}>{children}</timelineContext.Provider>
  );
};
