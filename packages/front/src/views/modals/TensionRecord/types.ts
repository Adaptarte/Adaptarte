import type { ModalBaseProps } from "components/Modal/types";
import type { DBTension } from "utils/db/types";

interface TensionRecordProps extends ModalBaseProps {
  onSave: (data: DBTension) => void;
}

export type { TensionRecordProps };
