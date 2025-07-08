import clsx from "clsx";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "icon";
  fullWidth?: boolean;
  className?: string;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      fullWidth,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg";
    const variantStyle = {
      primary: "bg-primary text-white",
      secondary: "bg-lightGray text-black",
      ghost: "text-textSubtitle border border-bg-textSubtitle rounded-lg",
    };

    const sizeStyle = {
      sm: "h-9 px-3 text-sm",
      default: "h-12 min-h-[3rem] max-h-[3rem] text-base",
      icon: "h-10 w-10 p-2",
    };

    return (
      <Component
        ref={ref}
        {...props}
        className={clsx(
          base,
          variantStyle[variant],
          sizeStyle[size],
          fullWidth && "w-full",
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
export default Button;
