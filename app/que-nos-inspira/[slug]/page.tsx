/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams } from "next/navigation";
import Container from "@/components/Container";
import Link from "next/link";
import { CircleArrowLeft, Volume2, VolumeOff } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useSound from "use-sound";

interface Inspiration {
  slug: string;

  secondImg?: string;
  audioHover: string;
  renderContent({
    ref,
    tittleRef,
    descRef,
  }: {
    ref: React.RefObject<HTMLDivElement>;
    tittleRef: React.RefObject<HTMLDivElement>;
    descRef: React.RefObject<HTMLDivElement>;
  }): React.ReactNode;
}

const data: Inspiration[] = [
  {
    slug: "nike",
    audioHover: "/audio/Humble cut.mp3",
    renderContent: ({ ref, tittleRef, descRef }) => (
      <div className="flex xl:flex-row flex-col">
        <aside className="xl:w-[60%]">
          <h3
            ref={tittleRef}
            className="text-5xl font-fustat font-extrabold text-primario-300 text-left mb-2 mt-16"
          >
            Nike
          </h3>
          <p ref={descRef} className="font-onest text-2xl font-extrabold mb-8">
            DE SER UNA MARCA NUEVA A LIDERAR EL MERCADO
          </p>
          <section ref={ref} className="opacity-0 mr-10">
            <aside className="text-white space-y-4 *:font-geist">
              <p className="*:text-lg md:text-xl">
                Nike nació como una marca deportiva,{" "}
                <b className="font-semibold">
                  lanzando su primer par de zapatillas en 1972
                </b>
                . Sin embargo, enfrentaban un mercado dominado por gigantes como
                Adidas y Puma. Su éxito se debe a{" "}
                <b className="font-semibold">dos jugadas maestras</b>:
              </p>
              <ul className="list-disc space-y-6 pl-4  marker:text-primario-500 *:text-lg md:text-xl">
                <li className="">
                  <p className="font-bold text-primario-500 mb-2">
                    Identificar talento y crear modelos únicos:
                  </p>
                  <p className="mb-2">
                    Desde el principio, Nike{" "}
                    <b className="font-semibold">apostó por jóvenes promesas</b>
                    , ofreciéndoles modelos personalizados que conectaran mejor
                    con sus seguidores.
                  </p>
                  <p>
                    <b className="font-semibold">Michael Jordan</b> fue el
                    primer basquetbolista en tener su propia zapatilla
                    exclusiva. Nike creó un modelo solo para él,{" "}
                    <b className="font-semibold">marcando una tendencia</b> que
                    otras marcas intentarían replicar sin el mismo impacto. El
                    resto es historia.
                  </p>
                </li>
                <li>
                  <p className="font-bold text-primario-500 ">
                    Entender el uso urbano de sus productos:
                  </p>
                  <p>
                    Aunque nació como una marca deportiva, Nike se dio cuenta de
                    que
                    <b className="font-semibold">
                      {" "}
                      muchas personas usaban sus productos en la vida diaria
                    </b>
                    , lejos de cualquier cancha o gimnasio. En lugar de
                    resistirse, abrazó esta tendencia y lanzó líneas como Nike
                    SB y Nike Sportswear, enfocadas en el estilo urbano.
                  </p>
                </li>
              </ul>
            </aside>
          </section>
        </aside>
        <aside className="mt-5 items-center xl:mt-0 xl:items-start xl:w-[40%] flex flex-col">
          <img
            src="/inspiracion/phil_knight.webp"
            alt="Phil Knight"
            className="w-full object-cover rounded-lg"
          />
          <img
            src="/inspiracion/nike_logo.webp"
            alt="Logo de Nike"
            className="w-[80%] object-cover rounded-lg"
          />
        </aside>
      </div>
    ),
  },
  {
    slug: "the-beatles",
    audioHover: "/audio/Penny Lane Full.mp3",
    renderContent: ({ ref, tittleRef, descRef }) => (
      <div className="flex xl:flex-row flex-col">
        <aside className="xl:w-[55%]">
          <h3
            ref={tittleRef}
            className="text-5xl font-fustat font-extrabold text-primario-300 text-left mb-2 mt-16"
          >
            The Beatles
          </h3>
          <p ref={descRef} className="font-onest text-2xl font-extrabold mb-8">
            LLEVAR SU LEGADO A TODO EL MUNDO: INVASIÓN BRITÁNICA
          </p>
          <section ref={ref} className="opacity-0">
            <aside className="text-white space-y-4 *:font-geist *:text-lg md:text-xl">
              <p>
                Los Beatles empezaron pegando fuerte en el Reino Unido con sus
                primeros sencillos. Pero pronto se dieron cuenta de algo clave:{" "}
                <b className="font-semibold">
                  si querían romperla de verdad, tenían que salir de su zona de
                  confort y llevar su música a otros continentes.
                </b>
              </p>
              <p>
                ¿A dónde apuntaron? A Estados Unidos, el{" "}
                <b className="font-semibold">
                  mercado musical más grande del mundo{" "}
                </b>
                en ese entonces. Así nació la famosa{" "}
                <b className="font-semibold">“Invasión Británica”</b>, que puso
                a los Beatles en la cima y los hizo resonar tanto en su país
                como al otro lado del charco.
              </p>
              <p>
                Fue un movimiento arriesgado, pero si no hubieran tomado esa
                decisión, su legado no sería el fenómeno global que es hoy.
              </p>
              <p>
                Detrás de ellos, otras bandas británicas como{" "}
                <b className="font-semibold">The Rolling Stones</b> y{" "}
                <b className="font-semibold">The Who</b>siguieron el mismo
                camino, consolidando una{" "}
                <b className="font-semibold">nueva era en la música mundial.</b>
              </p>
            </aside>
          </section>
        </aside>
        <aside className="flex xl:w-[45%] flex-col">
          <img
            src="/inspiracion/vinyl.webp"
            alt="Vinilo de The Beatles"
            className="w-full h-full object-cover rounded-lg"
          />
        </aside>
      </div>
    ),
  },
  {
    slug: "ysy-y-duki",
    audioHover: "/audio/Vuelta a la Luna cut.mp3",
    renderContent: ({ ref, tittleRef, descRef }) => (
      <div className="flex xl:flex-row flex-col">
        <aside className="xl:w-[70%]">
          <h3
            ref={tittleRef}
            className="text-5xl font-fustat font-extrabold text-primario-300 text-left mb-2 mt-16"
          >
            YSY y Duki
          </h3>
          <p ref={descRef} className="font-onest text-2xl font-extrabold mb-8">
            ENTENDIERON UN MOVIMIENTO Y LO MATERIALIZARON EN UN GÉNERO MASIVO
          </p>
          <section
            ref={ref}
            className="opacity-0 text-white space-y-4 *:font-geist *:text-lg md:text-xl"
          >
            <p>
              A principios de 2013, el freestyle estaba explotando en
              Latinoamérica, especialmente en Argentina. Cada vez más pibes y
              pibas se metían en esta disciplina, pero faltaba algo:{" "}
              <b className="font-semibold">
                un punto de encuentro donde pudieran mostrar su nivel
              </b>
              , conocerse y competir para ver quién era el mejor.
            </p>
            <p>
              Ese mismo año, Alejo Nahuel Acosta{" ("}
              <b className="font-semibold">YSY A{") "}</b>
              captó el potencial de esta movida y creó El Quinto Escalón,{" "}
              <b className="font-semibold">
                una competencia de freestyle en Buenos Aires
              </b>{" "}
              que arrancó con apenas 10 personas y llegó a reunir a más de 8.000
              en 2017.
            </p>
            <p>
              Los eventos se grababan y millones que no podían asistir los veían
              online. Pero Alejo entendió algo clave:{" "}
              <b className="font-semibold">
                a la gente no solo le interesaba la competencia, sino la
                creatividad pura y cruda de los raperos improvisando.
              </b>
            </p>
            <p>
              Con esa visión, Alejo dejó las batallas para enfocarse en la
              música. Quiso ofrecerle al movimiento lo que realmente buscaban:
              canciones con melodías frescas, flows únicos y letras potentes.
            </p>
            <p>
              <b className="font-semibold">
                Así nació una nueva era de la música urbana en Argentina
              </b>
              . Lo acompañaron Duki, Paulo Londra, Bizarrap, Cazzu y muchos más,
              artistas que hoy suman millones de reproducciones y llenan
              estadios alrededor del mundo.
            </p>
            <p>
              El resto... {""}
              <b className="font-bold text-primario-500">es historia.</b>
            </p>
          </section>
        </aside>
        <aside className=" flex flex-col xl:w-[30%]">
          <img
            src="/inspiracion/spotifydukiysy.webp"
            alt="YSY y Duki"
            className="w-full h-full object-cover rounded-lg"
          />
        </aside>
      </div>
    ),
  },
];

