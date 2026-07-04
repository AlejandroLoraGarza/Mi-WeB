export const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "120%" : "-120%",
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? "-120%" : "120%",
    opacity: 0,
  }),
};