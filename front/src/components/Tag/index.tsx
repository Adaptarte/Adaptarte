import React from "react";

import { Text } from "components/Text";

import { getTagStyle, styles } from "./styles";
import type { TagProps } from "./types";

const Tag = ({ children, color }: TagProps): JSX.Element => {
  const varStyle = getTagStyle({ color });

  return (
    <Text style={[styles.text, varStyle.text]} variant={{ weight: "bold" }}>
      {children}
    </Text>
  );
};

export { Tag };
