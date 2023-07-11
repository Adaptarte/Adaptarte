import type { ModalBaseProps } from "components/Modal/types";
import type { TDiseases } from "utils/db/types";

interface DiseasesEditProps extends ModalBaseProps {
  diseases: TDiseases;
  onSave?: (data: TDiseases) => void;
}

export type { DiseasesEditProps };