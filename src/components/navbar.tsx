import {  Home,  Settings,  Mail, User, FileText, Lock,  BadgeDollarSignIcon, MessageSquareIcon } from "lucide-react";
import { ExpandableTabs } from "./ui/expandable-tabs";

function Navbar() {
  const tabs = [
    { title: "Home", icon: Home },
    { title: "Features", icon: Settings },
    { title: "Pricing", icon: BadgeDollarSignIcon },
    { title: "Contact", icon: MessageSquareIcon },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}

function CustomColorDemo() {
  const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs 
        tabs={tabs} 
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800" 
      />
    </div>
  );
}

export { Navbar, CustomColorDemo };