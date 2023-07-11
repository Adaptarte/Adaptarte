import type { ImageSourcePropType } from "react-native";

import type { imgs } from "assets/imgs";
import type { TDiseases } from "utils/db/types";

type ImgName = keyof typeof imgs;
interface TDataDose {
  details: string;
  img: ImageSourcePropType | ImgName;
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
