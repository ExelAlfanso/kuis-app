import BrutalityArrow from "../assets/BrutalistArrow.svg";
import BaseBrutality from "./BaseBrutality";

const Brutality = () => {
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

export default Brutality;
