import TopBar from "../components/TopBar";
import Spiral from "../assets/Spiral.svg";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      <TopBar />
      <img
        src={Spiral}
        alt=""
        className="absolute bottom-0 left-0 z-20 w-32 md:w-48 lg:w-auto"
      />

      {children}
    </div>
  );
}
