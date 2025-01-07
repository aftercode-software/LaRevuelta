"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  duration?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [timelineOffsets, setTimelineOffsets] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);

      const offsets = Array.from(ref.current.children).map((child: any) => {
        return child.getBoundingClientRect().top + window.scrollY;
      });
      setTimelineOffsets(offsets);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full px-[4vw] font-sans " ref={containerRef}>
      <div ref={ref} className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-start pt-10">
            <div className="sticky flex flex-col md:flex-row justify-between w-full pr-2 z-40 bg-[#070707]/80 backdrop-blur-sm items-center top-28 self-start border-[1px] border-primario rounded-2xl mb-3 lg:mb-5 ">
              <section className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-[#070707] border-[5px] border-primario  items-center justify-center hidden md:flex md:absolute left-3 md:left-[1.30rem]" />

                <div>
                  <h3
                    className="lg:ml-[4rem] pl-[1rem] md:pl-[4rem] lg:pl-0 w-full font-geist text-left py-3 text-[2.5rem] leading-[2.7rem] lg:text-6xl xl:text-7xl font-bold flex  items-center 
                  rounded-xl text-primario-400 "
                  >
                    <b className="font-bold text-white mr-2 sm:mr-4 ">
                      {index + 1}{" "}
                    </b>{" "}
                    {item.title}
                  </h3>
                </div>
              </section>
              <p className="sm:text-xl lg:text-2xl font-geist font-semibold text-white pb-2 md:px-2 md:py-2">
                {" " + item.duration}
              </p>
            </div>

            <div className="relative px-2 pr-4 md:pl-20 w-full">
              {item.content}
              {""}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block md:absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primario-950 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primario via-primario-950 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
