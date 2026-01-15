# Config-Driven React Application

A modular, config-driven React application built with Vite, TypeScript, and Tailwind CSS where UI structure, content, and styles are controlled by a centralized configuration file.

## 🎯 Project Overview

This application demonstrates a clean, scalable architecture where pages are rendered dynamically based on configuration rather than hardcoded JSX. The entire UI structure, content, and styling can be modified by editing a single configuration file.

## ✨ Key Features

- **Config-Driven Architecture**: All pages, components, and styling defined in `src/config/app.config.ts`
- **Theme Switching**: Toggle between light and dark themes with localStorage persistence
- **Reusable Components**: Generic, prop-driven components that adapt based on configuration
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Custom Hooks**: Three custom hooks encapsulating configuration and theme logic
- **Component Resolver**: Clean mapping system from config types to React components
- **Zero Hardcoding**: No page-specific logic in components

## 🏗️ Architecture

### Folder Structure

```
src/
├── config/
│   ├── app.config.ts          # Main configuration (pages, theme, navigation)
│   └── types.ts               # TypeScript type definitions
├── contexts/
│   ├── ConfigContext.tsx      # Configuration provider
│   └── DataContext.tsx        # Mock data provider
├── hooks/
│   ├── useConfig.ts           # Config access hook
│   ├── useTheme.ts            # Theme management hook
│   └── usePageConfig.ts       # Current page config hook
├── components/
│   ├── ComponentResolver.tsx  # Maps config types to components
│   ├── PageRenderer.tsx       # Generic page renderer
│   ├── ui/                    # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   ├── Grid.tsx
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProfileSection.tsx
│   └── layout/
│       ├── Navigation.tsx
│       └── Layout.tsx
├── pages/
│   ├── Home.tsx               # Uses PageRenderer
│   ├── Products.tsx           # Uses PageRenderer
│   └── Profile.tsx            # Uses PageRenderer
├── data/
│   └── mockData.ts            # Mock products and user data
├── routes.tsx                 # React Router configuration
├── main.tsx                   # App entry point
└── index.css                  # Global styles with CSS custom properties
```

### Core Concepts

#### 1. **Configuration-First Design**

All UI structure is defined in `src/config/app.config.ts`:

```typescript
{
  pages: [
    {
      id: "home",
      path: "/",
      sections: [
        {
          type: "hero",
          props: { title: "...", subtitle: "..." },
        },
      ],
    },
  ];
}
```

#### 2. **Component Resolver**

Maps configuration component types to actual React components:

```typescript
switch (type) {
  case "hero":
    return <Hero {...props} />;
  case "grid":
    return <Grid {...props} />;
  // ...
}
```

#### 3. **Context Providers**

- **ConfigContext**: Provides app configuration and theme management
- **DataContext**: Provides mock data (products, user profile)

#### 4. **Custom Hooks**

- **useConfig()**: Access configuration with helper methods
- **useTheme()**: Theme switching and theme value getters
- **usePageConfig()**: Get config for current route automatically

#### 5. **Styling Strategy**

- **Tailwind CSS**: Component-level utility classes
- **Plain CSS**: Global styles and CSS custom properties in `index.css`
- **CSS Variables**: Theme values injected dynamically from config

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The app will be available at `http://localhost:5173/`

## 📄 Pages

1. **Home** (`/`) - Hero section with feature cards
2. **Products** (`/products`) - Product grid with 12 sample products
3. **Profile** (`/profile`) - User profile with stats and bio

## 🎨 Theme Switching

Click the theme toggle button (🌙/☀️) in the navigation to switch between light and dark themes. The preference is saved to localStorage.

## ➕ Adding a New Page

To add a new page, simply edit `src/config/app.config.ts`:

```typescript
{
  pages: [
    // ... existing pages
    {
      id: 'about',
      title: 'About',
      path: '/about',
      sections: [
        {
          type: 'container',
          children: [
            {
              type: 'card',
              props: {
                title: 'About Us',
                description: 'Learn more about our company'
              }
            }
          ]
        }
      ]
    }
  ],
  navigation: [
    // ... existing nav items
    { label: 'About', path: '/about' }
  ]
}
```

Then add the route in `src/routes.tsx`:

```typescript
import { About } from "./pages/About";

// In routes:
<Route path="/about" element={<About />} />;
```

Create `src/pages/About.tsx`:

```typescript
import { usePageConfig } from "../hooks/usePageConfig";
import { PageRenderer } from "../components/PageRenderer";

export function About() {
  const pageConfig = usePageConfig();
  if (!pageConfig) return <div>Page not found</div>;
  return <PageRenderer pageConfig={pageConfig} />;
}
```

**That's it!** No component changes needed.

## 🧩 Component Types

Available component types in configuration:

- `hero` - Hero section with title, subtitle, and CTA button
- `grid` - Responsive grid layout
- `card` - Content card with title and description
- `container` - Layout container with max-width
- `productGrid` - Product listing grid
- `profileSection` - User profile display

## 🎯 Architecture Decisions

### Why TypeScript Configuration?

**Pros:**

- Type safety and IDE autocomplete
- Compile-time error checking
- Inline comments and documentation
- No runtime parsing overhead

**Cons:**

- Not runtime-editable (requires rebuild)
- Slightly more verbose than JSON

**Verdict:** Better DX and maintainability outweigh the lack of runtime editing.

### Why Separate Contexts?

**ConfigContext** and **DataContext** are separated to:

- Keep concerns isolated (config vs. data)
- Make it easier to swap data sources
- Clearer mental model for developers

### Why CSS Custom Properties + Tailwind?

- **CSS Variables**: Dynamic theming without rebuilding
- **Tailwind**: Rapid component development
- **Best of both worlds**: Theme flexibility + utility-first styling

## 🧪 Testing

The architecture supports easy testing:

```typescript
// Test custom hooks
const { result } = renderHook(() => useConfig(), {
  wrapper: ConfigProvider,
});

// Test component resolver
const config = { type: "hero", props: { title: "Test" } };
render(<ComponentResolver config={config} />);
```

## 📝 License

This project is a demonstration/assessment project.

## 🙏 Acknowledgments

Built as part of a React Modular UI Assessment focusing on config-driven architecture and clean code principles.
