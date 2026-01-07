import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

export default function Landing() {
  const handlePrimaryClick = () => {
    console.log("Get Started for Free clicked!");
  };

  const handleSecondaryClick = () => {
    console.log("Explore Features clicked!");
  };

  return (
    <HeroSection
      distortion={1.9}
      speed={0.8}
      trustBadge={{
        text: "AI Marketing Growth OS.",
        icons: ["✨"],
      }}
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
        secondary: {
          text: "Explore Features",
          onClick: handleSecondaryClick,
        },
      }}
    />
  );
}
