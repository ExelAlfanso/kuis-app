import Hero from "../sections/Hero";
import Features from "../sections/Features";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center xl:items-start xl:ml-30 pt-50 ">
      <Hero></Hero>
      <Features></Features>
    </div>
  );
}
