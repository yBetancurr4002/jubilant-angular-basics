# jubilant-angular-basics

## Arquitectura

```css
src/
├── app/
│   ├── core/              ← Servicios globales (auth, logger, interceptors, guards)
│   ├── shared/            ← Componentes reutilizables (buttons, pipes, directives)
│   ├── features/          ← Módulos de funcionalidades (dominio de negocio)
│   │   ├── home/
│   │   ├── dashboard/
│   │   └── users/
│   ├── layout/            ← Componentes de diseño (navbar, sidebar, footer)
│   ├── app-routing.module.ts
│   ├── app.component.*
│   └── app.module.ts
├── assets/
│   └── i18n/              ← Archivos de traducción (para internacionalización)
├── environments/          ← env.dev.ts / env.prod.ts
└── main.ts
```