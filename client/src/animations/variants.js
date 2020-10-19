export const cartBackdrop = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const cartSlideInFromRight = {
  initial: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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
      duration: 0.3,
    },
  },
};
