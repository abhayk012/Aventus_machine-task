import { usePageConfig } from "../hooks/usePageConfig";
import { PageRenderer } from "../components/PageRenderer";

export function DynamicPage() {
  const pageConfig = usePageConfig();

  if (!pageConfig) {
    return <div>Page configuration not found</div>;
  }

  return <PageRenderer pageConfig={pageConfig} />;
}
