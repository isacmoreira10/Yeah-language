import { tv } from "tailwind-variants";
import { Normal } from "./Normal";
import { ReactNode } from "react";
import { Success } from "./Success";
import { Error } from "./Error";

export enum FooterVariant {
  NORMAL = "normal",
  SUCCESS = "success",
  ERROR = "error",
}

interface FooterProps {
  children: ReactNode;
  variant?: FooterVariant;
}

const footer = tv({
  base: "border-t-2 h-32 fixed bottom-0 right-0 left-0",
  variants: {
    variant: {
      normal: "bg-white",
      success: "bg-success",
      error: "bg-red-light",
    },
  },

  defaultVariants: {
    variant: "normal",
  },
});

export function Footer({ children, variant }: FooterProps) {
  return <div className={footer({ variant })}>{children}</div>;
}

Footer.Normal = Normal;
Footer.Success = Success;
Footer.Error = Error;
