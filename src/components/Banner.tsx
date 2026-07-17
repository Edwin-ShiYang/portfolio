import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

interface BannerProps {
  className?: string;
}

const focusTags = ["Gameplay Systems", "Engine Tools", "React Interfaces"];

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <Container className={className}>
      <section className="relative grid min-h-[76vh] gap-10 py-12 md:grid-cols-[1.12fr_0.88fr] md:items-end md:py-20 lg:py-24">
        <div className="max-w-5xl space-y-8 md:pb-8">
          <div className="space-y-5">
            <p className="portfolio-kicker">
              Yang Shi (Edwin) / Gameplay Programmer
            </p>
            <h1 className="max-w-5xl portfolio-heading-xl">
              I build game systems that stay readable under pressure.
            </h1>
          </div>

          <div className="grid gap-7 lg:grid-cols-[0.78fr_1fr] lg:items-start">
            <p className="portfolio-body-lg">
              SMU Guildhall programmer focused on gameplay logic, engine-facing
              tools, animation previews, race flow, and production web systems.
            </p>

            <div className="space-y-5 border-t border-[#302d27] pt-5">
              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#302d27] px-3 py-1 text-xs font-semibold text-[#d6c6a8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/work-samples"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d6c6a8] px-5 py-3 text-sm font-semibold text-[#0b0d0e] transition hover:bg-[#f2efe8] active:translate-y-px"
                >
                  View case studies
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link
                  to="/work-samples/TGP2"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#302d27] px-5 py-3 text-sm font-semibold text-[#f2efe8] transition hover:border-[#d6c6a8]/60"
                >
                  Team projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] md:ml-auto">
          <div className="absolute -right-4 -top-5 h-24 w-32 border-t border-r border-[#d6c6a8]/35" />
          <div className="absolute -bottom-5 -left-4 h-28 w-28 border-b border-l border-[#8e9a91]/35" />
          <div className="relative overflow-hidden rounded-md bg-[#161513]">
            <img
              className="aspect-[4/5] w-full object-cover object-center brightness-[0.72] saturate-[0.72] contrast-[1.12]"
              src="YangShi.jpeg"
              alt="Yang Shi portrait"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d0e]/82 via-[#0b0d0e]/12 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-3 border-t border-white/12 pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
              <div>
                <p className="text-xs font-semibold text-[#d6c6a8]">
                  Current Focus
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-[#f2efe8]">
                  Gameplay / Tools / UI
                </p>
              </div>
              <p className="max-w-[11rem] text-xs leading-5 text-[#c9c1b2] sm:text-right">
                Systems built for iteration, handoff, and presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
