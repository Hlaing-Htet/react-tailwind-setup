import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/TailwindClass";
import * as React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const inputVariants = cva(
  "relative flex items-center w-full px-4 py-2 border rounded-md border-grey4",
  {
    variants: {
      size: {
        default: "text-base",
        large: "text-lg",
        small: "text-sm",
      },
      rounded: {
        default: "rounded",
        full: "rounded-full",
      },
      state: {
        active: "ring-2 ring-primary",
        error: "border-red",
        focus: "ring-2 ring-secondary",
        disabled: "  cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "default",
      rounded: "default",
    },
  }
);

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "rounded" | "placeholder"
    >,
    VariantProps<typeof inputVariants> {
  size?: "default" | "large" | "small";
  rounded?: "default" | "full";
  placeholder?: string;
  errorMessage?: string;
  active?: boolean;
  error?: boolean;
  disabled?: boolean;
  leadIcon?: React.ReactElement;
  tailIcon?: React.ReactElement;
  passwordVisible?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      state,
      rounded,
      placeholder,
      active = false,
      error = false,
      disabled,
      leadIcon,
      tailIcon,
      passwordVisible = false,
      type = "text",
      errorMessage,
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] =
      React.useState(passwordVisible);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prevState) => !prevState);
    };

    const stateClasses = [
      active ? " " : "",
      error ? "border-red" : "",
      !active && !error ? "" : "",
      disabled ? " bg-grey2 opacity-50 cursor-not-allowed" : "",
    ];

    const inputClasses = cn(
      inputVariants({
        size,
        state,
        rounded,
        className,
      }),
      stateClasses
    );

    return (
      <div className="relative">
        <div className="relative flex items-center">
          {leadIcon && <div className="absolute z-10 left-2">{leadIcon}</div>}
          <input
            className={inputClasses}
            ref={ref}
            placeholder={placeholder}
            disabled={disabled}
            type={type === "password" && isPasswordVisible ? "text" : type}
            {...props}
          />
          {type === "password" && (
            <div
              className="absolute cursor-pointer right-3"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <FiEyeOff size={18} className="text-gray-400" />
              ) : (
                <FiEye size={18} className="text-gray-400" />
              )}
            </div>
          )}
          {!type || type !== "password" ? (
            <div className="absolute pointer-events-none right-3">
              {tailIcon || null}
            </div>
          ) : null}
        </div>
        {error && errorMessage && (
          <div className="mt-2 text-sm text-red">{errorMessage}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
