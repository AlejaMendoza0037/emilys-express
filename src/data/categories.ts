import type { Category } from "../types";

// El "name" debe coincidir EXACTO con el "category" de los productos.
// TypeScript lo revisa por ti gracias al tipo CategoryName.
export const categories: Category[] = [
  { name: "Máquinas y Herramientas", image: "/images/maquinasyherramientas.jpg" },
  { name: "Cuidado Capilar", image: "/images/cuidadocapilar.jpg" },
  { name: "Uñas y Manos", image: "/images/unasymanos.jpg" },
  { name: "Cuidado Corporal", image: "/images/cuidadocorporal.jpg" },
  { name: "Barbería", image: "/images/barberia.jpg" },
  { name: "Otros", image: "/images/otros.jpg" },
];
