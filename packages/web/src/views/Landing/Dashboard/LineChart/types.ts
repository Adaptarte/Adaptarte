interface LineChartProps {
  axes?: Partial<Record<"x" | "y", string>>;
  data: LineCharDataset[];
  labels: (number | string)[];
  title: string;
}

interface LineCharDataset {
  data: number[];
  label?: string;
}

export type { LineChartProps };
