import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const tag = tv({
  slots: {
    container: [
      "w-fit rounded-2xl border-2 shadow-button-secondary",
      "border-2 border-gray-primary",
      "py-[0.88rem] px-[1.2rem] outline-1",
    ],
  },
  variants: {
    hasShadow: {
      false: {
        container: "shadow-none",
      },
    },
    selected: {
      true: {
        container:
          "bg-gray-primary text-gray-primary shadow-none pointer-events-none",
      },
    },
    isBlue: {
      true: {
        container:
          "bg-blue-primary text-white rounded-3xl shadow-tag-blue border-none",
      },
    },
  },
  defaultVariants: {
    hasShadow: true,
    selected: false,
  },
});

interface TagProps extends VariantProps<typeof tag> {
  children: ReactNode;
  as?: "button" | "div";
  handleClick?: () => void;
}

export function Tag({
  hasShadow,
  isBlue,
  selected,
  children,
  handleClick,
  as,
}: TagProps) {
  const { container } = tag({ hasShadow, isBlue, selected });
  const Component = as ? "div" : "button";

  return (
    <Component className={container()} onClick={handleClick}>
      {children}
    </Component>
  );
}
