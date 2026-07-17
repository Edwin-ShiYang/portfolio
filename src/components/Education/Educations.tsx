import Container from "../Container";
import Heading from "../Heading";

interface EducationsProps {
  className?: string;
}

const Educations: React.FC<EducationsProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Heading title="Education" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border portfolio-border portfolio-panel p-6 md:p-7">
          <h3 className="portfolio-heading-md">
            Southern Methodist University
          </h3>
          <div className="my-5 space-y-2 portfolio-body">
            <p>
              Digital Game Development with specialization in Programming
            </p>
            <p>2025 - present</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#f2efe8]">
            <img src="position.png" alt="Location" width={20} height={20} />
            <span>Dallas, Texas, United States</span>
          </div>
        </div>

        <div className="rounded-lg border portfolio-border portfolio-panel p-6 md:p-7">
          <h3 className="portfolio-heading-md">Algoma University</h3>

          <div className="my-5 space-y-2 portfolio-body">
            <p>Bachelor's degree</p>
            <p>Science Specialized Computer Science (Honours)</p>
            <p>Cum Laude</p>
            <p>2015 - 2019</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#f2efe8]">
            <img src="position.png" alt="Location" width={20} height={20} />
            <span>Sault Ste. Marie, Canada</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Educations;
