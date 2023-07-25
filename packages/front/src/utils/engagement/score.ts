import { useCallback, useMemo } from "react";

import { useDB } from "utils/db";

import type { Score } from "./types";

const useScore = (): Score => {
  const db = useDB();
  const user = db.getUser();
  const value = useMemo(() => {
    return user?.score ?? 0;
  }, [user?.score]);

  const add = useCallback(
    (amount: number) => {
      const score = Math.max(0, value + amount);
      db.updateUser({ score });
    },
    [db.updateUser, value]
  );

  return { add, value };
};

export { useScore };
