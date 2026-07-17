import SkillCardProps from "./type";

const SkillCard: React.FC<SkillCardProps> = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-10 w-10 md:h-14 md:w-14 object-contain"
        src={imgUrl}
        alt={`${title}...`}
        width={70}
        height={70}
      />
      <p className="text-[#f2efe8] text-xs md:text-sm mt-2">{title}</p>
    </div>
  );
};

export default SkillCard;
