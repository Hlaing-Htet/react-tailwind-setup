import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/TailwindClass";
import * as React from "react";

const buttonVariants = cva(
  "flex items-center  gap-1 justify-center  disabled:bg-grey4 disabled:cursor-not-allowed transition-all duration-100 active:-translate-y-0 ",
  {
    variants: {
      variant: {
        primary:
          " bg-primary text-white hover:text-primary hover:bg-white  hover:outline-1 hover:-outline-offset-1 hover:outline disabled:active:translate-y-0 disabled:hover:outline-none disabled:hover:text-white",
        secondary:
          " bg-secondary text-white hover:text-secondary hover:bg-white  hover:outline-1 hover:-outline-offset-1 hover:outline disabled:active:translate-y-0 disabled:hover:outline-none disabled:hover:text-white",
        outline:
          " bg-white text-primary outline -outline-offset-2 outline-primary hover:bg-primary hover:text-white",
        secondaryOutline:
          " bg-white text-secondary outline -outline-offset-2 outline-secondary hover:bg-secondary hover:text-white",

        link: "bg-transparent dark:bg-transparent underline underline-offset-4 hover:no-underline text-primary dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        text: "bg-transparent dark:bg-transparent   text-primary  hover:bg-transparent dark:hover:bg-transparent",
        tag: "bg-white text-primary  cursor-default border border-primary",
      },
      size: {
        default: " w-fit h-10 px-6",
        full: "w-full h-10",
        squle: " w-fit px-3 py-3 text-xl",
        squle1: " w-fit px-2 py-2 text-md",
        squle2: " w-fit px-1 py-1 text-sm",

        large: "h-10 px-24 w-fit",
        large1: "h-10 px-28 w-fit",
        large2: "h-10 px-32 w-fit",
        large3: "h-10 px-36 w-fit",
        large4: "h-10 px-40 w-fit",

        medium: "h-10 px-10 w-fit",
        medium1: "h-10 px-12 w-fit",
        medium2: "h-10 px-14 w-fit",
        medium3: "h-10 px-16 w-fit",
        medium4: "h-10 px-20 w-fit",

        small: "h-8 text-sm w-fit px-4",
        small1: "h-7 text-sm w-fit px-3",
        small2: "h-6 text-xs w-fit px-2",
        small3: "h-5 text-xs w-fit px-1",
      },
      rounded: {
        default: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant, isLoading, size, rounded, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
