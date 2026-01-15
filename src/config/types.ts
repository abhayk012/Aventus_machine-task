// Configuration type definitions for the config-driven application

export type ComponentType =
  | "hero"
  | "grid"
  | "card"
  | "productGrid"
  | "profileSection"
  | "container";

export interface StyleConfig {
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  gap?: string;
  maxWidth?: string;
  [key: string]: string | undefined;
}

export interface ComponentConfig {
  type: ComponentType;
  props?: Record<string, any>;
  style?: StyleConfig;
  children?: ComponentConfig[];
}

export interface PageConfig {
  id: string;
  title: string;
  path: string;
  sections: ComponentConfig[];
  layout?: {
    maxWidth?: string;
    padding?: string;
    backgroundColor?: string;
  };
}

export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
  };
}

export interface NavItem {
  label: string;
  path: string;
}

export interface AppConfig {
  appName: string;
  navigation: NavItem[];
  pages: PageConfig[];
  themes: {
    light: ThemeConfig;
    dark: ThemeConfig;
  };
  defaultTheme: "light" | "dark";
}

// Data types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  joinDate: string;
  stats: {
    orders: number;
    reviews: number;
    wishlist: number;
  };
}
