import { useEffect, useState } from "react";
import { STORE } from "../config";
import SafeImage from "./SafeImage";
import type { Category, CategoryFilter } from "../types";

// "interface" describe qué props (datos) recibe este componente y de qué tipo son.
interface HeaderProps {
  query: string;
  onQuery: (value: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  favorite: boolean;
  onToggleFavorite: () => void;
  categories: Category[];
  activeCategory: CategoryFilter;
  onSelectCategory: (name: CategoryFilter) => void;
  onReset: () => void;
}

export default function Header({
  query, onQuery, cartCount, onOpenCart, favorite, onToggleFavorite,
  categories, activeCategory, onSelectCategory, onReset,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const choose = (name: CategoryFilter) => {
    onSelectCategory(name);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <a className="brand" href="#" onClick={onReset} aria-label={`${STORE.name}, inicio`}>
          {STORE.logo ? (
            <SafeImage className="brand-logo" src={STORE.logo} alt="" width={46} height={46} />
          ) : (
            <span className="monogram">E</span>
          )}
          <span className="brand-name">
            Emilys<span>Express</span>
          </span>
        </a>

        <label className="search">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            type="search"
            aria-label="Buscar productos"
            placeholder="Buscar belleza, cuidado personal, tecnología…"
            autoComplete="off"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </label>

        <div className="header-actions">
          <button
            className={`icon-button ${favorite ? "is-on" : ""}`}
            aria-label={favorite ? "Quitar de favoritos" : "Marcar como favorito"}
            aria-pressed={favorite}
            onClick={onToggleFavorite}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </button>
          <button className="icon-button" aria-label={`Abrir carrito, ${cartCount} artículos`} onClick={onOpenCart}>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M5 7h14l1 14H4L5 7Z" />
              <path d="M8 8V6a4 4 0 0 1 8 0v2" />
            </svg>
            {cartCount > 0 && (
              // key={cartCount} reinicia la animación cada vez que el número cambia
              <span key={cartCount} className="cart-count bump">{cartCount}</span>
            )}
          </button>
          <button
            className="icon-button mobile-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>

      <nav className={`navigation ${menuOpen ? "open" : ""}`} aria-label="Navegación principal">
        <div className="categories-menu">
          <button
            className="nav-link"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((v) => !v)}
          >
            Categorías
            <svg aria-hidden="true" viewBox="0 0 24 24" className="chevron"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={() => { onReset(); setDropdownOpen(false); setMenuOpen(false); }}>
                Todas las categorías
              </button>
              {categories.map((c) => (
                <button key={c.name} onClick={() => choose(c.name)}>{c.name}</button>
              ))}
            </div>
          )}
        </div>
        <button
          className={`nav-link offers ${activeCategory === "Ofertas" ? "active" : ""}`}
          onClick={() => choose("Ofertas")}
        >
          Ofertas
        </button>
        <a className="nav-link" href="#ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</a>
      </nav>
    </>
  );
}
