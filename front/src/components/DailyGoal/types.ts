import type { DailyGoalType } from "types/dailyGoals";

interface DailyGoalProps {
  date: Date;
  done: boolean;
  title: string;
  type: DailyGoalType;
}

export type { DailyGoalProps };
