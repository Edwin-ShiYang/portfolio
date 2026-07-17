import { Github, Linkedin } from "lucide-react";
import Container from "../Container";

interface PersonalProps {
  className?: string;
}

const socials = [
  {
    href: "https://github.com/Edwin-ShiYang",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/yang-shi-2781b015b?trk=people-guest_people_search-card",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

const Personal: React.FC<PersonalProps> = ({ className }) => {
  return (
    <Container className={className}>
      <h2 className="portfolio-heading-lg mb-8 text-[#d6c6a8]" id="Personal">
        About Me
      </h2>

      <div className="max-w-3xl portfolio-body">
        <div className="space-y-5">
          <p>
            Hi, I'm{" "}
            <span className="font-semibold text-[#f2efe8]">
              Yang Shi (Edwin)
            </span>{" "}
            - a passionate developer with a love for crafting clean, performant
            software. My journey spans game development, full-stack web
            applications, and everything in between.
          </p>
          <p>
            I thrive on turning complex problems into elegant solutions. Whether
            it's architecting a backend API, designing intuitive UIs, or building
            game mechanics from scratch, I bring curiosity and care to every line
            of code.
          </p>
          <p>
            Outside of work I'm always exploring new technologies, creative
            projects, or just a good playlist.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-[#302d27] px-4 py-2 text-[#f2efe8] transition-colors hover:border-[#8e9a91] hover:text-[#d6c6a8]"
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="Yang_Shi_Resume.pdf"
              download="Yang_Shi_Resume.pdf"
              className="flex items-center gap-2 rounded-md border border-[#302d27] px-4 py-2 text-sm text-[#f2efe8] transition-colors hover:border-[#8e9a91] hover:text-[#d6c6a8]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Personal;
