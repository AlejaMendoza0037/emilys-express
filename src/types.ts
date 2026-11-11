// Aquí definimos la "forma" de nuestros datos. TypeScript avisa si te equivocas.

// Los nombres de categoría válidos. Si escribes uno distinto (con una letra de más,
// con un espacio...), el editor lo marca en rojo y `npm run build` falla.
export type CategoryName =
  | "Máquinas y Herramientas"
  | "Cuidado Capilar"
  | "Uñas y Manos"
  | "Cuidado Corporal"
  | "Barbería"
  | "Otros";

// Lo que se puede elegir como filtro: una categoría, "Ofertas" o "" (todo).
export type CategoryFilter = CategoryName | "Ofertas" | "";

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number; // opcional: solo los productos en oferta lo tienen
  stock?: number; // opcional: cuando venga de MySQL, aquí llega el inventario
  category: CategoryName;
  image: string;
}

export interface Category {
  name: CategoryName;
  image: string;
}

export interface CartLine {
  product: Product;
  quantity: number;
}

// Lo que hace el botón de una promoción: filtrar una categoría o ir a un enlace.
export type PromoAction =
  | { kind: "category"; value: CategoryFilter }
  | { kind: "link"; href: string };

export interface Promo {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  action: PromoAction;
}
