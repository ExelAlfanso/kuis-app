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
    <div className="input-field text-black flex flex-col">
      {label && <label>{label}</label>}
      <input
        type={type}
        className=" bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white p-2 rounded"
        placeholder={placeholder || ""}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
