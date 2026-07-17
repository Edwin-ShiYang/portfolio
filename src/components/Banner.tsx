import { useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import Container from "./Container";
import { TypewriterEffect } from "./ui/typewriter-effect";

interface BannerProps {
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ className }) => {
  const words = [
    {
      text: " Hello,",
    },
    {
      text: "I'm",
    },
    {
      text: "Yang",
    },
    {
      text: "Shi",
    },
    {
      text: "(Edwin)",
    },
  ];

  useEffect(() => {
    const controller = new AbortController();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container className={className}>
      <div className="mb-12 md:mb-16">
        <img
          className="rounded-2xl mx-auto w-[150px] h-[200px]"
          src="YangShi.jpeg"
          alt="avatar..."
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold mb-6 md:mb-8">
          <TypewriterEffect words={words} />
        </h1>

        <div className="text-center my-10 md:my-12">
          <div className="text-xl md:text-2xl font-semibold tracking-wide">
            Game Developer | Software Developer | Full Stack Developer
          </div>
        </div>

        <div className="max-w-3xl text-center mb-6 md:mb-8">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
            Highly skilled developer with a robust background in computer science and extensive full stack development experience, including React, Node.js, and SQL databases. Proven track record of managing complex projects and delivering high-quality solutions.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Strong problem-solving, collaboration, and communication skills. Seeking to leverage technical expertise and an innovative approach in a challenging development role to drive technological advancements and contribute to career growth.
          </p>
        </div>

        <div className="flex gap-5 items-center mt-10 md:mt-12 justify-center md:justify-start">
          <div className="flex items-center gap-3">
            <img src="position.png" alt="position..." width={20} height={20} />
            <span>Earth</span>
          </div>
          <a 
            href="https://github.com/Edwin-ShiYang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            title="GitHub"
          >
            <Github aria-hidden="true" className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/yang-shi-2781b015b?trk=people-guest_people_search-card" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            title="LinkedIn"
          >
            <Linkedin aria-hidden="true" className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
