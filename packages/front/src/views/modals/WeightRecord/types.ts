import type { ModalBaseProps } from "components/Modal/types";
import type { DBWeight } from "utils/db/types";

interface WeightRecordProps extends ModalBaseProps {
  onSave?: (data: DBWeight) => void;
}

export type { WeightRecordProps };
