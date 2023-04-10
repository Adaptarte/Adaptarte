import type { DailyGoalProps } from "components/DailyGoal/types";

type TensionGoalProps = Pick<DailyGoalProps, "date" | "done">;

export type { TensionGoalProps };
