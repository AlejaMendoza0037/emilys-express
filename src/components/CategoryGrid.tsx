import SafeImage from "./SafeImage";
import type { Category, CategoryFilter, CategoryName } from "../types";

interface CategoryGridProps {
  categories: Category[];
  active: CategoryFilter;
  onSelect: (name: CategoryName) => void;
  onReset: () => void;
}

export default function CategoryGrid({ categories, active, onSelect, onReset }: CategoryGridProps) {
  return (
    <section className="section" aria-labelledby="categories-title">
      <div className="section-heading">
        <h2 id="categories-title">Categorías destacadas</h2>
        <button className="see-all" onClick={onReset}>Ver todas</button>
      </div>
      <div className="grid">
        {/* .map() convierte cada categoría de la lista en una tarjeta */}
        {categories.map((c) => (
          <button
            key={c.name}
            className={`category-card ${active === c.name ? "active" : ""}`}
            onClick={() => onSelect(c.name)}
          >
            <SafeImage className="category-image" src={c.image} alt="" width={384} height={384} loading="lazy" />
            <span className="category-name">{c.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
