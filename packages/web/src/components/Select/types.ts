interface SelectOption {
  id: string;
  name: string;
}

interface SelectProps {
  className?: string;
  onChange: (option?: SelectOption) => void;
  options: SelectOption[];
  value?: SelectOption["id"];
}

export type { SelectOption, SelectProps };
