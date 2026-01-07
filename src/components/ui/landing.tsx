import Hero from "./animated-shader-hero";

// Demo Component showing how to use the Hero
const HeroDemo: React.FC = () => {
  const handlePrimaryClick = () => {
    console.log('Get Started clicked!');
    // Add your logic here
  };

  const handleSecondaryClick = () => {
    console.log('Explore Features clicked!');
    // Add your logic here
  };

  return (
    <div className="w-full">
      <Hero
        trustBadge={{
          text: "Trusted by forward-thinking teams.",
          icons: ["✨"]
        }}
        headline={{
          line1: "Raftra",
          line2: "Full Growth OS For Your Brand"
        }}
        subtitle="Complete AI-powered marketing operating system. Launch Campaign in 30 minutes, automate creative production, optimize performance, and scale your brand growth-all in one platform."
        buttons={{
        primary: {
            text: "Get Started for Free",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "Explore Features",
            onClick: handleSecondaryClick
          }
        }}
      />
    </div>
  );
};

export default HeroDemo;