interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-sm border-2 border-black cursor-pointer transition-colors duration-200 text-xs xl:text-xl font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
