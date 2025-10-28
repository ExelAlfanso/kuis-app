interface ChipProps {
  className?: string;
  children: React.ReactNode;
}
const Chip: React.FC<ChipProps> = ({ className, children }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center rounded-xs text-2xl xl:text-4xl gap-1 w-20 xl:w-25 border-black border-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Chip;
