interface ModalProps {
  children: React.ReactNode;
  setVisible?: (visible: boolean) => void;
  title: string;
  visible: boolean;
}

export type { ModalProps };
