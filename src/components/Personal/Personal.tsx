import Container from "../Container";

interface PersonalProps {
  className?: string;
}

const socials = [
  {
    href: "https://github.com/EdWIN1021",
    icon: "github.png",
    label: "GitHub",
    fallbackText: "GH",
  },
  {
    href: "https://www.linkedin.com/in/yang-shi-2781b015b/",
    icon: "linkedin.png",
    label: "LinkedIn",
    fallbackText: "LI",
  },
];

const Personal: React.FC<PersonalProps> = ({ className }) => {
  return (
    <Container className={className}>
      <h2 className="gradient_text font-bold text-[32px] mb-8" id="Personal">
        About Me
      </h2>

      <div className="space-y-6 max-w-2xl">
        <div className="space-y-6">
          <p className="leading-relaxed">
            Hi, I'm <span className="font-semibold text-white">Yang Shi (Edwin)</span> — a
            passionate developer with a love for crafting clean, performant software. My
            journey spans game development, full-stack web applications, and everything in
            between.
          </p>
          <p className="leading-relaxed">
            I thrive on turning complex problems into elegant solutions. Whether it's
            architecting a backend API, designing intuitive UIs, or building game mechanics
            from scratch, I bring curiosity and care to every line of code.
          </p>
          <p className="leading-relaxed">
            Outside of work I'm always exploring — new technologies, creative projects, or
            just a good playlist.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-400 transition-colors"
              >
                <img
                  src={s.icon}
                  alt={s.label}
                  width={20}
                  height={20}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-sm">{s.label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="resume.pdf"
              download="YangShi-Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-400 transition-colors text-sm"
            >
              <span>📄</span>
              Resume
            </a>
            <a
              href="cover-letter.pdf"
              download="YangShi-CoverLetter.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-400 transition-colors text-sm"
            >
              <span>📝</span>
              Cover Letter
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Personal;
