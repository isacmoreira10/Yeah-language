import { ButtonHTMLAttributes } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "w-full h-11 text-base rounded-2xl transition-all duration-300",

  variants: {
    variant: {
      primary: [
        "bg-green-secondary/90 text-white hover:bg-green-dark focus:bg-green-dark ",
        "font-bold shadow-button-primary",
        "active:animate-animation-pulse",
      ],
      secondary: [
        "bg-transparent shadow-button-secondary",
        "border-2 border-gray-primary",
        "text-gray-secondary font-bold text-sm",
        "active:animate-animation-pulse",
      ],
      error: [
        "bg-error-button text-white hover:bg-red-dark focus:bg-red-dark ",
        "shadow-button-error font-bold active:animate-animation-pulse",
      ],
    },
    typeButton: {
      outline: "w-full font-bold active:animate-animation-pulse",
    },
  },

  compoundVariants: [
    {
      variant: "error",
      typeButton: "outline",
      class:
        "bg-transparent border-none shadow-none text-error-button hover:bg-transparent focus:bg-transparent",
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export function Button({ variant, typeButton, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, typeButton })} />;
}
