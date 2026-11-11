import type { Promo } from "../types";

// Las diapositivas del carrusel principal. Para cambiar un mensaje, edita el texto.
// Para agregar otra promoción, copia un bloque { ... } y cambia el id.
export const promos: Promo[] = [
  {
    id: 1,
    eyebrow: "Ofertas de la temporada",
    title: "Precios especiales en productos seleccionados",
    description: "Aprovecha las ofertas en planchas, kits y más mientras duren.",
    cta: "Ver ofertas",
    action: { kind: "category", value: "Ofertas" },
  },
  {
    id: 2,
    eyebrow: "Cuidado capilar",
    title: "Shampoos y tratamientos para tu cabello",
    description: "Productos de calidad para un cabello sano y con brillo.",
    cta: "Ver cuidado capilar",
    action: { kind: "category", value: "Cuidado Capilar" },
  },
  {
    id: 3,
    eyebrow: "Máquinas y herramientas",
    title: "Equipos para peluquería y barbería",
    description: "Planchas, pinzas, patilleras y todo lo que tu trabajo necesita.",
    cta: "Ver herramientas",
    action: { kind: "category", value: "Máquinas y Herramientas" },
  },
  {
    id: 4,
    eyebrow: "Visítanos",
    title: "Estamos esperándote en la tienda",
    description: "Encuentra la dirección, el horario y escríbenos por WhatsApp.",
    cta: "Cómo llegar",
    action: { kind: "link", href: "#ubicacion" },
  },
];
