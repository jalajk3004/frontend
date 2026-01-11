import { AnimatedAIChat } from "../ui/animated-ai-chat";
import { X } from "lucide-react";

interface AICreativeIntelligenceModalProps {
  onClose?: () => void;
}

export function AICreativeIntelligenceModal({ onClose }: AICreativeIntelligenceModalProps) {
  console.log("AICreativeIntelligenceModal rendered");
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-black dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden m-4">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        {/* AI Chat Component */}
        <div className="w-full h-full overflow-hidden">
          <AnimatedAIChat />
        </div>
      </div>
    </div>
  );
}