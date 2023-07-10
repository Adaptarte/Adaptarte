import type { TAppViewProps } from "navigation/App/types";

interface DailyHabitsProps
  extends Pick<TAppViewProps<"Landing">["navigation"], "navigate"> {
  calm?: boolean;
  exercise?: boolean;
  feeding?: boolean;
  hydration?: boolean;
}

export type { DailyHabitsProps };
