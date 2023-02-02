import type { FC } from "react";
import { createContext } from "react";
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import type { IRowProps } from "./types";

const RowContext = createContext({ columns: 1, spacing: 8 });

const Row: FC<IRowProps> = ({
  children,
  columns = 1,
  spacing = 8
}: IRowProps): JSX.Element => {
  const margin = spacing / -2;

  return (
    <RowContext.Provider value={{ columns, spacing }}>
      <View style={[styles.container, { margin }]}>{children}</View>
    </RowContext.Provider>
  );
};

export { Row, RowContext };
