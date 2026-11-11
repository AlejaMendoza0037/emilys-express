import { useState } from "react";
import { STORE } from "../config";

// Una foto de la galería. Si el archivo no carga, la foto desaparece (no queda un hueco roto).
function GalleryPhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </figure>
  );
}

export default function Location() {
  const query = encodeURIComponent(STORE.address);
  return (
    <>
      <section className="section location" id="ubicacion" aria-labelledby="location-title">
        <div className="location-info">
          <h2 id="location-title">Visítanos en la tienda</h2>
          <dl>
            <dt>Dirección</dt>
            <dd>{STORE.address}</dd>
            <dt>Horario</dt>
            <dd>{STORE.hours}</dd>
            <dt>Teléfono</dt>
            <dd><a href={`tel:${STORE.phone.replace(/\s/g, "")}`}>{STORE.phone}</a></dd>
          </dl>
          <div className="location-actions">
            <a className="button" href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
            <a className="button ghost" href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
        <iframe
          className="map"
          title={`Mapa de ${STORE.name}`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      {STORE.photos.length > 0 && (
        <section className="section" aria-labelledby="gallery-title">
          <div className="section-heading">
            <h2 id="gallery-title">Así es nuestro local</h2>
          </div>
          <div className="gallery">
            {STORE.photos.map((p) => (
              <GalleryPhoto key={p.src} src={p.src} alt={p.alt} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
