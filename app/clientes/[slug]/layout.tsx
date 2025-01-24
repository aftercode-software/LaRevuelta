import Container from "@/components/Container";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <BackButton />
      {children}
    </Container>
  );
}

const BackButton = React.forwardRef<HTMLAnchorElement>((_, ref) => (
  <Link
    href="/clientes"
    ref={ref}
    className="text-white bg-primario-500/10 px-4 py-2 rounded-xl w-max mb-4 border-[1px] border-primario-500 flex gap-2 font-onest font-semibold"
  >
    <CircleArrowLeft className="text-primario-500" /> Todos los clientes
  </Link>
));
