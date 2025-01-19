"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { pasos } from "@/constants/transformation/complete";

export default function TransformationComplete() {
  return (
    <div className="w-full">
      <Timeline data={pasos} />
    </div>
  );
}
