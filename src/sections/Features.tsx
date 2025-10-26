import {
  CirclesThreeIcon,
  FlagIcon,
  QuestionIcon,
} from "@phosphor-icons/react";
export default function Features() {
  return (
    <>
      <div className="flex flex-row gap-5 items-start justify-start mt-20">
        <div className="text-white flex flex-col items-center justify-center mt-10">
          <CirclesThreeIcon size={64}></CirclesThreeIcon>
          <p className=" text-2xl">15+ Categories</p>
        </div>
        <div className="text-white flex flex-col items-center justify-center mt-10">
          <QuestionIcon size={64}></QuestionIcon>
          <p className=" text-2xl">500+ Unique Questions</p>
        </div>
        <div className="text-white flex flex-col items-center justify-center mt-10">
          <FlagIcon size={64}></FlagIcon>
          <p className=" text-2xl">3 Difficulties</p>
        </div>
      </div>
    </>
  );
}
