import type { ModalBaseProps } from "components/Modal/types";
import type { DBTension } from "utils/db/types";

interface TensionProps extends ModalBaseProps {
  onSave: (data: DBTension) => void;
}

export type { TensionProps };
