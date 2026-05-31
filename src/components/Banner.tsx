import { useEffect } from "react";
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
      <div className="mb-10">
        <img
          className="rounded-2xl mx-auto w-[150px] h-[200px]"
          src="YangShi.jpeg"
          alt="avatar..."
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold">
          <TypewriterEffect words={words} />
        </h1>

        <div className="text-center my-5">
          Game Developer | Software Developer | Full Stack Developer
        </div>

        <p className="max-w-5xl">
          &nbsp;&nbsp;Highly skilled developer with a robust background in
          computer science and extensive full stack development experience,
          including React, Nodejs, and SQL databases. Proven track record of
          managing complex projects and delivering high-quality solutions.
          Strong problem-solving, collaborations, and communication skills.
          Seeking to leverage technical expertise and an innovative approach in
          a challenging development role to drive technological advancements and
          contribute to career growth.
        </p>

        <div className="flex gap-5 item-center mt-8 justify-center md:justify-start">
          <div className="flex item-center gap-3">
            <img src="position.png" alt="position..." width={20} height={20} />
            <span>Earth</span>
          </div>
          {/* <IconButton
            url={"https://www.linkedin.com/in/yang-shi-2781b015b/"}
            title={"linkedin"}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Banner;
