import Brutalist from "../assets/Brutalist.svg";
import Train from "../assets/Train.svg";
import Spark from "../assets/Spark.svg";
import Globe from "../assets/Globe.svg";
import PinDocument from "../assets/PinDocument.svg";
import Plane from "../assets/Plane.svg";
import Crown from "../assets/Crown.svg";
import Clock from "../assets/Clock.svg";
import Radio from "../assets/Radio.svg";

const BaseBrutality = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="pointer-events-none">
      <img
        className="absolute w-0 xl:bottom-0 xl:right-0 xl:w-auto"
        src={Brutalist}
        alt=""
      />
      <img
        className="absolute top-40 right-0 -rotate-15 xl:top-[50%] bottom-30  xl:right-[30%] w-[12vw] "
        src={Train}
        alt=""
      />
      <img
        className="absolute right-1/2 rotate-15 top-[75%] xl:top-[20%] xl:right-[23%] w-[10vw]"
        src={Globe}
        alt=""
      />
      <img
        className="absolute top-[23%] right-[80%] xl:top-[30%] xl:right-[6%] w-[10vw]"
        src={Plane}
        alt=""
      />
      <img
        className="absolute bottom-[80%] left-[25%] xl:bottom-[28%] xl:left-[70%] w-[8vw]"
        src={Crown}
        alt=""
      />
      <img
        className="absolute top-[45%] left-10 -rotate-15 xl:top-[70%] xl:left-[65%] w-[15vw] xl:w-auto"
        src={PinDocument}
        alt=""
      />
      <img
        className="absolute top-[45%] right-10 xl:top-[8%] xl:right-[20%] w-20 lg:w-auto"
        src={Clock}
        alt=""
      />
      <img
        className="absolute top-[12%] right-[15%] xl:right-[10%] w-[8vw]"
        src={Spark}
        alt=""
      />
      <img
        className="absolute top-[70%] right-[85%] xl:top-[20%] xl:left-[60%] w-[6vw]"
        src={Spark}
        alt=""
      />
      <img
        className="absolute right-10  bottom-[10%] xl:bottom-[5%] xl:right-[5%]  w-[15vw]"
        src={Radio}
        alt=""
      />
      {children}
    </div>
  );
};

export default BaseBrutality;
