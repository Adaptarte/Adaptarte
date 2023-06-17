import type { ModalBaseProps } from "components/Modal/types";
import type { DBUser } from "utils/db/types";

interface EditDiseasesProps extends ModalBaseProps {
  diseases?: Partial<DBUser["diseases"]>;
  onSave?: (data: DBUser["diseases"]) => void;
}

export type { EditDiseasesProps };
