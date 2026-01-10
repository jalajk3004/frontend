"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import type { Feature } from "@/types/feature";
import { useEffect, useRef } from "react";
import { FEATURE_MODAL_CONTENT } from "./modals/registry";



interface FeatureModalProps {
  feature: Feature | null;
  onClose: () => void;
}

export function AnimatedModalDemo({ feature, onClose }: FeatureModalProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (feature) {
      triggerRef.current?.click();
    }
  }, [feature]);
  if (!feature || feature.openMode === "direct") {
    return null;
  }


  const modalContent = FEATURE_MODAL_CONTENT[feature.key];

  return (
    <Modal>
      <ModalTrigger>
      <div ref={triggerRef} className="hidden w-full cursor-pointer" />
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl font-bold text-center mb-4">
            {feature.title}
            
          </h4>
          <div className="py-4">
            {modalContent}
          </div>

          
        </ModalContent>

    
      </ModalBody>
    </Modal>
  );
}
