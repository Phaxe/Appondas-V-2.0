export const headingVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      transition: 0.5,
      duration: 0.6,
    },
  },
  hidden: {
    y: -30,
    opacity: 0,
  },
};

export const cardText = {
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1.3,
          transition: 0.5,
          duration: 0.6,
        },
      },
      hidden: {
        scale:0.5,
        opacity: 0,
      },
}

export const serviceImageVariant = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.8,
      duration: 0.7,
    },
  },
};

export const serviceImageVariantX = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    once: true,
    transition: {
      type: "spring",
      delay: 0.8,
      duration: 1,
    },
  },
};
