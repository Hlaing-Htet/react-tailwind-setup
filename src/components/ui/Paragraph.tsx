import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../utils/TailwindClass";

export const paragraphVariants = cva("", {
  variants: {
    size: {
      default: "text-xs md:text-sm xl:text-base ",
      mediun: " text-sm md:text-base xl:text-lg ",
      large: " text-lg md:text-xl xl:text-2xl ",
      small1: "text-[12px] md:text-[14px] xl:text-sm",
      small2: "text-[10px] xl:text-xs",
    },
    opacity: {
      opacity25: "opacity-25",
      opacity50: "opacity-50",
      opacity75: "opacity-75",
      opacity100: "opacity-100",
    },

    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
      justify: "text-justify",
    },
  },

  defaultVariants: {
    size: "default",
    opacity: "opacity75",
    align: "start",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, align, opacity, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, align, opacity, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
