import Container from "../Container";

interface ContactProps {
  className?: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="md:flex md:justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="gradient_text font-bold text-[32px]" id="Contact">
            Get in touch
          </h2>

          <div>
            <p className="mt-10">
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48
              hours.
            </p>

            <div className="flex gap-2 mt-10 mb-5 justify-center md:justify-start">
              <img src="email.png" alt="email..." width={25} height={25} />
              <p>edwinshi.work@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-white mt-[80px]"></div>
      <p className="mt-2">© Design by Yang Shi (Edwin)</p>
    </Container>
  );
};

export default Contact;
