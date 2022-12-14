type TLexendFamily = "Black" | 
  "Bold" | 
  "ExtraBold" | 
  "ExtraLight" |
  "Light" |
  "Medium" | 
  "Regular" |
  "SemiBold" |
  "Thin";

const lexendFamily: Record<TLexendFamily, string> = {
  "Black" : "Lexend-Black",
  "Bold" : "Lexend-Bold",
  "ExtraBold": "Lexend-ExtraBold",
  "ExtraLight": "Lexend-ExtraLight",
  "Light": "Lexend-Light",
  "Medium": "Lexend-Medium",
  "Regular": "Lexend-Regular",
  "SemiBold": "Lexend-SemiBold",
  "Thin": "Lexend-Thin",
};

export type { TLexendFamily };
export { lexendFamily };
