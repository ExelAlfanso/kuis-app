import BaseLayout from "../BaseLayout";
import Brutality from "../../sections/Brutality";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <BaseLayout>
      <Outlet />
      <Brutality />
    </BaseLayout>
  );
}
