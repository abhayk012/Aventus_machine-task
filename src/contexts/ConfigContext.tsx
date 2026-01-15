import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { appConfig } from "../config/app.config";
import type { AppConfig, ThemeConfig } from "../config/types";

interface ConfigContextValue {
  config: AppConfig;
  currentTheme: ThemeConfig;
  themeName: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

interface ConfigProviderProps {
  children: ReactNode;
}

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [themeName, setThemeName] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark"
      ? saved
      : appConfig.defaultTheme;
  });

  const currentTheme = appConfig.themes[themeName];

  useEffect(() => {
    localStorage.setItem("theme", themeName);

    // Apply theme colors to CSS custom properties
    const root = document.documentElement;
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    Object.entries(currentTheme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    Object.entries(currentTheme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });

    Object.entries(currentTheme.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
  }, [themeName, currentTheme]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (theme: "light" | "dark") => {
    setThemeName(theme);
  };

  const value: ConfigContextValue = {
    config: appConfig,
    currentTheme,
    themeName,
    toggleTheme,
    setTheme,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export function useConfigContext() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfigContext must be used within ConfigProvider");
  }
  return context;
}
