import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <footer className=" bg-primario border-primario-400/40 border-[2px] rounded-xl my-4 shadow flex flex-col">
        <div className="w-full p-4 md:flex md:items-center md:justify-between *:font-geist">
          <span className="font-semibold text-black text-sm sm:text-center">
            <b className="font-bold text-lg">© {currentYear} La Revuelta</b>.
            Todos los derechos reservados.
          </span>
          <ul className="flex flex-col md:flex-row flex-wrap items-start md:items-center mt-3 text-lg font-medium *:md:list-none text-black sm:mt-0 space-y-1 md:space-y-0 md:space-x-4">
            <li className="list-disc ml-6">
              <Link
                href="/que-nos-inspira"
                className="hover:font-bold duration-150"
              >
                Nuestra inspiración
              </Link>
            </li>
            <li className="list-disc ml-6">
              <Link
                href="/proceso-transformacion"
                className="hover:font-bold duration-150"
              >
                Proceso de transformación
              </Link>
            </li>
            {/* <li className="list-disc ml-6">
              <Link href="/clientes" className="hover:font-bold duration-150">
                Clientes
              </Link>
            </li> */}
            <li className="list-disc ml-6">
              <Link
                href="/nuestra-filosofia"
                className="hover:font-bold duration-150"
              >
                Filosofía
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start pt-2 p-4 text-left md:justify-center">
        <span className="font-geist text-white md:text-base">
          Orgullosamente diseñado y desarrollado por
        </span>
        <Link
          className="text-pink-500 font-geist font-semibold md:text-base"
          target="_blank"
          href="https://www.aftercode.dev/"
        >
          Aftercode.
        </Link>
      </div>
    </Container>
  );
}
