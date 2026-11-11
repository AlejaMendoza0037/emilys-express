import type { RefObject } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  onAdd: (product: Product) => void;
  onReset: () => void;
  sectionRef: RefObject<HTMLElement>;
}

export default function ProductGrid({ products, onAdd, onReset, sectionRef }: ProductGridProps) {
  return (
    <section className="section" id="productos" ref={sectionRef} aria-labelledby="products-title">
      <div className="section-heading">
        <h2 id="products-title">Productos destacados</h2>
        <button className="see-all" onClick={onReset}>Ver todos</button>
      </div>
      <div className="grid" aria-live="polite">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
        {products.length === 0 && (
          <div className="empty">
            <p>No encontramos productos con estos filtros.</p>
            <button className="button" onClick={onReset}>Ver todos los productos</button>
          </div>
        )}
      </div>
    </section>
  );
}
