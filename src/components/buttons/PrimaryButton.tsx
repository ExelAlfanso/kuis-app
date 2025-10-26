import React from "react";
import Button from "./Button";

interface PrimaryButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  onClick,
  children,
  type,
}) => {
  return (
    <Button
      className={`bg-accent-one hover:bg-[#87e000] shadow-black shadow-[3px_3px_1px_rgba(0,0,0,0.5)] ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
