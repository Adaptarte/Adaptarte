interface IGoalsProps {
  type: string;
  done: boolean;
  hour: number;
  img?: number;
  onChange?: (val: boolean) => void;
  title: string;
}

export type { IGoalsProps };
