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

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio con carrusel y enlace al formulario |
| `/pre-reserva` | Formulario de pre-reserva con validación |

## Decisiones técnicas

- **Sin librerías de UI externas** (MUI, Chakra, shadcn): componentes custom con Tailwind para mayor control del diseño.
- **Componentes de formulario custom** (`CustomSelect`, `CustomCheckbox`, `CustomRadio`): evitan estilos nativos de iOS y mantienen consistencia visual.
- **API simulada**: el cliente en `api/` usa un adapter falso; no se realizan llamadas reales. Pensado para sustituirse por un backend real.
- **Fuentes**: Mena Grotesk y Nunito cargadas con `next/font`.
