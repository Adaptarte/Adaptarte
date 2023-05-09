type TFontSize = 1 | 2 | 3 | 4 | 5;

const sizes: Record<TFontSize, number> = {
  1: 14,
  2: 16,
  3: 18,
  4: 22,
  5: 26
};

const font = { sizes };

export type { TFontSize };
export { font };
