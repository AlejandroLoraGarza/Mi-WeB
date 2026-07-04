import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "../router/pageVariants";

function Page({ children, direction }) {
  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Page;