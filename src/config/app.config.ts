import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  appName: "ConfigDrive",

  navigation: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Profile", path: "/profile" },
  ],

  defaultTheme: "light",

  themes: {
    light: {
      name: "light",
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#f59e0b",
        background: "#ffffff",
        surface: "#f9fafb",
        text: "#111827",
        textSecondary: "#6b7280",
        border: "#e5e7eb",
        success: "#10b981",
        error: "#ef4444",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        full: "9999px",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
    },
    dark: {
      name: "dark",
      colors: {
        primary: "#60a5fa",
        secondary: "#a78bfa",
        accent: "#fbbf24",
        background: "#111827",
        surface: "#1f2937",
        text: "#f9fafb",
        textSecondary: "#9ca3af",
        border: "#374151",
        success: "#34d399",
        error: "#f87171",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        full: "9999px",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
    },
  },

  pages: [
    {
      id: "home",
      title: "Home",
      path: "/",
      layout: {
        maxWidth: "1280px",
        padding: "2rem",
      },
      sections: [
        {
          type: "hero",
          props: {
            title: "Welcome to ConfigDrive",
            subtitle:
              "A fully config-driven React application where UI structure, content, and styles are controlled by configuration",
            buttonText: "Explore Products",
            buttonLink: "/products",
          },
          style: {
            padding: "4rem 0",
            textColor: "text-gray-900",
          },
        },
        {
          type: "container",
          style: {
            padding: "3rem 0",
          },
          children: [
            {
              type: "grid",
              props: {
                columns: 3,
                gap: "2rem",
                items: [
                  {
                    title: "Config-Driven",
                    description:
                      "All UI structure and content defined in a single configuration file",
                    icon: "⚙️",
                  },
                  {
                    title: "Reusable Components",
                    description:
                      "Generic components that adapt based on configuration props",
                    icon: "🧩",
                  },
                  {
                    title: "Theme Support",
                    description:
                      "Switch between light and dark themes seamlessly",
                    icon: "🎨",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "products",
      title: "Products",
      path: "/products",
      layout: {
        maxWidth: "1280px",
        padding: "2rem",
      },
      sections: [
        {
          type: "container",
          style: {
            padding: "2rem 0",
          },
          children: [
            {
              type: "card",
              props: {
                title: "Our Products",
                description: "Browse our collection of premium tech products",
              },
              style: {
                margin: "0 0 2rem 0",
              },
            },
            {
              type: "productGrid",
              props: {
                columns: 3,
                gap: "1.5rem",
              },
            },
          ],
        },
      ],
    },
    {
      id: "profile",
      title: "Profile",
      path: "/profile",
      layout: {
        maxWidth: "1024px",
        padding: "2rem",
      },
      sections: [
        {
          type: "container",
          style: {
            padding: "2rem 0",
          },
          children: [
            {
              type: "profileSection",
              props: {
                showStats: true,
                showBio: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
