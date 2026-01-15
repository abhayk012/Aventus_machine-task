import type { PageConfig } from "../config/types";
import { ComponentResolver } from "./ComponentResolver";

interface PageRendererProps {
  pageConfig: PageConfig;
}

/**
 * PageRenderer is a generic component that renders any page based on its configuration
 * This allows all pages to use the same rendering logic
 */
export function PageRenderer({ pageConfig }: PageRendererProps) {
  const { sections, layout = {} } = pageConfig;

  const pageStyle: React.CSSProperties = {
    maxWidth: layout.maxWidth || "1280px",
    margin: "0 auto",
    padding: layout.padding || "2rem",
    backgroundColor: layout.backgroundColor,
  };

  return (
    <div className="page-renderer" style={pageStyle}>
      {sections.map((section, index) => (
        <ComponentResolver key={index} config={section} />
      ))}
    </div>
  );
}
