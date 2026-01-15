import type { ComponentConfig } from "../config/types";
import { Hero } from "./ui/Hero";
import { Grid } from "./ui/Grid";
import { Card } from "./ui/Card";
import { Container } from "./ui/Container";
import { ProductGrid } from "./ui/ProductGrid";
import { ProfileSection } from "./ui/ProfileSection";

interface ComponentResolverProps {
  config: ComponentConfig;
}

/**
 * ComponentResolver maps configuration component types to actual React components
 * This is the core mechanism that enables config-driven rendering
 */
export function ComponentResolver({ config }: ComponentResolverProps) {
  const { type, props = {}, style = {}, children } = config;

  // Convert style config to className and inline styles
  const className = props.className || "";
  const inlineStyles: React.CSSProperties = {};

  if (style.padding) inlineStyles.padding = style.padding;
  if (style.margin) inlineStyles.margin = style.margin;
  if (style.backgroundColor)
    inlineStyles.backgroundColor = style.backgroundColor;
  if (style.borderRadius) inlineStyles.borderRadius = style.borderRadius;
  if (style.gap) inlineStyles.gap = style.gap;
  if (style.maxWidth) inlineStyles.maxWidth = style.maxWidth;

  // Map component types to React components
  switch (type) {
    case "hero":
      return (
        <div style={inlineStyles} className={className}>
          <Hero
            {...(props as {
              title: string;
              subtitle: string;
              buttonText?: string;
              buttonLink?: string;
            })}
          />
        </div>
      );

    case "grid":
      return (
        <div style={inlineStyles} className={className}>
          <Grid {...props}>
            {children?.map((child, index) => (
              <ComponentResolver key={index} config={child} />
            ))}
          </Grid>
        </div>
      );

    case "card":
      return (
        <div style={inlineStyles} className={className}>
          <Card {...props}>
            {children?.map((child, index) => (
              <ComponentResolver key={index} config={child} />
            ))}
          </Card>
        </div>
      );

    case "container":
      return (
        <Container
          maxWidth={style.maxWidth}
          padding={style.padding}
          className={className}
        >
          <div style={inlineStyles}>
            {children?.map((child, index) => (
              <ComponentResolver key={index} config={child} />
            ))}
          </div>
        </Container>
      );

    case "productGrid":
      return (
        <div style={inlineStyles} className={className}>
          <ProductGrid {...props} />
        </div>
      );

    case "profileSection":
      return (
        <div style={inlineStyles} className={className}>
          <ProfileSection {...props} />
        </div>
      );

    default:
      console.warn(`Unknown component type: ${type}`);
      return null;
  }
}
