interface ModalProps {
  children?: React.ReactNode;
  onClose: (visible: boolean) => void;
  title: string;
  visible: boolean;
}

export type { ModalProps };
