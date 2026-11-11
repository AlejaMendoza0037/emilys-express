# Emilys Express – Tienda en React

Práctica 2. Tienda de belleza y tecnología hecha con **React + TypeScript + Vite**, diseño negro y dorado.

## Comandos

```bash
npm install      # descarga las librerías (solo la primera vez)
npm run dev      # servidor local en http://localhost:5173
npm run typecheck # revisa los tipos sin compilar
npm run build    # revisa tipos y genera dist/ listo para producción
npm run preview  # prueba el build localmente
```

## Estructura

| Ruta | Qué hace |
|---|---|
| `index.html` | Página base con un `<div id="root">` vacío. React la llena. |
| `src/main.tsx` | Punto de entrada: monta `<App />`. |
| `src/App.tsx` | Componente raíz: guarda el estado (búsqueda, categoría, carrito) y arma la página. |
| `src/components/` | Piezas de la interfaz: Header, Hero, CategoryGrid, ProductGrid, ProductCard, Location, CartDialog, Footer. |
| `src/types.ts` | **Tipos**: la forma de un Producto, Categoría y línea de carrito. |
| `src/hooks/useCart.ts` | Lógica del carrito (agregar, quitar, total). |
| `src/data/` | Productos y categorías (luego vendrán del backend MySQL). |
| `src/config.ts` | **Datos de la tienda: dirección, horario, teléfono, WhatsApp.** |
| `src/styles.css` | Todo el diseño. Los colores están en `:root`. |
| `public/images/` | Imágenes. Se sirven como `/images/archivo.jpg`. |
| `tsconfig.json` | Reglas de TypeScript (modo estricto). |
| `.github/workflows/ci.yml` | CI: revisa tipos y compila el proyecto en cada push a GitHub. |

## Antes de publicar: pendientes
1. Poner la **dirección real** en `src/config.ts` (el mapa se actualiza solo).
2. Poner teléfono y WhatsApp reales.
3. Cambiar las fotos de productos por fotos de belleza (ver `src/data/products.ts`).

## Subir a GitHub
```bash
git init
git add .
git commit -m "Tienda Emilys Express en React"
git branch -M main
# crea un repositorio vacío en github.com y copia su URL:
git remote add origin https://github.com/TU-USUARIO/emilys-express.git
git push -u origin main
```

## Desplegar gratis en Vercel
1. Entra a vercel.com e inicia sesión con tu cuenta de GitHub.
2. **Add New → Project** y elige el repositorio `emilys-express`.
3. Vercel detecta Vite solo (Build: `npm run build`, Output: `dist`). Pulsa **Deploy**.
4. Obtienes un enlace `https://emilys-express.vercel.app`.
5. Desde ahora, cada `git push` a `main` vuelve a desplegar automáticamente (eso es CI/CD).
