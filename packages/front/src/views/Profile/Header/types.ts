import { TDiseases } from "utils/db/types";

interface ProfileHeaderProps {
  diseases: Partial<TDiseases>;
  name?: string;
  photo: string | null;
}

export type { ProfileHeaderProps };
