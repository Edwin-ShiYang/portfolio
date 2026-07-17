import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

interface Skill {
  name: string;
  color: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  details: string[];
  duration: string;
  skills: Skill[];
}

const Timeline = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://portfolio-3b344-default-rtdb.firebaseio.com/experience.json"
        );
        const data = await res.json();
        setExperience(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {!loading && (
        <VerticalTimeline>
          {experience?.map((item: ExperienceItem, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{}}
              contentArrowStyle={{
                borderRight: "7px solid #161513",
              }}
              date={item.duration}
              iconStyle={{}}
            >
              <h3 className="vertical-timeline-element-title">
                {item?.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.title}
              </h4>

              <ul className="mt-4">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="before:content-['\2022'] before:mr-1 text-xs mb-2"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 mt-4">
                {item.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs px-[8px] py-[2px] rounded-full"
                    style={{ backgroundColor: skill.color }}
                  >
                    #{skill.name}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </>
  );
};

export default Timeline;
