import { AnimatePresence, motion } from "framer-motion";

function Page({ children }) {
  return (
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: "-100%",
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Page;