type TVariant = "rounde" | "circle";

interface ICheckBoxProps {
  active?: boolean;
  color?: string;
  isChecked?: boolean;
  onChange?: (val: boolean) => void;
  variant?: TVariant;
}

export type { ICheckBoxProps };
