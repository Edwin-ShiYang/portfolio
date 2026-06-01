import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Drawer from "./drawer";
import { NavigationBar } from "./navigation-bar";

const links = ["Home", "Work Samples", "Skills", "Educations", "Personal", "Contact"];

const Header = () => {
  const navigate = useNavigate();

  const formatLink = (link: string) => {
    switch (link) {
      case "Home":
        return "/";
      case "Work Samples":
        return "/work-samples";
      default:
        return `/${link.toLocaleLowerCase()}`;
    }
  };

  return (
    <div className="sticky top-0 z-40 border-b bg-zinc-950">
      <div className="flex items-center justify-center py-5 ">
        <div className="flex-1">
          <span className="font-bold text-xl tracking-widest whitespace-nowrap gradient_text">
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
