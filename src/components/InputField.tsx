interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="input-field text-black flex flex-col w-full">
      {label && <label>{label}</label>}
      <input
        type={type}
        className="bg-gray-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-black text-black p-2 rounded w-full"
        placeholder={placeholder || ""}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
