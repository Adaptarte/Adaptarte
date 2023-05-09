import React, { useContext } from "react";
import { View } from "react-native";

import { RowContext } from "../Row";
import { styles } from "./styles";
import type { IColumnProps } from "./types";

const Column = ({ children, size = 1 }: IColumnProps): JSX.Element => {
  const { columns, spacing } = useContext(RowContext);
  const padding = spacing / 2;
  const width = `${(100 * size) / columns}%`;

  return <View style={[styles.container, { padding, width }]}>{children}</View>;
};

export { Column };
