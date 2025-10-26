import { EnvelopeIcon } from "@phosphor-icons/react";
import IconInputField from "../components/IconInputField";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SparkTwo from "../assets/SparkTwo.svg";
import Heading from "../components/Heading";
interface LoginFormProps {
  onSubmit: () => void;
  username: string;
  onChangeUsername: (username: string) => void;
}
const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onChangeUsername,
}) => {
  return (
    <form
      className="relative flex flex-col items-center justify-center w-1/4 bg-white border-2 border-black rounded-sm p-15 h-150 ml-50"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <span className="absolute -mt-20 -mb-8 text-7xl -left-20 rotate-25 bottom-10 text-stroke-1">
        <Heading className="inline text-secondary">Triv</Heading>
        <Heading className="inline text-accent-two">Quiz!</Heading>
      </span>
      <img src={SparkTwo} alt="" className="absolute w-75 -right-28 -top-28" />
      <h2 className="text-6xl font-semibold text-black font-nunito">Sign in</h2>
      <div className="w-full my-4 border-t-2 border-black"></div>
      <div className="flex flex-col w-full gap-4">
        <IconInputField
          type="text"
          placeholder="Enter your username"
          label="Username"
          Icon={EnvelopeIcon}
          onChange={(e) => onChangeUsername?.(e.target.value)}
        />

        <PrimaryButton type="submit">Sign in</PrimaryButton>
      </div>
    </form>
  );
};

export default LoginForm;
