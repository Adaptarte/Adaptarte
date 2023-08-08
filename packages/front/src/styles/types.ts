import type {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";

type VarStyle<T extends string> = StyleSheet.NamedStyles<
  Record<T, ImageStyle | TextStyle | ViewStyle>
>;

export type { VarStyle };
