interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-10  bg-white shadow-black shadow-[5px_5px_1px_rgba(0,0,0,0.5)] ${className}`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
