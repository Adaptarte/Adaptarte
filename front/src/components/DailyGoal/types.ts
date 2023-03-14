import type { DailyGoalType } from "types/dailyGoals";

interface IGoalProps {
  type: DailyGoalType;
  done: boolean;
  hour: number;
  img?: number;
  onChange?: (val: boolean) => void;
  title: string;
}

export type { IGoalProps };
