import { useConfigContext } from "../contexts/ConfigContext";
import type { PageConfig } from "../config/types";

/**
 * Custom hook to access application configuration
 * Provides helper methods for getting page config and theme values
 */
export function useConfig() {
  const { config, currentTheme, themeName } = useConfigContext();

  const getPageConfig = (path: string): PageConfig | undefined => {
    return config.pages.find((page) => page.path === path);
  };

  const getPageById = (id: string): PageConfig | undefined => {
    return config.pages.find((page) => page.id === id);
  };

  return {
    config,
    theme: currentTheme,
    themeName,
    getPageConfig,
    getPageById,
    navigation: config.navigation,
    appName: config.appName,
  };
}
