import Landing from "./components/landing";
import { AuthButton, Logo, Navbar } from "./components/navbar";
import Achieve from "./components/achieve";
import { Works } from "./components/works";
import { Footer } from "./components/footer";
import CTA from "./components/cta";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/pricing";
import FullFeatures from "./pages/fullFeatures";
import Auth from "./pages/auth";
import MultiStepProfileForm from "./pages/form";
import SecurityDashboard from "./pages/security";
import SmartAutomation from "./pages/features/smart-automation";
import AnalyticsPerformanceDashboard from "./pages/features/analytics";
import GeoTargetingIntelligence from "./pages/features/geo-targeting";
import InfluencerMarketingDashboard from "./pages/features/influencer-marketing";
import FeaturesLanding from "./components/landingFeatues";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <Landing />

        <div className="pointer-events-none absolute inset-x-0 top-4 z-20">
          <div className="pointer-events-auto relative mx-auto flex w-full max-w-5xl items-center px-4">

            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <Navbar />
            </div>

            <div className="ml-auto flex-shrink-0">
              <AuthButton />
            </div>

          </div>
        </div>

      </div>

      <Achieve />
      <FeaturesLanding />
      <Works />
      <CTA />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<FullFeatures />} />
      <Route path="/features/smart-automation" element={<SmartAutomation />} />
      <Route path="/features/analytics" element={<AnalyticsPerformanceDashboard />} />
      <Route path="/features/geo-targeting" element={<GeoTargetingIntelligence />} />
      <Route path="/features/influencer-marketing" element={<InfluencerMarketingDashboard />} />
      <Route path="/multistepForm" element={<MultiStepProfileForm />} />
      <Route path="/security" element={<SecurityDashboard />} />
    </Routes>
  );
}

export default App;
