interface LineChartProps {
  data: LineCharDataset[];
  labels: (number | string)[];
  title: string;
}

interface LineCharDataset {
  data: number[];
  label?: string;
}

export type { LineChartProps };
