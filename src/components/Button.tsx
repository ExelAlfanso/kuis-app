interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
