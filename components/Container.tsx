import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  tag?: React.ElementType;
  className?: string;
}

const cn = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};

const Container = ({
  children,
  tag: Tag = "div",
  className,
}: ContainerProps) => {
  return (
    <Tag className={cn("max-w-7xl mx-auto h-full", className)}>{children}</Tag>
  );
};

export default Container;
