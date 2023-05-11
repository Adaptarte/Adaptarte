type DailyGoalType = "Pill" | "Record";

interface DailyGoalProps {
  date: Date;
  done: boolean;
  onPress?: () => void;
  title: string;
  type: DailyGoalType;
}

export type { DailyGoalProps, DailyGoalType };
