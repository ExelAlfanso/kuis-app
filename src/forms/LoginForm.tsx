import { EnvelopeIcon } from "@phosphor-icons/react";
import IconInputField from "../components/IconInputField";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SparkTwo from "../assets/SparkTwo.svg";
import Heading from "../components/Heading";
import { AnimatePresence, motion } from "motion/react";
import { scalePop, staggerContainer } from "../animations/variants";
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
        variants={scalePop}
        initial="hidden"
        animate="visible"
        className="relative bg-white border-2 border-black rounded-sm w-85 xl:w-1/4 p-15 h-120 xl:h-150 xl:ml-50 my-auto flex flex-col items-center justify-center shadow-black shadow-[5px_5px_1px_rgba(0,0,0,0.5)]"
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
          transition={{ duration: 0.1, ease: "easeIn", delay: 0.4 }}
          className="w-full my-4 border-t-2 border-black"
        ></motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full gap-4"
        >
          <motion.div variants={scalePop}>
            <IconInputField
              type="text"
              placeholder="Enter your username"
              label="Username"
              Icon={EnvelopeIcon}
              onChange={(e) => onChangeUsername?.(e.target.value)}
            />
          </motion.div>
          <motion.div variants={scalePop} initial="hidden" animate="visible">
            <PrimaryButton className="w-full" type="submit">
              Sign in
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </motion.form>
    </AnimatePresence>
  );
};

export default LoginForm;
