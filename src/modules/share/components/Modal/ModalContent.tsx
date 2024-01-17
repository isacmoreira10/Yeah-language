import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ModalContentProps {
  children: ReactNode;
}

const modalContent = tv({
  slots: {
    overlay:
      "bg-black opacity-80 fixed bottom-0 left-0 right-0 top-0 z-0 data-[state=open]:animate-overlay-fade-in",
    content: [
      "fixed top-[50%] max-h-[85vh] translate-y-[-50%] left-[50%] translate-x-[-50%]",
      "rounded-2xl bg-white p-6",
      "w-[90vw] md:max-w-md",
      "data-[state=open]:animate-modal-content-fade-in data-[state=closed]:animate-modal-content-fade-out",
    ],
  },
});

export function ModalContent({ children }: ModalContentProps) {
  const { overlay, content } = modalContent();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={overlay()} />
      <Dialog.Content className={content()}>{children}</Dialog.Content>
    </Dialog.Portal>
  );
}
