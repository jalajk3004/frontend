import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const handlePrimaryClick = () => {
    navigate("/multistepForm");
  };

  const handleSecondaryClick = () => {
    console.log("Explore Features clicked!");
  };

  return (
    <HeroSection
      distortion={1.9}
      speed={0.8}
      
      heroHeadline={{
        line1: "Raftra",
        line2: "Full Growth OS For Your Brand",
      }}
      heroSubtitle="Complete AI-powered marketing operating system. Launch Campaign in 30 minutes, automate creative production, optimize performance, and scale your brand growth—all in one platform."
      heroButtons={{
        primary: {
          text: "Get Started for Free",
          onClick: handlePrimaryClick,
        },
      }}
    />
  );
}
