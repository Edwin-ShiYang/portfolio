import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredWork = [
  {
    group: "Individual Work",
    title: "AnimView3D",
    href: "/work-samples/DFS",
    image: "dfs/Screenshot 2026-07-16 185749.png",
    description:
      "Loaded FBX assets, constructed static and skeletal meshes, and previewed sampled animation in a custom C++ viewer.",
  },
  {
    group: "Teamwork",
    title: "TGP1 - Kill the Makers",
    href: "/work-samples/TGP1",
    image: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_07.png",
    description:
      "Built checkpoint, enemy AI, player ability, energy, and UI systems for a Unity platformer.",
  },
  {
    group: "Teamwork",
    title: "TGP2 - Hamster Ballin'",
    href: "/work-samples/TGP2",
    image: "tgp2/tgp2.png",
    description:
      "Implemented race position tracking, grand prix flow, and race UI for an Unreal arcade racer.",
  },
  {
    group: "Web Systems",
    title: "Library Management System",
    href: "/work-samples/library-management-system",
    image: "lms/preview.png",
    description:
      "Built authentication, inventory, borrowing, and fee payment workflows.",
  },
  {
    group: "Web Systems",
    title: "Twitter Clone",
    href: "/work-samples/twitter-clone",
    image: "tc/preview.png",
    description:
      "Built posting, following, profiles, replies, and likes for a social web app.",
  },
  {
    group: "Web Systems",
    title: "Real-time Chat Application",
    href: "/work-samples/real-time-chat-application",
    image: "rca/preview.png",
    description:
      "Built friend requests, accepted contacts, and live messaging workflows.",
  },
];

const [leadProject, ...supportProjects] = featuredWork;
const gameProjects = supportProjects.slice(0, 2);
const webProjects = supportProjects.slice(2);

const HomeSections = () => {
  return (
    <>
      <section className="mt-28">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.48fr_0.52fr] md:items-end">
          <div>
            <p className="portfolio-kicker">Selected case studies</p>
            <h2 className="mt-3 portfolio-heading-lg">Featured Work</h2>
          </div>
          <div className="max-w-2xl md:justify-self-end">
            <p className="portfolio-body">
              Game and software projects ordered for recruiters: Guildhall work
              first, team games next, web systems after the core game work.
            </p>
            <Link
              to="/work-samples"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d6c6a8] transition hover:text-[#f2efe8]"
            >
              View full timeline
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Link
          to={leadProject.href}
          className="group grid overflow-hidden border-y border-[#302d27] py-8 transition hover:border-[#d6c6a8]/55 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-[#11100e] lg:order-2">
            <img
              src={leadProject.image}
              alt={leadProject.title}
              className="h-full w-full object-cover brightness-[0.72] saturate-[0.78] contrast-[1.08] transition duration-700 group-hover:scale-[1.025] group-hover:brightness-[0.84]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#0b0d0e]/18 transition group-hover:bg-[#0b0d0e]/5" />
          </div>

          <div className="space-y-5 pt-7 lg:pr-12 lg:pt-0">
            <p className="text-sm font-semibold text-[#d6c6a8]">
              {leadProject.group}
            </p>
            <h3 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#f2efe8] md:text-5xl">
              {leadProject.title}
            </h3>
            <p className="max-w-2xl text-base leading-8 text-[#c9c1b2]">
              {leadProject.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#f2efe8]">
              Open project
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {gameProjects.map((project) => (
            <Link
              key={project.title}
              to={project.href}
              className="group border-t border-[#302d27] pt-5 transition hover:border-[#d6c6a8]/55"
            >
              <div className="relative aspect-video overflow-hidden bg-[#11100e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover brightness-[0.72] saturate-[0.78] contrast-[1.08] transition duration-700 group-hover:scale-[1.025] group-hover:brightness-[0.84]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#0b0d0e]/18 transition group-hover:bg-[#0b0d0e]/5" />
              </div>
              <div className="mt-5 space-y-3">
                <p className="text-sm font-semibold text-[#d6c6a8]">
                  {project.group}
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-[#f2efe8]">
                  {project.title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-[#b8b1a4]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 border-t border-[#302d27]">
          {webProjects.map((project) => (
            <Link
              key={project.title}
              to={project.href}
              className="group grid gap-4 border-b border-[#302d27] py-5 transition hover:border-[#d6c6a8]/55 md:grid-cols-[0.28fr_0.72fr] md:items-center"
            >
              <p className="text-sm font-semibold text-[#8e9a91]">
                {project.group}
              </p>
              <div className="grid gap-4 md:grid-cols-[0.42fr_0.58fr] md:items-center">
                <h3 className="text-xl font-semibold leading-tight text-[#f2efe8]">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-[#b8b1a4]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24 border-y border-[#302d27] py-14">
        <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-start">
          <div>
            <p className="portfolio-kicker">About Edwin</p>
            <h2 className="mt-3 portfolio-heading-md">
              Systems thinking, built for teams.
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-base leading-8 text-[#c9c1b2]">
            <p>
              I like building systems that make games easier to reason about:
              race state, enemy behavior, checkpoints, animation playback, and
              UI that reflects live gameplay clearly.
            </p>
            <p>
              My Guildhall work sits between gameplay programming and tooling.
              I care about clean implementation, readable team handoff, and
              features that can survive iteration.
            </p>
            <Link
              to="/personal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d6c6a8] transition hover:text-[#f2efe8]"
            >
              More about me
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
