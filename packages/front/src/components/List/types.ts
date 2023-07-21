import type { Key } from "react";

interface ListProps<T> {
  columns?: number;
  data: T[];
  keyGetter?: (item: T) => Key;
  renderItem: (item: T, idx: number) => JSX.Element;
}

export type { ListProps };
