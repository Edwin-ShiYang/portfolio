import { useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Button } from "./ui/button";
const projects = [
  {
    id: 1,
    date: "2026/05",
    title: "DFS",
    imgSrc: "dfs/preview.png",
    iconSrc: "c++.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    to: "/work-samples/DFS",
  },
  {
    id: 2,
    date: "2023/05",
    title: "Library Management System",
    imgSrc: "lms/preview.png",
    iconSrc: "next.png",
    description:
      "Developed a comprehensive Library Management System to manage library operations efficiently. The system includes features for user authentication, book transactions, inventory management, and fee processing.",
    to: "/work-samples/library-management-system",
  },
  {
    id: 3,
    date: "2024/01",
    title: "Twitter Clone",
    imgSrc: "tc/preview.png",
    iconSrc: "react.png",
    description:
      " This project is a full-stack web application that replicates the core functionalities of Twitter, including user authentication, posting tweets, following users, and real-time updates.",
    to: "/work-samples/twitter-clone",
  },
  {
    id: 4,
    date: "2019/11",
    title: "Real-time Chat Application",
    imgSrc: "rca/preview.png",
    iconSrc: "next.png",
    description:
      "My project focuses on developing a real-time chat application designed to enhance user interaction through instant messaging capabilities. This application aims to provide a seamless experience for users, whether for personal conversations or professional collaborations.",
    to: "/work-samples/real-time-chat-application",
  },
];

const WorkSamples = () => {
  const navigate = useNavigate();

  return (
    <>
      <VerticalTimeline>
        {projects.map((project) => (
          <VerticalTimelineElement
            key={project?.title}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1c1c22", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #1c1c22",
            }}
            date={project?.date}
            iconStyle={{
              background: "#1c1c22",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
            }}
            icon={<img className="rounded-full" src={project.iconSrc} />}
          >
            <div>
              <div className="py-5">
                <img src={project?.imgSrc} alt="..." />
              </div>

              <h3 className="vertical-timeline-element-title text-xl gradient_text">
                {project?.title}
              </h3>

              <p>{project.description}</p>

              <Button
                className="mt-5"
                onClick={() => navigate(`${project?.to}`)}
              >
                read more
              </Button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default WorkSamples;
