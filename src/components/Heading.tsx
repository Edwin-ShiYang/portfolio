interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className="portfolio-heading-lg text-center md:text-left" id={title}>
      <span className="text-[#d6c6a8]">{title}</span>
    </h2>
  );
};

export default Heading;
