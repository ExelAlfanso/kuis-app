import React from "react";
import Button from "./Button";

interface SecondartyButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const SecondartyButton: React.FC<SecondartyButtonProps> = ({
  className,
  onClick,
  children,
  type,
}) => {
  return (
    <Button
      className={`bg-secondary hover:bg-[#F7E100] shadow-black shadow-[3px_3px_1px_rgba(0,0,0,0.5)] ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default SecondartyButton;
