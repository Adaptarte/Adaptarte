type TColor =
  | "BLACK"
  | "BLACK_OPACITY"
  | "BLUE"
  | "BLUE_PURPLE"
  | "BLUE_TRANSLUCID"
  | "GLAUCOUS"
  | "GREEN"
  | "GREEN_TRANSLUCID"
  | "GREY"
  | "LIGHT"
  | "ORANGE"
  | "ORANGE_TRANSLUCID"
  | "PURPLE"
  | "PURPLE_TRANSLUCID"
  | "TRANSPARENT"
  | "WHITE"
  | "YELLOW";

const colors: Record<TColor, string> = {
  BLACK: "#575757",
  BLACK_OPACITY: "#5757574D",
  BLUE: "#28779B",
  BLUE_PURPLE: "#9FA4EE",
  BLUE_TRANSLUCID: "#28779C4D",
  GLAUCOUS: "#6682D7",
  GREEN: "#28AD46",
  GREEN_TRANSLUCID: "#28AD464D",
  GREY: "#CACACA",
  LIGHT: "#EDEEFF",
  ORANGE: "#E16926",
  ORANGE_TRANSLUCID: "#E169264D",
  PURPLE: "#9B28AD",
  PURPLE_TRANSLUCID: "#9B28AD4D",
  TRANSPARENT: "#FFF0",
  WHITE: "#FFF",
  YELLOW: "#FFEFCA"
};

export { colors };
export type { TColor };
