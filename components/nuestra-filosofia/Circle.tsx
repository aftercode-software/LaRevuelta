import React from "react";

export default function Circle({ className }: { className?: string }) {
  return (
    <svg width="50%" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle
        r="45"
        cx="50"
        cy="50"
        strokeDasharray="3 3"
        stroke="green"
        stroke-width="3"
        opacity="0.5"
      />
    </svg>
  );
}
