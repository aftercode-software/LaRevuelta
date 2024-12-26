export default function HeroSections({
  url,
  emoji,
  tittle,
  tittleBold,
  desc,
}: {
  url: string;
  emoji: string;
  tittle: string;
  tittleBold: string;
  desc: string;
}) {
  return (
    <div className="relative w-full h-[45vh] mb-12 xl:h-[55vh] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${url}")`,
        }}
      ></div>

      <div className="absolute md:hidden inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-left justify-end h-[80%] px-6 md:px-12">
        <p className="text-3xl mb-3">{emoji}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fustat">
          {tittle}
          <span className="text-primario">{tittleBold}</span>
        </h2>
        <p className=" text-lg md:text-xl xl:max-w-[45%] font-geist">{desc}</p>
      </div>
    </div>
  );
}
