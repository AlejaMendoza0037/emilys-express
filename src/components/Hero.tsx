import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { promos } from "../data/promos";
import type { CategoryFilter, PromoAction } from "../types";

interface HeroProps {
  onSelectCategory: (name: CategoryFilter) => void;
}

interface PromoButtonProps extends HeroProps {
  action: PromoAction;
  label: string;
}

// El botón cambia según la acción: un enlace (#ubicacion) o un filtro de categoría.
function PromoButton({ action, label, onSelectCategory }: PromoButtonProps) {
  if (action.kind === "link") {
    return <a className="button" href={action.href}>{label}</a>;
  }
  const { value } = action;
  return (
    <button className="button" onClick={() => onSelectCategory(value)}>
      {label}
    </button>
  );
}

// Si la persona pidió "menos animación" en su sistema, no cambiamos solas las diapositivas.
const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero({ onSelectCategory }: HeroProps) {
  return (
    <section className="hero" aria-label="Promociones">
      {/* Título principal de la página, visible solo para lectores de pantalla y buscadores */}
      <h1 className="sr-only">Emilys Express, belleza, cuidado personal y herramientas</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        pagination={{ clickable: true }}
        autoplay={reduceMotion ? false : { delay: 5500, disableOnInteraction: true, pauseOnMouseEnter: true }}
        loop
        speed={700}
        slidesPerView={1}
      >
        {promos.map((promo, i) => (
          <SwiperSlide key={promo.id}>
            <div className={`promo-slide variant-${i % 2}`}>
              <div className="promo-content">
                <p className="eyebrow">{promo.eyebrow}</p>
                <p className="promo-title">{promo.title}</p>
                <p className="hero-description">{promo.description}</p>
                <PromoButton action={promo.action} label={promo.cta} onSelectCategory={onSelectCategory} />
              </div>
              <span className="promo-mark" aria-hidden="true">E</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
