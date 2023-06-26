import type { TDiseases } from "utils/db/types";

interface TDataDose {
  details: string;
  tip: string;
}

interface TDataDoseGroup {
  data: TDataDose[];
  weight: number;
}

interface DataDoseProps {
  diseases: Partial<TDiseases>;
}

export type { DataDoseProps, TDataDose, TDataDoseGroup };
