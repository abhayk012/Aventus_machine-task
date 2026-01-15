import { useDataContext } from "../../contexts/DataContext";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  columns?: number;
  gap?: string;
  className?: string;
}

export function ProductGrid({
  columns = 3,
  gap = "1.5rem",
  className = "",
}: ProductGridProps) {
  const { products } = useDataContext();

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, 300px), 1fr))`,
    gap,
  };

  return (
    <div className={`product-grid ${className}`} style={gridStyle}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
