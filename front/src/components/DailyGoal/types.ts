import type { DailyGoalType } from "types/dailyGoals";

interface DailyGoalProps {
  date: Date;
  done: boolean;
  onPress?: () => void;
  title: string;
  type: DailyGoalType;
}

export type { DailyGoalProps };
