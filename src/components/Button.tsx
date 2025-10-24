interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-3xl cursor-pointer transition-colors duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
