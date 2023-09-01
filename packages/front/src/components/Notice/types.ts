import type { ModalBaseProps } from "components/Modal/types";

interface NoticeProps extends ModalBaseProps {
  onConfirm: () => void;
  description: string;
}

export type { NoticeProps };
