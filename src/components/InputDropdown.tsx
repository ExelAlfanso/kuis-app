import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { CaretDownIcon } from "@phosphor-icons/react";
import PrimaryButton from "./buttons/PrimaryButton";

export interface InputDropdownProps {
  placeholder?: string;
  values?: string[];
  label?: string;
  initialValue?: string | number | object;
  onChange?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const InputDropdown: React.FC<InputDropdownProps> = ({
  values,
  label,
  placeholder,
  initialValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));
  const [value, setValue] = useState<string>((initialValue as string) || "");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    setValue(target.innerText);
    onChange?.(e);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-1/2 xl:w-full text-black">
      {label && (
        <label className="text-[12px] text-left font-figtree font-medium mb-1 block">
          {label}
        </label>
      )}

      <PrimaryButton
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-3 py-2 text-left bg-white font-nunito ${
          value ? "text-black" : "text-gray-800"
        } cursor-pointer rounded-xs hover:bg-gray-100 relative`}
      >
        <p>{value || placeholder || "Select an option"}</p>
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
        >
          <CaretDownIcon
            size={18}
            className="transition-colors duration-200 hover:text-accent-two"
          />
        </button>
      </PrimaryButton>

      <div
        className={`absolute left-0 right-0 mt-1 bg-white border-2 border-black rounded-xs shadow-lg overflow-y-auto max-h-40 transition-transform duration-200 origin-top transform scale-y-0 opacity-0 ${
          isOpen ? "scale-y-100 opacity-100" : ""
        } flex flex-col z-50
        xl:${
          values && values.length > 6
            ? "grid grid-cols-2 gap-1"
            : "flex flex-col"
        }
        `}
      >
        {values && values.length > 0 ? (
          values.map((val, index) => (
            <button
              key={index}
              onClick={handleClick}
              className="px-3 py-2 font-medium text-left text-black cursor-pointer font-nunito hover:bg-gray-100 hover:font-bold "
            >
              {val}
            </button>
          ))
        ) : (
          <p className="px-3 py-2 text-gray-400">No options available</p>
        )}
      </div>
    </div>
  );
};

export default InputDropdown;
