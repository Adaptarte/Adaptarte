type TColor = "BLACK" | 
  "BLUE" | 
  "BLUE_TRANSLUCID" | 
  "GREEN" | 
  "GREEN_TRANSLUCID" | 
  "LIGHT" | 
  "ORANGE" | 
  "ORANGE_TRANSLUCID" | 
  "PURPLE" | 
  "PURPLE_TRANSLUCID" | 
  "WHITE";

const colors: Record<TColor, string> = {
  BLACK: "#000",
  BLUE: "#28779B",
  BLUE_TRANSLUCID: "#28774D",
  GREEN: "#28AD46",
  GREEN_TRANSLUCID: "#28AD464D",
  LIGHT: "#E5E5E5",
  ORANGE: "#E16926",
  ORANGE_TRANSLUCID: "#E169264D",
  PURPLE: "#9B28AD",
  PURPLE_TRANSLUCID: "#9B28AD4D",
  WHITE: "#FFF",
};

export { colors };
export type { TColor };
