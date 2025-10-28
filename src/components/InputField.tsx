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
    <div className="flex flex-col w-full text-black input-field">
      {label && <label className="font-semibold font-nunito ">{label}</label>}
      <input
        type={type}
        className="w-full p-1 py-2 font-semibold text-black border-2 border-black xl:p-2 xl:py-4 font-nunito rounded-xs focus:outline-none focus:bg-gray-100 text-[10px] xl:text-[16px] xl:text-base "
        placeholder={placeholder || ""}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
