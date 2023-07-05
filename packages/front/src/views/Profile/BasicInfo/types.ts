import type { DBUser } from "utils/db/types";

interface BasicInfoProps {
  data?: DBUser["basicInfo"];
  onChange?: (data: DBUser["basicInfo"]) => void;
}

export type { BasicInfoProps };
