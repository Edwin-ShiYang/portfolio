import { motion } from "framer-motion";
import Personal from "../components/Personal/Personal";

const PersonalPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      exit={{ opacity: 1 }}
    >
      <Personal />
    </motion.div>
  );
};

export default PersonalPage;
