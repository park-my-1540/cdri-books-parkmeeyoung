import clsx from "clsx";
import { forwardRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      fullWidth,
      className,
      ...props
    },
    ref
  ) => {
    const base = "rounded-lg";
    const variantStyle = {
      primary: "bg-primary text-white",
      secondary: "bg-lightGray text-black",
      ghost: "text-textSubtitle border border-bg-textSubtitle rounded-lg",
    };

    const sizeStyle = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-3 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10 p-2",
    };

    return (
      <button
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
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
