// Formatea números como pesos colombianos: 68500 -> "$ 68.500"
const money = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

// "(value: number): string" = recibe un número y devuelve texto.
export const formatPrice = (value: number): string => money.format(value);

// Quita tildes y mayúsculas para que "camara" encuentre "Cámara".
export const normalize = (text: string): string =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
