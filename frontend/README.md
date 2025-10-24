# Way2Go - Plataforma Integral de Gestión de Servicios Turísticos

## 🌟 Descripción

Way2Go es una plataforma web moderna y escalable que conecta usuarios, proveedores turísticos y administradores, permitiendo la publicación, reserva y gestión de experiencias turísticas desde un solo lugar.

## 🚀 Tecnologías

- **React 18** con **TypeScript 5**
- **Vite** para desarrollo y build
- **React Router DOM 7** para navegación
- **Zustand** para gestión de estado global
- **Shadcn UI** + **Tailwind CSS** para estilos
- **React i18next** para internacionalización (Español/Inglés)
- **Lucide React** para iconos
- **Motion (Framer Motion)** para animaciones

## 📁 Estructura del Proyecto

```text
/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes Shadcn UI
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Footer.tsx      # Pie de página
│   ├── SearchBar.tsx   # Barra de búsqueda avanzada
│   └── TouristSiteCard.tsx
├── layouts/            # Layouts de la aplicación
│   ├── MainLayout.tsx      # Layout público
│   └── DashboardLayout.tsx # Layout para dashboards
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Explore.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── admin/          # Páginas del administrador
│   ├── provider/       # Páginas del proveedor
│   └── user/           # Páginas del usuario
├── store/              # Estado global (Zustand)
│   ├── authStore.ts
│   └── themeStore.ts
├── types/              # Tipos TypeScript
│   └── index.ts
├── utils/              # Utilidades
│   ├── i18n.ts         # Configuración multiidioma
│   └── mockData.ts     # Datos de demostración
├── styles/
│   └── globals.css     # Estilos globales
└── App.tsx             # Componente principal

## 🎭 Roles de Usuario

### 1. **Usuario Final**
- Buscar y explorar experiencias turísticas
- Sistema de favoritos
- Reservar experiencias
- Historial de reservas y pagos
- Chat con proveedores
- Sistema de reseñas

**Credenciales demo:**
- Email: `usuario@way2go.com`
- Contraseña: cualquiera
- Rol: Usuario

### 2. **Proveedor**
- Crear y gestionar publicaciones
- Calendario de disponibilidad
- Gestión de reservas
- Estadísticas de visitas y ventas
- Chat con clientes
- Sincronización visual con Google Calendar

**Credenciales demo:**
- Email: `proveedor@way2go.com`
- Contraseña: cualquiera
- Rol: Proveedor

### 3. **Administrador**
- Dashboard con métricas globales
- Gestión de usuarios y proveedores
- Moderación de sitios turísticos
- Centro de notificaciones
- Configuración del sistema
- Exportación de datos (simulado)

**Credenciales demo:**
- Email: `admin@way2go.com`
- Contraseña: cualquiera
- Rol: Admin

## 🎨 Características Principales

### Diseño
- ✅ 100% Responsive (móvil, tablet, escritorio)
- ✅ Modo oscuro/claro
- ✅ Navbar fijo con scroll
- ✅ Footer completo con enlaces y redes sociales
- ✅ Animaciones suaves
- ✅ Diseño limpio y moderno

### Funcionalidades
- ✅ Autenticación visual por roles
- ✅ Buscador avanzado con filtros
- ✅ Sistema de favoritos
- ✅ Calendario de disponibilidad
- ✅ Gestión de reservas
- ✅ Sistema de reseñas
- ✅ Chat visual
- ✅ Notificaciones
- ✅ Multiidioma (ES/EN)
- ✅ Mapas interactivos (placeholder)

### Gestión de Imágenes
- ✅ Componente ImageWithFallback para manejo de errores
- ✅ Lazy loading
- ✅ Optimización automática

## 🌐 Internacionalización

La aplicación soporta español e inglés. Para cambiar el idioma, usa el botón de idioma en el navbar.

## 🎯 Navegación

### Rutas Públicas
- `/` - Página de inicio
- `/explore` - Explorar experiencias
- `/about` - Sobre nosotros
- `/contact` - Contacto
- `/login` - Iniciar sesión
- `/register` - Registro

### Rutas Protegidas
- `/admin/*` - Panel de administración
- `/provider/*` - Panel de proveedor
- `/user/*` - Panel de usuario

## 🔧 Desarrollo

### Instalación
```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

### Build para producción

```bash
npm run build
```

## 📝 Notas Importantes

- **Autenticación**: La autenticación es solo visual/simulada. No hay lógica de backend real.
- **Datos**: Todos los datos son mock/simulados para demostración.
- **APIs**: No se conecta a APIs reales. Los datos son estáticos.
- **Pagos**: Sistema de pagos simulado, no procesa pagos reales.

## 🎨 Personalización

### Temas

Los colores y tokens se pueden personalizar en `styles/globals.css`

### Componentes

Todos los componentes son modulares y reutilizables. Shadcn UI permite fácil personalización.

## 📱 Responsive

La aplicación está completamente optimizada para:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🔒 Seguridad

**IMPORTANTE**: Esta es una aplicación de demostración. No está diseñada para:

- Recopilar información personal identificable (PII)
- Procesar pagos reales
- Almacenar datos sensibles

## 📄 Licencia

Proyecto educativo/demo - Way2Go © 2025

## 👥 Equipo

Desarrollado como proyecto de demostración para showcasing de habilidades en React, TypeScript y desarrollo web moderno.

---

**Versión**: 1.0.0  
**Última actualización**: Octubre 2025
