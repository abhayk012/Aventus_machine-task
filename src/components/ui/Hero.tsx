import { Link } from "react-router-dom";
import { Button } from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  className = "",
}: HeroProps) {
  return (
    <div className={`hero ${className}`}>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      {buttonText && buttonLink && (
        <Link to={buttonLink}>
          <Button variant="primary" size="lg">
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
}
