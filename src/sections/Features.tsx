import {
  CirclesThreeIcon,
  FlagIcon,
  QuestionIcon,
} from "@phosphor-icons/react";
export default function Features() {
  return (
    <section>
      <div className="flex flex-row items-center justify-center gap-5 xl:items-start xl:justify-start">
        <div className="flex flex-col items-center justify-center mt-10 text-white">
          <CirclesThreeIcon className="h-auto w-14"></CirclesThreeIcon>
          <p className="text-[16px] md:text-2xl">15+ Categories</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 text-white">
          <QuestionIcon className="h-auto w-14"></QuestionIcon>
          <p className="text-[16px] md:text-2xl">500+ Unique Questions</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 text-white">
          <FlagIcon className="h-auto w-14"></FlagIcon>
          <p className="text-[16px] md:text-2xl">3 Difficulties</p>
        </div>
      </div>
    </section>
  );
}
