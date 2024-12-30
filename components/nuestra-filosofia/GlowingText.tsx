import React from "react";

export default function GlowingText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      style={{
        textShadow: "0 0 1.1em #FCF532, 0 0 0.6em #7E7A02",
      }}
      className={`text-primario-500 font-bold ${className}`}
    >
      {children}
    </span>
  );
}
