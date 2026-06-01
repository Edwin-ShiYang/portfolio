import EducationCard from "./EducationCard";
import Container from "../Container";
import Heading from "../Heading";

interface EducationsProps {
  className?: string;
}

const Educations: React.FC<EducationsProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Heading title={"Education"} />
      <div className="text-center md:text-left md:flex">
        <div className="my-5 basis-1/2 md:mr-2">
          <h3 className="text-4xl whitespace-nowrap">
            Southern Methodist University
          </h3>
          <div className="my-5">
            <p></p>
            <p className="whitespace-nowrap">
              Digital Game Development with specialization in Programming
            </p>
            <p></p>
            <p>2025 - present</p>
          </div>

          <div className="flex item-center gap-3 justify-center md:justify-start">
            <img src="position.png" alt="position..." width={20} height={20} />
            <span>Dallas, Texas, United States</span>
          </div>
        </div>
        <div className="my-5 basis-1/2 md:mr-2">
          <h3 className="text-4xl whitespace-nowrap">Algoma University</h3>

          <div className="my-5">
            <p>Bachelor’s degree</p>
            <p className="whitespace-nowrap">
              Science Specialized Computer Science (Honours)
            </p>
            <p>Cum Laude</p>
            <p>2015 - 2019</p>
          </div>

          <div className="flex item-center gap-3 justify-center md:justify-start">
            <img src="position.png" alt="position..." width={20} height={20} />
            <span>Sault Ste. Marie, Canada</span>
          </div>
        </div>
        {/* <div className="basis-1/2">
          <img
            src="https://algomau.ca/wp-content/uploads/2018/11/6.3-Our-Campuses-Overview-SSM-Header-1.jpg"
            alt="..."
            className="w-full h-full"
          />
        </div> */}
      </div>
    </Container>
  );
};

export default Educations;
