import type { TAppViewProps } from "navigation/App/types";

type IDailyHabitsProps = Pick<
  TAppViewProps<"Landing">["navigation"],
  "navigate"
>;

export type { IDailyHabitsProps };
