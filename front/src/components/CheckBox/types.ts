type TVariant = "rounde" | "circle";

interface ICheckBoxProps {
  active?: boolean;
  isChecked?: boolean;
  isInfoRegistered?: boolean;
  onChange?: (val: boolean) => void;
  variant?: TVariant;
}

export type { ICheckBoxProps };
