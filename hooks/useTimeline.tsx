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
        start: "top top", // When top of container hits top of viewport
        end: "+=2000", // When bottom of container hits top of viewport
        // toggleActions: "play reverse play reverse",
        pin: true, // Pin the container so that we can see the transition happen
        scrub: 0.8,
        autoRemoveChildren: true,
        markers: true,
        snap: {
          snapTo: 1 / 100,
          snapUnits: true,
        },
      },
    };
    // if (defaultConfig) config = { ...config, ...defaultConfig };
    const tl = gsap.timeline(config);
    tl.addLabel("firstpart", 0);
    tl.addLabel("secondpart", "firstpart+3");
    tl.addLabel("thirdpart", "secondpart+3");
    setTl(tl);
  }, []);

  return (
    <timelineContext.Provider value={tl}>{children}</timelineContext.Provider>
  );
};
