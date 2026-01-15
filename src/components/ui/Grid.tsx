import { ReactNode } from "react";

interface GridProps {
  children?: ReactNode;
  columns?: number;
  gap?: string;
  items?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  className?: string;
}

export function Grid({
  children,
  columns = 3,
  gap = "1.5rem",
  items,
  className = "",
}: GridProps) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${
      300 / columns
    }px), 1fr))`,
    gap,
  };

  if (items) {
    return (
      <div className={`grid-component ${className}`} style={gridStyle}>
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            {item.icon && <div className="grid-item-icon">{item.icon}</div>}
            <h3 className="grid-item-title">{item.title}</h3>
            <p className="grid-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid-component ${className}`} style={gridStyle}>
      {children}
    </div>
  );
}
