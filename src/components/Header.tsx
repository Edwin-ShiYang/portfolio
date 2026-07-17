import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Drawer from "./drawer";
import { NavigationBar } from "./navigation-bar";

const links = [
  "Home",
  "Timeline",
  "Skills",
  "Education",
  "Personal",
  "Contact",
];

const Header = () => {
  const navigate = useNavigate();

  const formatLink = (link: string) => {
    switch (link) {
      case "Home":
        return "/";
      case "Timeline":
        return "/work-samples";
      case "Education":
        return "/educations";
      default:
        return `/${link.toLocaleLowerCase()}`;
    }
  };

  return (
    <div className="sticky top-0 z-40 border-b bg-zinc-950">
      <div className="flex items-center justify-center py-5 ">
        <div className="flex-1">
          <span className="font-extrabold text-2xl md:text-3xl tracking-widest whitespace-nowrap gradient_text cursor-pointer hover:opacity-80 transition-opacity">
            {"<YS />"}
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <Button
                key={link}
                className="w-full"
                variant="link"
                onClick={() => navigate(formatLink(link))}
              >
                {link}
              </Button>
            ))}
          </ul>
        </nav>

        <Drawer links={links} formatLink={formatLink} />
      </div>

      <NavigationBar />
    </div>
  );
};

export default Header;
