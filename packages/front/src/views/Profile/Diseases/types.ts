import type { TDiseases } from "utils/db/types";

interface DiseasesProps {
  diseases: Partial<TDiseases>;
  onChange?: (data: TDiseases) => void;
}

export type { DiseasesProps };
