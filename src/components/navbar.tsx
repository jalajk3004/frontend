import { Home, Settings, User, BadgeDollarSignIcon, MessageSquareIcon, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ExpandableTabs } from "./ui/expandable-tabs";


function Logo(){
  <image href="/assets/logo.png"/>
}

function Navbar() {
  const navigate = useNavigate();

  const tabs = [
    { title: "Home", icon: Home },
    { title: "Features", icon: Settings },
    { title: "Pricing", icon: BadgeDollarSignIcon },
    { title: "Contact", icon: MessageSquareIcon },
  ];

  const handleChange = (index: number | null) => {
    if (index === null) return;
    const tab = tabs[index];
    if (!tab) return;

    if (tab.title === "Home") navigate("/");
    if (tab.title === "Features") navigate("/features");
    if (tab.title === "Pricing") navigate("/pricing"); 
    
  };

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} onChange={handleChange} />
    </div>
  );
}

function AuthButton() {
  const tabs = [
    { title: "Login", icon: User },
    { type: "separator" },
    { title: "Security", icon: Shield },
  ];

  const navigate = useNavigate();

  const handleChange = (index: number | null) => {
    if (index === null) return;
    const tab = tabs[index];
    if (!tab) return;

    if (tab.title === "Login") navigate("/auth");
    if (tab.title === "Security") navigate("/security"); 
    
  };


  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs 
        tabs={tabs} 
        activeColor="text-blue-500"
        onChange={handleChange}
      />
    </div>
  );
}

export { Logo, Navbar, AuthButton };