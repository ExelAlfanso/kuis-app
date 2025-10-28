export const hoverFloat = {
  whileHover: {
    y: -8,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 10,
    },
  },
  whileTap: { scale: 0.95 },
};
export default hoverFloat;
