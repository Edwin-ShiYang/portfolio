import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { FileText, Github, Linkedin, Menu } from "lucide-react";

interface DrawerProps {
  links: string[];
  formatLink: (link: string) => string;
}

const Drawer: React.FC<DrawerProps> = ({ links, formatLink }) => {
  const navigate = useNavigate();

  return (
    <div className="z-[10] lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" aria-label="Open navigation menu">
            <Menu aria-hidden="true" className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <div className="mt-8 space-y-8">
            <div>
              <p className="text-lg font-semibold text-[#f2efe8]">
                Yang Shi
              </p>
              <p className="mt-1 text-sm leading-6 text-[#b8b1a4]">
                Gameplay Programmer / Software Developer
              </p>
            </div>

            <div className="space-y-2">
              <SheetClose asChild>
                <Button
                  className="w-full justify-start"
                  variant="ghost"
                  onClick={() => navigate("/work-samples/DFS")}
                >
                  Individual work
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  className="w-full justify-start"
                  variant="ghost"
                  onClick={() => navigate("/work-samples/TGP2")}
                >
                  Teamwork
                </Button>
              </SheetClose>
            </div>

            <div className="space-y-2">
            {links.map((link) => (
              <SheetClose asChild key={link}>
                <Button
                  className="w-full justify-start"
                  variant="ghost"
                  onClick={() => navigate(formatLink(link))}
                >
                  {link}
                </Button>
              </SheetClose>
            ))}
            </div>

            <div className="border-t border-[#302d27] pt-6">
              <a
                href="Yang_Shi_Resume.pdf"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#d6c6a8] px-4 text-sm font-semibold text-[#0b0d0e] transition hover:bg-[#f2efe8]"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                Resume
              </a>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Edwin-ShiYang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#302d27] text-sm text-[#b8b1a4] transition hover:border-[#8e9a91] hover:text-[#f2efe8]"
                >
                  <Github aria-hidden="true" className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yang-shi-2781b015b?trk=people-guest_people_search-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#302d27] text-sm text-[#b8b1a4] transition hover:border-[#8e9a91] hover:text-[#f2efe8]"
                >
                  <Linkedin aria-hidden="true" className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Drawer;
