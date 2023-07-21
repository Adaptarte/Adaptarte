import React from "react";

import { Column, Row } from "components/Grid";

import type { ListProps } from "./types";

const List = <T, >({
  columns,
  data,
  keyGetter,
  renderItem
}: ListProps<T>): JSX.Element => {
  return (
    <Row columns={columns}>
      {data.map((item, idx) => (
        <Column key={keyGetter?.(item)}>{renderItem(item, idx)}</Column>
      ))}
    </Row>
  );
};

export { List };
