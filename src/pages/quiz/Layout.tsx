import QuizSectionBrutality from "../../sections/QuizSectionBrutality";
import { Outlet } from "react-router-dom";
import BaseLayout from "../BaseLayout";
import Sunflower from "../../assets/Sunflower.svg";

export default function Layout() {
  return (
    <BaseLayout>
      <img
        src={Sunflower}
        alt=""
        className="absolute hidden w-32 xl:block bottom-70 -left-10 md:top-50 md:left-10 lg:w-auto"
      />
      <Outlet />
      <QuizSectionBrutality />
    </BaseLayout>
  );
}
