import { useLocation } from "react-router-dom";
import { useConfig } from "./useConfig";
import type { PageConfig } from "../config/types";

/**
 * Custom hook to get configuration for the current page
 * Automatically extracts page-specific config based on current route
 */
export function usePageConfig(): PageConfig | undefined {
  const location = useLocation();
  const { getPageConfig } = useConfig();

  return getPageConfig(location.pathname);
}
