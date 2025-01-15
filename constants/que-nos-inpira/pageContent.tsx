import { InspirationPageContent } from "@/interfaces/inspiracion";

export const inspiraciones: InspirationPageContent[] = [
  {
    title: "Nike - Innovación y liderazgo",
    slug: "nike",
    audioHover: "/audio/Humble cut.mp3",
    renderContent: ({ ref, tittleRef, descRef, imgContainerRef }) => (
      <div className="flex xl:flex-row flex-col mt-6">
        <aside className="xl:w-[60%]">
          <h3
            ref={tittleRef}
            className="text-5xl font-fustat font-extrabold text-primario-300 text-left mb-2 "
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
        <aside
          ref={imgContainerRef}
          className="mt-5 items-center xl:mt-0 xl:items-start xl:w-[40%] flex flex-col"
        >
          <img
            src="/images/que-nos-inspira/phil_knight.webp"
            alt="Phil Knight"
            className="w-full object-cover rounded-xl"
          />
          <img
            src="/images/que-nos-inspira/nike_logo.webp"
            alt="Logo de Nike"
            className="w-[60%] object-cover rounded-xl"
          />
        </aside>
      </div>
    ),
  },
  {
    title: "The Beatles - Revolución Musical",
    slug: "the-beatles",
    audioHover: "/audio/Penny Lane Full.mp3",
    renderContent: ({ ref, tittleRef, descRef, imgContainerRef }) => (
      <div className="flex xl:flex-row flex-col mt-6">
        <aside className="xl:w-[55%]">
          <h3
            ref={tittleRef}
            className="text-5xl font-fustat font-extrabold text-primario-300 text-left mb-2 "
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
        <aside ref={imgContainerRef} className="flex xl:w-[45%] flex-col">
          <img
            src="/images/que-nos-inspira/vinyl.webp"
            alt="Vinilo de The Beatles"
            className="w-full h-full object-cover rounded-xl"
          />
        </aside>
      </div>
    ),
  },
  {
    title: "YSY y Duki - Movimiento Urbano",
    slug: "ysy-y-duki",
    audioHover: "/audio/Vuelta a la Luna cut.mp3",
    renderContent: ({ ref, tittleRef, descRef, imgContainerRef }) => (
      <div className="flex xl:flex-row flex-col mt-6">
        <aside className="xl:w-[70%]">
          <h3
            ref={tittleRef}
            className="text-5xl font-fustat font-extrabold text-primario-300 text-left mb-2 "
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
        <aside ref={imgContainerRef} className=" flex flex-col xl:w-[30%]">
          <img
            src="/images/que-nos-inspira/spotifyDukiYsy.webp"
            alt="YSY y Duki"
            className="w-full h-full object-cover rounded-xl"
          />
        </aside>
      </div>
    ),
  },
];
