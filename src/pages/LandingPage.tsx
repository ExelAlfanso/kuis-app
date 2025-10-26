import Brutality from "../sections/Brutality";
import Hero from "../sections/Hero";
import TopBar from "../components/TopBar";
import Features from "../sections/Features";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-start justify-center  ">
      <TopBar></TopBar>
      <div className="ml-30">
        <Hero></Hero>
        <Features></Features>
      </div>
      <Brutality />
    </div>
  );
}
