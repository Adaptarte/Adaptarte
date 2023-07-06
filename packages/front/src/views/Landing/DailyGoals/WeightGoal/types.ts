import type { DailyGoalProps } from "components/DailyGoal/types";

type WeightGoalProps = Pick<DailyGoalProps, "date" | "done">;

export type { WeightGoalProps };
