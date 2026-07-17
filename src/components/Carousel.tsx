import Marquee from "react-fast-marquee";

const skills_set1 = [
  "c++",
  "csharp",
  "unreal",
  "git",
  "docker",
  "typescript",
  "react",
];

const skills_set2 = [
  "javascript",
  "next",
  "node",
  "express",
  "mysql",
  "mongodb",
  "firebase",
  "tailwindcss",
];

const Carousel = () => {
  return (
    <section className="overflow-hidden border-y border-[#302d27] py-7">
      <div className="grid gap-6 md:grid-cols-[0.36fr_0.64fr] md:items-center">
        <div>
          <h2 className="text-xl font-semibold leading-tight text-[#f2efe8]">
            Technical stack
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#b8b1a4]">
            Engine, gameplay, tools, and web technologies used across the work.
          </p>
        </div>

        <div className="relative space-y-3 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0d0e] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0d0e] to-transparent" />

          <Marquee direction="right" pauseOnHover speed={18} autoFill>
            {skills_set1.map((logo) => (
              <img
                key={logo}
                className="mx-5 my-1 h-8 w-8 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10 md:w-10"
                src={`${logo}.png`}
                alt={logo}
              />
            ))}
          </Marquee>

          <Marquee direction="left" pauseOnHover speed={18} autoFill>
            {skills_set2.map((logo) => (
              <img
                key={logo}
                className="mx-5 my-1 h-8 w-8 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10 md:w-10"
                src={`${logo}.png`}
                alt={logo}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
