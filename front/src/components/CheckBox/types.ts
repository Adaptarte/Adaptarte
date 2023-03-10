type CheckBoxVariant = "circle" | "rounded";

interface CheckBoxProps {
  disabled?: boolean;
  isChecked?: boolean;
  onChange?: (val: boolean) => void;
  variant?: CheckBoxVariant;
}

export type { CheckBoxProps, CheckBoxVariant };
