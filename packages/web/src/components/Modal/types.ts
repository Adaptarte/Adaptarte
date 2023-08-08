interface ModalProps extends ModalVisibilityProps {
  children?: React.ReactNode;
  title: string;
}

interface ModalVisibilityProps {
  onClose: (visible: boolean) => void;
  visible: boolean;
}

export type { ModalProps, ModalVisibilityProps };
