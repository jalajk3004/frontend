"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import type { Feature } from "@/types/feature";
import { useEffect, useRef } from "react";



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

  if (!feature) return null;

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

          
        </ModalContent>

        <ModalFooter className="gap-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="default">
            Use this
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
