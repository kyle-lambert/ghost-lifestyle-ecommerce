export const truncateStr = (str, words) => {
  if (typeof str !== "string") return;
  return str.split(" ").slice(0, words).join(" ") + "...";
};

export const generateURL = (product) => {
  const { flavours } = product;
  if (Array.isArray(flavours) && flavours.length > 0) {
    return "http://localhost:1337" + flavours[0].image.url;
  }
  return null;
};