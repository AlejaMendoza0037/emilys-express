import { useState } from "react";
import type { ImgHTMLAttributes } from "react";

// Una <img> con "red de seguridad": si el archivo no existe o está mal escrito,
// muestra una imagen de reemplazo en vez de un ícono roto.
export default function SafeImage({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      {...rest}
      src={failed ? "/images/placeholder.svg" : src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
