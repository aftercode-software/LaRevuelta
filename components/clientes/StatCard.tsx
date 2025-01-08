import React from "react";

export default function StatCard({
  description,
  value,
}: {
  description: string;
  value: string;
}) {
  return (
    <div className="bg-primario-500 text-primario-950 font-onest rounded-xl p-4 w-fit">
      <p className="text-5xl font-extrabold">{value}</p>
      <span className="block text-lg font-medium max-w-52">{description}</span>
    </div>
  );
}
