import Brutalist from "../assets/Brutalist.svg";
import BrutalityArrow from "../assets/BrutalistArrow.svg";
import Train from "../assets/Train.svg";
import Spark from "../assets/Spark.svg";
import Globe from "../assets/Globe.svg";
import PinDocument from "../assets/PinDocument.svg";
import Plane from "../assets/Plane.svg";
import Crown from "../assets/Crown.svg";
import Clock from "../assets/Clock.svg";
const Brutality = () => {
  return (
    <div>
      <img className="absolute bottom-0 right-0" src={Brutalist} alt="" />
      <img
        className="absolute top-[40%] left-[40%] "
        src={BrutalityArrow}
        alt=""
      />
      <img className="absolute top-[20%] right-[30%] " src={Train} alt="" />
      <img className="absolute top-[50%] right-[23%] " src={Globe} alt="" />
      <img className="absolute bottom-[10%] right-[12%] " src={Plane} alt="" />
      <img className="absolute bottom-[28%] right-[3%] " src={Crown} alt="" />
      <img
        className="absolute top-[20%] right-[5%] "
        src={PinDocument}
        alt=""
      />
      <img className="absolute top-[8%] right-[20%] " src={Clock} alt="" />
      <img className="absolute top-[15%] right-[8%] " src={Spark} alt="" />
      <img className="absolute top-[10%] right-[40%] " src={Spark} alt="" />
      <img className="absolute bottom-0 right-1/4 " src="/Radio.svg" alt="" />
    </div>
  );
};

export default Brutality;
