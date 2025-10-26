import React from "react";
import InputDropdown from "../InputDropdown";

interface QuestionsInputDropdownProps {
  label?: string;
  placeholder?: string;
  options?: string[];
  initialValue?: string;
  onChange?: (value: string) => void;
}

const QuestionsInputDropdown: React.FC<QuestionsInputDropdownProps> = ({
  label = "Number of Questions",
  placeholder = "Select number of questions",
  options = ["5", "10", "15", "20"],
  initialValue = "10",
  onChange,
}) => {
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selected = e.currentTarget.innerText.replace(" questions", "");
    onChange?.(selected);
  };

  const formattedValues = options.map((val) => `${val} questions`);

  return (
    <InputDropdown
      label={label}
      placeholder={placeholder}
      values={formattedValues}
      initialValue={initialValue + " questions"}
      onChange={handleChange}
    />
  );
};

export default QuestionsInputDropdown;
