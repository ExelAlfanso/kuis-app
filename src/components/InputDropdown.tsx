import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { CaretDownIcon } from "@phosphor-icons/react";

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
    const target = e.currentTarget;
    setValue(target.innerText);
    onChange?.(e);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full text-primary">
      {label && (
        <label className="text-[13px] text-black-200 font-figtree font-medium mb-1 block">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-4 py-2 text-left bg-gray-200 ${
          value ? "text-black" : "text-gray-800"
        } cursor-pointer rounded-3xl hover:bg-gray-300`}
      >
        <p>{value || placeholder || "Select an option"}</p>
      </button>

      <div
        className={`absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-2xl shadow-lg transition-all duration-200 origin-top overflow-hidden ${
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
              className="px-4 py-2 text-left cursor-pointer hover:bg-gray-100 text-primary"
            >
              {val}
            </button>
          ))
        ) : (
          <p className="px-4 py-2 text-gray-400 text-sm">
            No options available
          </p>
        )}
      </div>

      <button
        type="button"
        className="absolute right-3 top-1/2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        <CaretDownIcon
          size={20}
          className="hover:text-orange-500 transition-colors duration-200"
        />
      </button>
    </div>
  );
};

export default InputDropdown;
