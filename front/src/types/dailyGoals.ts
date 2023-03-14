type DailyGoalType = "Pill" | "Record";

interface IDailyGoal {
  done: boolean;
  time: number;
  title: string;
  type: DailyGoalType;
}

export type { IDailyGoal, DailyGoalType };
