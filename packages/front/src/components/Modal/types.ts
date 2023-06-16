interface ModalProps extends ModalBaseProps {
  children: React.ReactNode;
  title: string;
}

interface ModalBaseProps {
  setVisible?: (visible: boolean) => void;
  visible: boolean;
}

export type { ModalProps, ModalBaseProps };
