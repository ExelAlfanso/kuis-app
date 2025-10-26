interface ChipProps {
  className?: string;
  children: React.ReactNode;
}
const Chip: React.FC<ChipProps> = ({ className, children }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center rounded-3xl text-xl gap-1 w-15 ${className}`}
    >
      {children}
    </div>
  );
};

export default Chip;
