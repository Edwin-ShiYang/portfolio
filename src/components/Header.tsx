import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Drawer from "./drawer";
import { NavigationBar } from "./navigation-bar";
import { FileText, Github, Linkedin } from "lucide-react";

const links = ["Home", "Work", "Education", "About", "Contact"];

const Header = () => {
  const navigate = useNavigate();

  const formatLink = (link: string) => {
    switch (link) {
      case "Home":
        return "/";
      case "Work":
        return "/work-samples";
      case "Education":
        return "/educations";
      case "About":
        return "/personal";
      default:
        return `/${link.toLocaleLowerCase()}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#302d27]/80 bg-[#0b0d0e]/88 backdrop-blur-xl">
      <div className="mx-auto grid h-[78px] max-w-[1400px] grid-cols-[1fr_auto] items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex min-w-0 items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 whitespace-nowrap text-left"
            aria-label="Go to home page"
          >
            <span className="text-2xl font-extrabold tracking-widest text-[#f2efe8] transition-colors group-hover:text-[#d6c6a8] md:text-3xl">
              {"<YS />"}
            </span>
            <span className="hidden border-l border-[#302d27] pl-4 2xl:block">
              <span className="block text-sm font-semibold leading-none text-[#f2efe8]">
                Yang Shi
              </span>
              <span className="mt-1 block text-xs leading-none text-[#8e9a91]">
                Gameplay Programmer / Software Developer
              </span>
            </span>
          </button>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavigationBar />

          {links.slice(2).map((link) => (
            <Button
              key={link}
              className="h-9 rounded-full px-4 text-[#b8b1a4] hover:text-[#f2efe8]"
              variant="link"
              onClick={() => navigate(formatLink(link))}
            >
              {link}
            </Button>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <a
            href="https://github.com/Edwin-ShiYang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#302d27] text-[#8e9a91] transition-colors hover:border-[#d6c6a8]/55 hover:text-[#f2efe8]"
            aria-label="GitHub"
          >
            <Github aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/yang-shi-2781b015b?trk=people-guest_people_search-card"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#302d27] text-[#8e9a91] transition-colors hover:border-[#d6c6a8]/55 hover:text-[#f2efe8]"
            aria-label="LinkedIn"
          >
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href="Yang_Shi_Resume.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#d6c6a8] px-4 text-sm font-semibold text-[#0b0d0e] transition hover:bg-[#f2efe8] active:translate-y-px"
          >
            <FileText aria-hidden="true" className="h-4 w-4" />
            Resume
          </a>
        </div>

        <Drawer links={links} formatLink={formatLink} />
      </div>
    </header>
  );
};

export default Header;
