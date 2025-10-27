import BaseBrutality from "./BaseBrutality";
import BrutalityArrow from "../assets/BrutalistArrow.svg";

const QuizSectionBrutality = () => {
  return (
    <BaseBrutality>
      <img
        className="hidden 2xl:block absolute top-[40%] left-[40%] "
        src={BrutalityArrow}
        alt=""
      />
    </BaseBrutality>
  );
};

export default QuizSectionBrutality;
