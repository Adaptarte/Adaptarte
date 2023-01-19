import type { ViewProps } from "react-native";

interface ITensionProps extends Pick<ViewProps, "style"> {
  completeRegister: () => void;
  visible: boolean;
  setVisible: () => void;
}

export type { ITensionProps };
