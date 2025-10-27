import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Heading from "../components/Heading";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center xl:items-start xl:justify-start">
      <div className="text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] flex flex-col items-center text-center xl:text-left xl:items-start">
        <span className="text-stroke-1">
          <Heading className="text-white ">Take your First</Heading>
        </span>
        <span className="-mt-10 xl:-mt-20 xl:-mb-8 text-stroke-1">
          <Heading className="inline text-secondary">Triv</Heading>
          <Heading className="inline text-accent-two">Quiz!</Heading>
        </span>
        <PrimaryButton
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Started!
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
