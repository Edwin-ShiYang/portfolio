import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import HomeSections from "../components/HomeSections";
import RecruiterSnapshot from "../components/RecruiterSnapshot";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      exit={{ opacity: 1 }}
    >
      <Banner />
      <RecruiterSnapshot />
      <div className="mt-14">
        <Carousel />
      </div>
      <HomeSections />
    </motion.div>
  );
};

export default HomePage;
