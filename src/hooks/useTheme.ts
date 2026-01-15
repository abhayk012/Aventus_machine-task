import { useConfigContext } from "../contexts/ConfigContext";
import type { ThemeConfig } from "../config/types";

/**
 * Custom hook for theme management
 * Handles theme switching and provides current theme values
 */
export function useTheme() {
  const { currentTheme, themeName, toggleTheme, setTheme } = useConfigContext();

  const getColor = (colorKey: keyof ThemeConfig["colors"]): string => {
    return currentTheme.colors[colorKey];
  };

  const getSpacing = (spacingKey: keyof ThemeConfig["spacing"]): string => {
    return currentTheme.spacing[spacingKey];
  };

  const getBorderRadius = (
    radiusKey: keyof ThemeConfig["borderRadius"]
  ): string => {
    return currentTheme.borderRadius[radiusKey];
  };

  const getFontSize = (sizeKey: keyof ThemeConfig["fontSize"]): string => {
    return currentTheme.fontSize[sizeKey];
  };

  const isDark = themeName === "dark";

  return {
    theme: currentTheme,
    themeName,
    isDark,
    toggleTheme,
    setTheme,
    getColor,
    getSpacing,
    getBorderRadius,
    getFontSize,
  };
}
