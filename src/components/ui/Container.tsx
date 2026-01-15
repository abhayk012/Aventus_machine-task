import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: string;
  padding?: string;
  className?: string;
}

export function Container({
  children,
  maxWidth,
  padding,
  className = "",
}: ContainerProps) {
  const style = {
    maxWidth: maxWidth || "var(--max-width, 1280px)",
    padding: padding || "var(--spacing-md)",
  };

  return (
    <div className={`container-component ${className}`} style={style}>
      {children}
    </div>
  );
}
