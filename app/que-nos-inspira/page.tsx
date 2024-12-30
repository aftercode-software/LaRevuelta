import React from "react";

export default function Page() {
  return (
    <Container className="grid lg:grid-cols-3 gap-8 justify-center">
      {inspirations.map((inspo) => (
        <Link
          key={inspo.slug}
          href={`/que-nos-inspira/${inspo.slug}`}
          className="flex flex-col items-center text-center w-full cursor-pointer transition-transform"
        >
          <p className="font-fustat font-extrabold text-primario-300 text-4xl mb-4">
            {inspo.title}
          </p>
          <p className="font-geist text-base mb-4 w-[80%]">{inspo.desc}</p>
          <img
            src={inspo.img}
            alt={inspo.title}
            className="aspect-square object-cover rounded-xl w-[90%] saturate-0 hover:saturate-100"
          />
        </Link>
      ))}
    </Container>
  );
}
