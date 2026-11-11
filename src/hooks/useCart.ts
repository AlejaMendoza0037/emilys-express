import { useReducer } from "react";
import type { CartLine, Product } from "../types";

// El estado del carrito es un objeto { idProducto: cantidad }.
type CartState = Record<number, number>;

// Una "unión de tipos": una acción solo puede ser una de estas tres formas.
// Si escribes dispatch({ type: "sumar" }) TypeScript marca error.
type CartAction =
  | { type: "add"; id: number }
  | { type: "decrease"; id: number }
  | { type: "remove"; id: number };

function cartReducer(state: CartState, action: CartAction): CartState {
  const { [action.id]: current = 0, ...rest } = state; // cantidad actual + el resto del carrito
  switch (action.type) {
    case "add":
      return { ...state, [action.id]: current + 1 };
    case "decrease":
      return current > 1 ? { ...state, [action.id]: current - 1 } : rest;
    case "remove":
      return rest;
  }
}

// Un "hook propio": empaqueta la lógica del carrito para usarla en cualquier componente.
export function useCart(products: Product[]) {
  const [items, dispatch] = useReducer(cartReducer, {} as CartState);

  const lines: CartLine[] = Object.entries(items).flatMap(([id, quantity]) => {
    const product = products.find((p) => p.id === Number(id));
    return product ? [{ product, quantity }] : [];
  });

  // Se CALCULAN a partir del estado; no se guardan aparte.
  const count = lines.reduce((sum, l) => sum + l.quantity, 0);
  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  return {
    lines,
    count,
    total,
    add: (id: number) => dispatch({ type: "add", id }),
    decrease: (id: number) => dispatch({ type: "decrease", id }),
    remove: (id: number) => dispatch({ type: "remove", id }),
  };
}

// El tipo del carrito se deduce solo de lo que devuelve useCart.
export type Cart = ReturnType<typeof useCart>;
