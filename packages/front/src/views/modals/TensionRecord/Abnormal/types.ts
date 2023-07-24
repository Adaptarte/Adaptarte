import type { ModalBaseProps } from "components/Modal/types";

interface TensionAbnormalProps extends ModalBaseProps {
  value: string;
  onConfirm?: () => void;
}

export type { TensionAbnormalProps };
