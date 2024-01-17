"use client";

import { Power } from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export function LogOutButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Modal open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <Modal.Button>
        <Power size={34} weight="bold" className="text-red-400" />
      </Modal.Button>

      <Modal.Content>
        <div className="flex flex-col items-center w-full gap-4">
          {/* <Image
            src="/birdQueAindaNaoTenho"
            alt="bird"
            width={120}
            height={120}
          /> */}
          <span className="text-center font-bold text-xl text-gray-800">
            Are you sure you want to leave?
          </span>

          <Button onClick={() => setOpen(false)}>Learn more</Button>

          <Button variant="error" typeButton="outline">
            <a href="/api/auth/logout"> Leave</a>
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}
