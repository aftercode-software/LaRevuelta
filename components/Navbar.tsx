import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/que-nos-inspira">Que nos inpira </Link>
      <Link href="/nuestra-filosofia">Filosofia</Link>
      <Link href="/proceso-transformacion">Transformacion</Link>
      <Link href="/clientes">Clientes</Link>
    </nav>
  );
}
