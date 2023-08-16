const noEmpty = (...values: string[]): boolean => {
  return values.some((el) => el.length === 0);
};

const noNaN = (...values: string[]): boolean => {
  return values.some((el) => isNaN(parseFloat(el)));
};

export { noEmpty, noNaN };
