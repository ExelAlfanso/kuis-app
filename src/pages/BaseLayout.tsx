import TopBar from "../components/TopBar";
import Spiral from "../assets/Spiral.svg";
import { motion } from "motion/react";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      <TopBar />
      <motion.img
        src={Spiral}
        alt=""
        className="absolute bottom-0 left-0 z-20 w-32 md:w-48 lg:w-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{ originX: 0, originY: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {children}
    </div>
  );
}
