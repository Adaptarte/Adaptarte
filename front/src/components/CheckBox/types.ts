type CheckBoxVariant = "circle" | "rounded";

interface CheckBoxProps {
  isChecked?: boolean;
  onChange?: (val: boolean) => void;
  variant?: CheckBoxVariant;
}

export type { CheckBoxProps, CheckBoxVariant };
