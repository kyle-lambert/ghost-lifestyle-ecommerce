export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInCard = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      // delay: 0.4,
      duration: 0.3,
      // ease: "easeIn",
    },
  },
};
