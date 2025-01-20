export const getRandomValue = (size: number, percentage: number) => {
  const offset = (percentage / 100) * size;
  const minValue = size - offset;
  const maxValue = size + offset;

  return Math.random() * (maxValue - minValue) + minValue;
};
