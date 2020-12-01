export const truncateStr = (str, words) => {
  if (typeof str !== "string") return;
  return str.split(" ").slice(0, words).join(" ") + "...";
};
