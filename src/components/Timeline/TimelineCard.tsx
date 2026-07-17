import TimelineCardProps from "./type";

const TimelineCard: React.FC<TimelineCardProps> = ({
  position,
  company,
  title,
  duration,
  details,
  skills,
}) => {
  return (
    <div className={`${position}`}>
      <div className="lg:max-w-[450px] p-6 bg-[#161513] mt-5">
        <h3>{company}</h3>

        <div className="flex text-xs text-[#c9c1b2] font-light">
          <p className="flex-1">{title}</p>
          <p>{duration}</p>
        </div>

        <ul className="mt-4">
          {details.map((detail) => (
            <li
              key={detail}
              className="before:content-['\2022'] before:mr-1 text-xs mb-2"
            >
              {detail}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mt-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="text-xs px-[8px] py-[2px] rounded-full"
              style={{ backgroundColor: skill.color }}
            >
              #{skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
