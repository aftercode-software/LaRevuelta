import Container from "./Container";

export default function HeroSections({
  url,
  emoji,
  title,
  titleBold,
  title,
  titleBold,
  desc,
}: {
  url: string;
  emoji: string;
  title?: string;
  titleBold?: string;
  desc: string;
}) {
  return (
    <div className="relative w-full h-[45vh] xl:mb-2 xl:h-[50vh] mt-[8dvh] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${url}")`,
        }}
      ></div>

      <div className="absolute md:hidden inset-0 bg-black/60"></div>

      <Container className="relative z-10 flex flex-col items-left justify-end h-[80%]">
        <p className="text-3xl mb-3">{emoji}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fustat">
          {title && title}
          <span className="text-primario">{titleBold && titleBold}</span>
        </h2>
        <p className="text-lg md:text-xl xl:max-w-[45%] font-geist">{desc}</p>
      </Container>
    </div>
  );
}
