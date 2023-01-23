type DailyGoalType = "Record" | "Pill";

interface IDailyGoal {
  done: boolean;
  id: number;
  time: number;
  title: string;
  type: DailyGoalType;
}

interface IDailyGoalType {
  name: DailyGoalType;
  id: number;
}

export type { IDailyGoal, IDailyGoalType };
