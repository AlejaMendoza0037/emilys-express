import type { Product } from "../types";

// "Base de datos" temporal. Más adelante estos datos vendrán de tu backend (MySQL).
// Con ": Product[]" TypeScript revisa que cada producto tenga los campos correctos.
// Cuando tengas el inventario real, agrega stock: 10 (por ejemplo) a cada producto.
export const products: Product[] = [
  {
    id: 0,
    name: "Combo Plancha + Cepillo secador",
    price: 75000,
    category: "Máquinas y Herramientas",
    image: "/images/plancha-cepillo-alisador.jpeg",
  },
  {
    id: 1,
    name: "Pinzas Ondas de Sirena",
    price: 60000,
    category: "Máquinas y Herramientas",
    image: "/images/encrespadora.jpeg",
  },
  {
    id: 2,
    name: "Plancha KeratinTherapy",
    price: 70000,
    oldPrice: 100000, // oferta
    category: "Máquinas y Herramientas",
    image: "/images/plancha.jpeg",
  },
  {
    id: 3,
    name: "Shampoo Lissia Equino",
    price: 38000,
    category: "Cuidado Capilar",
    image: "/images/lissiaequino.jpg",
  },
  {
    id: 4,
    name: "Kit de Cuidado Facial",
    price: 68500,
    oldPrice: 84500,
    category: "Cuidado Corporal",
    image: "/images/producto-11-kit-facial.jpg",
  },
  {
    id: 5,
    name: "Máquina Patillera 3 en 1",
    price: 55000,
    category: "Barbería",
    image: "/images/barbera.jpeg",
  },
];
