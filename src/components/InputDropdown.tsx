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
    <div ref={dropdownRef} className="relative w-full text-black ">
      {label && (
        <label className="text-[13px] font-figtree font-medium mb-1 block">
          {label}
        </label>
      )}

      <PrimaryButton
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-4 py-2 text-left bg-white font-nunito ${
          value ? "text-black" : "text-gray-800"
        } cursor-pointer rounded-xs hover:bg-gray-100 `}
      >
        <p>{value || placeholder || "Select an option"}</p>
      </PrimaryButton>

      <div
        className={`overflow-y-scroll max-h-48 absolute left-0 right-0 mt-2 bg-white border-2 border-black rounded-xs shadow-lg transition-all duration-200 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } ${
          values && values.length > 6 ? "grid grid-cols-2" : "flex flex-col"
        } z-50`}
      >
        {values && values.length > 0 ? (
          values.map((val, index) => (
            <button
              key={index}
              onClick={handleClick}
              className="px-4 py-2 font-semibold text-left text-black cursor-pointer font-nunito hover:bg-gray-100"
            >
              {val}
            </button>
          ))
        ) : (
          <p className="px-4 py-2 text-sm text-gray-400">
            No options available
          </p>
        )}
      </div>

      <button
        type="button"
        className="absolute cursor-pointer right-3 top-1/2"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        <CaretDownIcon
          size={20}
          className="transition-colors duration-200 hover:text-accent-two"
        />
      </button>
    </div>
  );
};

export default InputDropdown;
