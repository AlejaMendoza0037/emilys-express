import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import ProductGrid from "./components/ProductGrid";
import Location from "./components/Location";
import Footer from "./components/Footer";
import CartDialog from "./components/CartDialog";
import { products } from "./data/products";
import { categories } from "./data/categories";
import { normalize } from "./utils/format";
import { useCart } from "./hooks/useCart";
import type { CategoryFilter, Product } from "./types";

export default function App() {
  // useState guarda datos que cambian. Cuando cambian, React vuelve a dibujar la pantalla.
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<CategoryFilter>(""); // "" = todas, "Ofertas" = con descuento
  const [favorite, setFavorite] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");
  const cart = useCart(products);
  const productsRef = useRef<HTMLElement>(null);

  // useMemo: recalcula la lista solo cuando cambian la búsqueda o la categoría.
  const visibleProducts = useMemo<Product[]>(
    () =>
      products.filter(
        (p) =>
          normalize(p.name).includes(normalize(query)) &&
          (!category ||
            (category === "Ofertas" ? !!p.oldPrice : p.category === category)),
      ),
    [query, category],
  );

  // useEffect: efecto secundario. Aquí, ocultar el aviso 2 segundos después de mostrarlo.
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const selectCategory = (name: CategoryFilter) => {
    setCategory(name);
    setQuery("");
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const reset = () => {
    setCategory("");
    setQuery("");
  };
  const addToCart = (product: Product) => {
    cart.add(product.id);
    setToast(`${product.name} se añadió al carrito`);
  };

  return (
    <div className="store">
      <Header
        query={query}
        onQuery={setQuery}
        cartCount={cart.count}
        onOpenCart={() => setCartOpen(true)}
        favorite={favorite}
        onToggleFavorite={() => setFavorite((v) => !v)}
        categories={categories}
        activeCategory={category}
        onSelectCategory={selectCategory}
        onReset={reset}
      />
      <main>
        <Hero onSelectCategory={selectCategory} />
        <CategoryGrid
          categories={categories}
          active={category}
          onSelect={selectCategory}
          onReset={reset}
        />
        <ProductGrid
          sectionRef={productsRef}
          products={visibleProducts}
          onAdd={addToCart}
          onReset={reset}
        />
        <Location />
      </main>
      <Footer />
      <CartDialog
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
      />
      <div className={`toast ${toast ? "visible" : ""}`} role="status">
        {toast}
      </div>
    </div>
  );
}
