interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return <h1 className={`${className} font-modak`}>{children}</h1>;
};

export default Heading;
