import Landing from "./components/landing";
import { AuthButton,  Navbar } from "./components/navbar";
import Achieve from "./components/achieve";
import { Works } from "./components/works";
import Features from "./components/features";
import { Footer } from "./components/footer";
import CTA from "./components/cta";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/pricing";
import FullFeatures from "./pages/fullFeatures";
import Auth from "./pages/auth";
import MultiStepProfileForm from "./pages/form";
import SecurityDashboard from "./pages/security";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <Landing />

        {/* Navbar centered, auth button top-right */}
        <div className="pointer-events-none absolute inset-x-0 top-4 z-20 flex justify-center">
          <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between px-4">
            {/* <div>
              <Logo/>
            </div> */}
            <div className=" px-4 py-2 ">
              <Navbar />
            </div>
            <div className="ml-4">
              <AuthButton />
            </div>
          </div>
        </div>
      </div>

      <Achieve />
      <Features />
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
      <Route path="/multistepForm" element={<MultiStepProfileForm />} />
      <Route path="/security" element={<SecurityDashboard/>}/>
    </Routes>
  );
}

export default App;
