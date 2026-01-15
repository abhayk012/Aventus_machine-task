import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  // Base classes for all buttons (layout, transition, font)
  const baseClasses =
    "cursor-pointer inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant classes (colors, borders)
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary:
      "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  // Size classes - EDIT HERE to change padding
  const sizeClasses = {
    sm: "p-2 text-sm min-w-[80px]",
    md: "p-3 text-base min-w-[120px]",
    lg: "p-4 text-lg min-w-[160px]",
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  return (
    <button type={type} onClick={onClick} className={`${buttonClasses}`}>
      {children}
    </button>
  );
}
