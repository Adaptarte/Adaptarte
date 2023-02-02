import type { FC } from "react";
import { useContext } from "react";
import React from "react";
import { View } from "react-native";

import { RowContext } from "../Row";
import { styles } from "./styles";
import type { IColumnProps } from "./types";

const Column: FC<IColumnProps> = ({ children }: IColumnProps): JSX.Element => {
  const { columns, spacing } = useContext(RowContext);
  const padding = spacing / 2;
  const width = `${100 / columns}%`;

  return <View style={[styles.container, { padding, width }]}>{children}</View>;
};

export { Column };
