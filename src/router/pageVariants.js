export const pageVariants = {
  enter: (direction) => ({
    x: direction > 0
      ? ["120%", "120%", "0%", "0%"]
      : ["-120%", "-120%", "0%", "0%"],
    // y: [-8, -8, -8, 0],
    scale: [0.9, 0.9, 0.9, 1],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.7, 1],
      ease: "easeInOut",
    },
  }),

  center: {
    x: 0,
    scale: 1,
    opacity: 1,
  },

  exit: (direction) => ({
    x: direction > 0
      ? ["0%", "0%", "-120%"]
      : ["0%", "0%", "120%"],
    // y: [0, -8, -8],
    scale: [1, 0.9, 0.9],
    transition: {
      duration: 0.5,
      times: [0, 0.35, 1],
      ease: "easeInOut",
    },
  }),
};