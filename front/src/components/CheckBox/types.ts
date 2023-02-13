type TVariant = "circle" | "rounde";

interface ICheckBoxProps {
  active?: boolean;
  isChecked?: boolean;
  isInfoRegistered?: boolean;
  onChange?: (val: boolean) => void;
  variant?: TVariant;
}

export type { ICheckBoxProps };
