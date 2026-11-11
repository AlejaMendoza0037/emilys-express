import SafeImage from "./SafeImage";
import { formatPrice } from "../utils/format";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  // Si el producto trae stock (cuando conectemos MySQL), lo usamos. Si no, asumimos que hay.
  const soldOut = product.stock !== undefined && product.stock <= 0;
  const lowStock = product.stock !== undefined && product.stock > 0 && product.stock <= 5;

  return (
    <article className="product-card">
      <div className="product-media">
        <SafeImage className="product-image" src={product.image} alt={product.name} width={384} height={384} loading="lazy" />
        {product.oldPrice && <span className="sale-badge">Oferta</span>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price-row">
          <span className="price">{formatPrice(product.price)}</span>
        </div>
        <div className="previous-price">
          {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
          {lowStock && <span className="stock-note">Quedan {product.stock}</span>}
        </div>
        <button className="button add-button" disabled={soldOut} onClick={() => onAdd(product)}>
          {soldOut ? "Agotado" : "Añadir al carrito"}
        </button>
      </div>
    </article>
  );
}
