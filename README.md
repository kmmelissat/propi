# Propi

Aplicación web para explorar inmuebles y realizar pre-reservas. Incluye una página de inicio y un formulario de pre-reserva con validación.

## Stack

- **React 18**
- **Next.js 14** (App Router, enrutamiento basado en archivos)
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form** + **Yup** (validación)
- **@tabler/icons-react** (iconos)
- **Axios** (cliente HTTP para el API)

## Requisitos

- Node.js 18+ (probado con Node 20)

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd propi

# Instalar dependencias (npm o yarn)
npm install
# yarn install
```

## Variables de entorno

Copiar `.env.example` a `.env` y configurar los valores:

```bash
cp .env.example .env
```

| Variable                      | Descripción                                          | Requerido | Ejemplo                          |
| ----------------------------- | ---------------------------------------------------- | --------- | -------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | URL base absoluta (https://). Requerida para og:image y twitter:image. | No        | `https://propi-three.vercel.app` |
| `NEXT_PUBLIC_API_URL`         | URL base del API. Actualmente un adapter simulado.   | No        | `https://api.propi.com/v1`       |
| `NEXT_PUBLIC_FRONTEND_SOURCE` | Header `x-frontend-source` en las peticiones al API. | No        | `web`                            |

Para desarrollo local no es necesario configurar nada; hay valores por defecto. Para producción (Vercel), configurar en el dashboard de Vercel o en `.env.local`.

## Ejecución

```bash
# Desarrollo
npm run dev
# yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

```bash
# Build de producción
npm run build
# yarn build

# Servir build
npm start
# yarn start
```

## Estructura del proyecto

```
propi/
├── api/                 # Cliente API (instance, pre-reserva)
├── app/                  # Páginas y layout (Next.js App Router)
├── components/           # Componentes React
│   ├── pre-reserva/     # Formulario y modales
│   ├── property/        # Card, header, availability
│   ├── ui/              # CustomSelect, CustomCheckbox, etc.
│   ├── carousel/
│   └── navbar/
├── hooks/                # usePreReservaSubmit
├── lib/                  # Schemas, constantes, formatters, fonts
├── types/
└── public/
```

## Rutas

| Ruta           | Descripción                                          |
| -------------- | ---------------------------------------------------- |
| `/`            | Página de inicio con carrusel y enlace al formulario |
| `/pre-reserva` | Formulario de pre-reserva con validación             |

## Verificación de preview al compartir

Para comprobar y depurar cómo se ve el enlace al compartir en Facebook, WhatsApp, etc., se usó el [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/). Permite previsualizar las meta tags Open Graph y refrescar la caché ("Scrape Again") después de cambios.

## Decisiones técnicas

- **Sin librerías de UI externas** (MUI, Chakra, shadcn): componentes custom con Tailwind para mayor control del diseño.
- **Componentes de formulario custom** (`CustomSelect`, `CustomCheckbox`, `CustomRadio`): evitan estilos nativos de iOS y mantienen consistencia visual.
- **API simulada**: el cliente en `api/` usa un adapter falso; no se realizan llamadas reales. Pensado para sustituirse por un backend real.
- **Fuentes**: Mena Grotesk y Nunito cargadas con `next/font`.