export default function InspirationDetailPage() {
  const { slug } = useParams();
  const inspiration = data.find((inspo) => inspo.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null!);
  const tittleRef = useRef<HTMLHeadingElement>(null!);
  const descRef = useRef<HTMLParagraphElement>(null!);
  const backButtonRef = useRef<HTMLAnchorElement>(null!);
  const musicButtonRef = useRef<HTMLButtonElement>(null!);

  const [isMuted, setIsMuted] = useState(false);
  const [play, { stop, sound }] = useSound(inspiration.audioHover, {
    volume: 0.03,
    loop: true,
  });

  useEffect(() => {
    const playOnUserInteraction = () => {
      play();
      window.removeEventListener("click", playOnUserInteraction);
      window.removeEventListener("mousemove", playOnUserInteraction);
    };

    window.addEventListener("click", playOnUserInteraction);
    window.addEventListener("mousemove", playOnUserInteraction);

    return () => {
      stop();
      window.removeEventListener("click", playOnUserInteraction);
      window.removeEventListener("mousemove", playOnUserInteraction);
    };
  }, [inspiration, play, stop]);

  useEffect(() => {
    if (
      inspiration &&
      contentRef.current &&
      tittleRef.current &&
      descRef.current
    ) {
      window.scrollTo(0, 0);
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          backButtonRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(
          musicButtonRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "<"
        );

      timeline
        .fromTo(
          tittleRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "<"
        );

      timeline.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [inspiration]);

  useEffect(() => {
    if (sound) {
      sound.volume(isMuted ? 0 : 0.03);
    }
  }, [isMuted, sound]);

  if (!inspiration) {
    return <p>No se encontró contenido para esta página.</p>;
  }

  const { renderContent } = inspiration;

  return (
    <Container>
      <div className="flex justify-between items-center">
        <BackButton ref={backButtonRef} />
        <MusicButton
          ref={musicButtonRef}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
      </div>
      {renderContent({ ref: contentRef, tittleRef, descRef })}
    </Container>
  );
}
const BackButton = React.forwardRef<HTMLAnchorElement>((_, ref) => (
  <Link
    href="/que-nos-inspira"
    ref={ref}
    className="text-white bg-primario-500/10 px-4 py-2 rounded-xl w-max mb-4 border-[1px] border-primario-500 flex gap-2 font-onest font-semibold"
  >
    <CircleArrowLeft className="text-primario-500" /> Todos los artistas
  </Link>
));

BackButton.displayName = "BackButton";

const MusicButton = React.forwardRef<
  HTMLButtonElement,
  {
    isMuted: boolean;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ isMuted, setIsMuted }, ref) => {
  const handleClick = () => {
    setIsMuted((prev) => !prev);

    if (ref && "current" in ref && ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.2,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        }
      );
    }
  };

  return (
    <button
      ref={ref}
      className="text-white bg-primario-500/10 px-4 py-2 rounded-xl w-max mb-4 border-[1px] border-primario-500 flex gap-2 font-onest font-semibold"
      onClick={handleClick}
    >
      {isMuted ? <VolumeOff /> : <Volume2 />}
    </button>
  );
});

MusicButton.displayName = "MusicButton";
