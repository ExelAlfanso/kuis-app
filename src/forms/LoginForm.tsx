import { EnvelopeIcon } from "@phosphor-icons/react";
import IconInputField from "../components/IconInputField";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SparkTwo from "../assets/SparkTwo.svg";
import Heading from "../components/Heading";
import { AnimatePresence, motion } from "motion/react";
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
    <AnimatePresence>
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white border-2 border-black rounded-sm w-80 xl:w-1/4 p-15 h-75 xl:h-150 xl:ml-50"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <span className="absolute -mt-20 -mb-8 text-4xl xl:text-7xl xl:-left-20 -left-15 rotate-25 bottom-8 xl:bottom-10 text-stroke-1">
          <Heading className="inline text-secondary">Triv</Heading>
          <Heading className="inline text-accent-two">Quiz!</Heading>
        </span>
        <img
          src={SparkTwo}
          alt=""
          className="absolute w-25 -right-10 -top-10 xl:w-50 xl:-right-20 xl:-top-20"
        />
        <h2 className="text-3xl font-semibold text-center text-black xl:text-6xl font-nunito">
          Sign in
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.25, ease: "easeIn", delay: 0.5 }}
          className="w-full my-4 border-t-2 border-black"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25, ease: "easeIn", delay: 0.75 }}
          className="flex flex-col w-full gap-4"
        >
          <IconInputField
            type="text"
            placeholder="Enter your username"
            label="Username"
            Icon={EnvelopeIcon}
            onChange={(e) => onChangeUsername?.(e.target.value)}
          />
          <PrimaryButton type="submit">Sign in</PrimaryButton>
        </motion.div>
      </motion.form>
    </AnimatePresence>
  );
};

export default LoginForm;
