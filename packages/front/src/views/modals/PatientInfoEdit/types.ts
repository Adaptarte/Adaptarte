import type { ModalBaseProps } from "components/Modal/types";
import type { DBUser } from "utils/db/types";

interface PatientInfoEditProps extends ModalBaseProps {
  data: DBUser["basicInfo"];
}

export type { PatientInfoEditProps };
