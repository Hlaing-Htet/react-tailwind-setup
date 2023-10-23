import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/TailwindClass";

const headingVariants = cva("text-black dark:text-grey1 ", {
  variants: {
    size: {
      default: " text-lg md:text-xl xl:text-2xl font-bold",
      large1: "text-xl md:text-2xl xl:text-3xl font-bold",
      large2: "text-2xl md:text-3xl xl:text-4xl font-bold",
      large3: " text-3xl md:text-4xl xl:text-5xl font-bold",
      small1: " text-md md:text-lg xl:text-xl font-semibold",
      small2: " text-sm md:text-md xl:text-lg font-semibold",
      small3: "text-sm md:text-sm xl:text-base font-medium",
      small4: "text-xs md:text-sm  font-medium",
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
    },
  },
  defaultVariants: {
    size: "default",
    align: "start",
    opacity: "opacity100",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.memo(
  React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, size, align, opacity, children, ...props }, ref) => {
      return (
        <h1
          ref={ref}
          {...props}
          className={cn(headingVariants({ size, align, opacity, className }))}
        >
          {children}
        </h1>
      );
    }
  )
);

export default Heading;
