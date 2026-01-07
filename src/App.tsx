import HeroDemo from "./components/landing";
import Landing from "./components/landing";
import { Navbar } from "./components/navbar";

import Achieve from "./components/achieve";
import { Works } from "./components/works";
import Features from "./components/features";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero background / landing page */}
      <Landing />

      {/* Centered navbar overlay above the landing page */}
      <div className="pointer-events-none absolute inset-x-0 top-2 z-20 flex justify-center">
        <div className="pointer-events-auto rounded-2xl border border-green-300/40 bg-black/30 backdrop-blur-md px-4 py-2 shadow-lg shadow-green-500/25">
          <Navbar />
        </div>
      </div>
      <Achieve/>
      <Works/>
      <Features/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
