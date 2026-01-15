import { Link, useLocation } from "react-router-dom";
import { useConfig } from "../../hooks/useConfig";
import { useTheme } from "../../hooks/useTheme";

export function Navigation() {
  const { navigation, appName } = useConfig();
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          {appName}
        </Link>

        <div className="nav-links">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
