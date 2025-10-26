import React from "react";
import InputField from "./InputField";

interface IconInputFieldProps {
  Icon?: React.ElementType;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInputField: React.FC<IconInputFieldProps> = ({
  Icon,
  label,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="relative flex flex-col w-full text-black">
      <InputField
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
      ></InputField>
      {Icon && <Icon size={32} className="absolute right-2 top-1/2" />}
    </div>
  );
};

export default IconInputField;
