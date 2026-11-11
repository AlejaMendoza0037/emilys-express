import { useEffect, useRef } from "react";
import { formatPrice } from "../utils/format";
import type { Cart } from "../hooks/useCart";

interface CartDialogProps {
  open: boolean;
  onClose: () => void;
  cart: Cart;
}

export default function CartDialog({ open, onClose, cart }: CartDialogProps) {
  // useRef = acceso directo al elemento <dialog> del navegador.
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return; // TypeScript nos obliga a comprobar que existe
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="cart-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()} /* clic en el fondo cierra */
    >
      <div className="dialog-header">
        <h2 id="cart-title">Tu carrito</h2>
        <button className="icon-button" aria-label="Cerrar carrito" onClick={onClose}>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6" /></svg>
        </button>
      </div>

      {cart.lines.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío. Añade un producto para empezar.</p>
      ) : (
        cart.lines.map(({ product, quantity }) => (
          <div className="cart-item" key={product.id}>
            <div className="cart-info">
              <span>{product.name}</span>
              <div className="qty">
                <button aria-label={`Quitar una unidad de ${product.name}`} onClick={() => cart.decrease(product.id)}>−</button>
                <span>{quantity}</span>
                <button aria-label={`Añadir una unidad de ${product.name}`} onClick={() => cart.add(product.id)}>+</button>
                <button className="remove" onClick={() => cart.remove(product.id)}>Eliminar</button>
              </div>
            </div>
            <strong>{formatPrice(product.price * quantity)}</strong>
          </div>
        ))
      )}

      <div className="cart-total">
        <span>Total</span>
        <span>{formatPrice(cart.total)}</span>
      </div>
    </dialog>
  );
}
