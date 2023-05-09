import type { DailyGoalProps } from "components/DailyGoal/types";

interface MedicineGoalProps extends Pick<DailyGoalProps, "date" | "done"> {
  recipeId: number;
}

export type { MedicineGoalProps };
