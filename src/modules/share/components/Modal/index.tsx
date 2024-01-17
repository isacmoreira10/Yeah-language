import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalContent } from "./ModalContent";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function Modal({ children, open, onOpenChange }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
