export const generateRandomNumberWithLimit = (limit: number) => {
  return Math.floor(Math.random() * (limit || 10));
};
