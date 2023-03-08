const MS_PER_DAY = 24 * 60 * 60 * 1000;

const compareDates = (a: Date, b: Date, ignoreTime = true): number => {
  if (ignoreTime) {
    a.setHours(0, 0, 0, 0);
    b.setHours(0, 0, 0, 0);
  }
  const diffInMs = a.getTime() - b.getTime();
  return Math.round(diffInMs / MS_PER_DAY);
};

export { compareDates, MS_PER_DAY };
