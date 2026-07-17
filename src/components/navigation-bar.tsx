import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const webComponents: { title: string; href: string; description: string }[] = [
  {
    title: "AnimView3D",
    href: "/work-samples/DFS",
    description:
      "Loads FBX files, builds static and skeletal meshes, and previews sampled animation.",
  },
  {
    title: "Library Management System",
    href: "/work-samples/library-management-system",
    description:
      "Authentication, inventory, borrowing, and fee payment workflows.",
  },
  {
    title: "Twitter Clone",
    href: "/work-samples/twitter-clone",
    description:
      "Posting, following, profiles, replies, and likes for a social web app.",
  },
  {
    title: "Real-time Chat Application",
    href: "/work-samples/real-time-chat-application",
    description:
      "Friend requests, accepted contacts, and live messaging workflows.",
  },
];

const gameComponents: { title: string; href: string; description: string }[] = [
  {
    title: "TGP1",
    href: "/work-samples/TGP1",
    description:
      "Unity platformer systems: checkpoints, enemy AI, player abilities, energy, and UI.",
  },
  {
    title: "TGP2 - Hamster Ballin'",
    href: "/work-samples/TGP2",
    description:
      "Unreal arcade racer systems: race position, grand prix flow, and live race UI.",
  },
];

const workOverview = [
  {
    title: "Timeline",
    href: "/work-samples",
    description: "All significant Guildhall and software work in one view.",
  },
  {
    title: "Individual work",
    href: "/work-samples/DFS",
    description: "AnimView3D and other personal engineering projects.",
  },
  {
    title: "Teamwork",
    href: "/work-samples/TGP2",
    description: "TGP I and TGP II team game projects.",
  },
];

interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className }: NavigationBarProps) {
  const navigate = useNavigate();

  return (
    <div className={cn("flex justify-center", className)}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Work</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[340px] gap-4 p-4 md:w-[720px] md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-2">
                  {workOverview.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      onClick={() => navigate(component.href)}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </div>

                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold text-[#d6c6a8]">
                      Individual
                    </p>
                    <div className="space-y-2">
                      {webComponents.slice(0, 2).map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          onClick={() => navigate(component.href)}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold text-[#d6c6a8]">
                      Team
                    </p>
                    <div className="space-y-2">
                      {gameComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          onClick={() => navigate(component.href)}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#11100e] focus:bg-[#11100e]",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none portfolio-text">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug portfolio-muted">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
