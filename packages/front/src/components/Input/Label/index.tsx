import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import type { InputLabelProps } from "./types";

const InputLabel = ({ children }: InputLabelProps): JSX.Element | null => {
  return children === undefined ? null : (
    <Text style={styles.container} variant={textVars.label}>
      {children}
    </Text>
  );
};

export { InputLabel };
