import type { ModalVisibilityProps } from "components/Modal/types";
import type { DBUser } from "utils/db/types";

interface EditPatientInfoProps extends ModalVisibilityProps {
  data: DBUser;
}

export type { EditPatientInfoProps };
