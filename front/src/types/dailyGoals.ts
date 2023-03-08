type DailyGoalType = "Pill" | "Record";

interface IDailyGoal {
  done: boolean;
  time: number;
  title: string;
  type: DailyGoalType;
}

interface IDailyGoalType {
  name: DailyGoalType;
  id: number;
}

export type { IDailyGoal, IDailyGoalType };
