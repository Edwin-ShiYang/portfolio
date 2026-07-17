import Container from "../Container";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="md:flex md:justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="portfolio-heading-lg text-[#d6c6a8]" id="Contact">
            Get in touch
          </h2>

          <div>
            <p className="mt-6 max-w-xl portfolio-body">
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48
              hours.
            </p>

            <div className="flex gap-3 mt-8 mb-5 justify-center md:justify-start text-base font-medium text-[#f2efe8]">
              <img src="email.png" alt="email..." width={25} height={25} />
              <p>edwinshi.work@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
