import { FileText, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Timeline", href: "/work-samples" },
  { label: "Personal", href: "/personal" },
  { label: "Education", href: "/educations" },
  { label: "Contact", href: "/contact" },
];

const professionalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Edwin-ShiYang",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yang-shi-2781b015b?trk=people-guest_people_search-card",
    Icon: Linkedin,
  },
  {
    label: "Resume",
    href: "Yang_Shi_Resume.pdf",
    Icon: FileText,
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t portfolio-border bg-[#0b0d0e]">
      <div className="grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <Link
            to="/"
            className="inline-block text-2xl font-extrabold tracking-widest portfolio-text transition-colors hover:text-[#d6c6a8]"
          >
            {"<YS />"}
          </Link>
          <p className="max-w-md text-sm leading-6 portfolio-muted">
            Yang Shi (Edwin), game developer and software developer focused on
            gameplay systems, engine tools, and full-stack applications.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="space-y-3">
          <h2 className="text-sm font-semibold portfolio-text">Explore</h2>
          <div className="flex flex-col items-start gap-2 text-sm portfolio-muted">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="transition-colors hover:text-[#d6c6a8]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold portfolio-text">Professional</h2>
          <div className="flex flex-col items-start gap-2 text-sm portfolio-muted">
            {professionalLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Resume" ? undefined : "_blank"}
                rel={label === "Resume" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 transition-colors hover:text-[#d6c6a8]"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#302d27] py-4 text-sm text-[#8e9a91]">
        &copy; 2026 Yang Shi. Built with React and TypeScript.
      </div>
    </footer>
  );
};

export default Footer;
