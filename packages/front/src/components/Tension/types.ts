import type { ModalProps } from "components/Modal/types";
import type { DBTension } from "utils/db/types";

interface TensionProps extends Pick<ModalProps, "setVisible" | "visible"> {
  onSave: (data: DBTension) => void;
}

export type { TensionProps };
