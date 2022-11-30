type TColor = "BLACK" | 
  "BLUE" |
  "BLUE_PURPLE" |
  "BLUE_TRANSLUCID" | 
  "GLAUCOUS" |
  "GREEN" | 
  "GREEN_TRANSLUCID" | 
  "LIGHT" | 
  "ORANGE" | 
  "ORANGE_TRANSLUCID" | 
  "PURPLE" | 
  "PURPLE_TRANSLUCID" | 
  "WHITE" |
  "YELLOW";

const colors: Record<TColor, string> = {
  BLACK: "#000",
  BLUE: "#28779B",
  BLUE_PURPLE: "#9FA4EE",
  BLUE_TRANSLUCID: "#28774D",
  GLAUCOUS: "#6682D7",
  GREEN: "#28AD46",
  GREEN_TRANSLUCID: "#28AD464D",
  LIGHT: "#E5E5E5",
  ORANGE: "#E16926",
  ORANGE_TRANSLUCID: "#E169264D",
  PURPLE: "#9B28AD",
  PURPLE_TRANSLUCID: "#9B28AD4D",
  WHITE: "#FFF",
  YELLOW: "#FFEFCA",
};

export { colors };
export type { TColor };
