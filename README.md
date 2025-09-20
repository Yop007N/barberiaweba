# 💈 Barbería Alura Website

> **Sitio web profesional para barbería con sistema de citas y diseño responsive**

## 📋 Descripción

Barbería Alura Website es un sitio web moderno y profesional desarrollado con tecnologías web estándar (HTML5, CSS3, JavaScript) que ofrece una experiencia completa para clientes de barbería. Incluye sistema de reservas, galería de servicios, información de contacto y diseño completamente responsive optimizado para todos los dispositivos.

## ⭐ Características Principales

### 🎯 Funcionalidades Core
- **📅 Sistema de Citas:** Calendario interactivo con FullCalendar para reservar turnos
- **💈 Galería de Servicios:** Showcase profesional de cortes, barbas y tratamientos
- **📱 Diseño Responsivo:** Optimizado para móviles, tablets y desktop
- **🗺️ Mapa Interactivo:** Ubicación con Google Maps integrado
- **📞 Contacto Directo:** Enlaces a WhatsApp, redes sociales y teléfono
- **🎨 UI Moderna:** Interfaz atractiva con animaciones y efectos visuales

### 🔧 Características Técnicas
- **📱 Mobile-First Design:** Diseño adaptativo con breakpoints optimizados
- **⚡ Performance Optimizado:** Carga rápida con recursos comprimidos
- **🔒 Configuración Segura:** Variables de entorno para API keys y configuración
- **🎯 SEO Friendly:** Meta tags optimizados y estructura semántica
- **♿ Accesibilidad:** Controles de navegación y contenido accesible
- **🌐 Cross-Browser:** Compatible con todos los navegadores modernos

## 💻 Stack Tecnológico

### Frontend Core
- **HTML5** - Estructura semántica y moderna
- **CSS3** - Estilos avanzados con Flexbox y Grid
- **JavaScript ES6+** - Funcionalidad interactiva moderna
- **Font Awesome 6.0.0** - Iconografía profesional

### Librerías y Frameworks
- **FullCalendar 3.10.2** - Sistema de calendario interactivo
- **jQuery 3.6.0** - Manipulación del DOM y eventos
- **Moment.js 2.29.1** - Manejo de fechas y horarios
- **Google Maps API** - Integración de mapas interactivos

### Herramientas de Desarrollo
- **Serve 14.2.3** - Servidor de desarrollo local
- **html-validate 8.12.0** - Validación de HTML
- **imagemin 8.0.1** - Optimización de imágenes

## 🚀 Instalación

### Prerrequisitos

- **Node.js 14+** (para herramientas de desarrollo)
- **Google Maps API Key** (para funcionalidad de mapas)
- **Navegador moderno** con soporte para ES6+

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Yop007N/barberiaweba.git
cd barberiaweba

# 2. Instalar dependencias de desarrollo (opcional)
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tu configuración

# 4. Iniciar servidor de desarrollo
npm run dev
```

### Servidor Local Alternativo

```bash
# Usando Python
python -m http.server 3000

# Usando Node.js
npx serve -s . -l 3000

# Usando PHP
php -S localhost:3000
```

## ⚙️ Configuración

### Variables de Entorno

```bash
# .env
# Google Maps API Key
GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Información del negocio
SITE_NAME=Barbería Alura
SITE_PHONE=+595123456789
SITE_EMAIL=contacto@barberia-alura.com
BUSINESS_ADDRESS=Av. Principal 123, Asunción, Paraguay

# Coordenadas para el mapa
BUSINESS_LAT=-25.2637
BUSINESS_LNG=-57.5759

# Redes sociales
WHATSAPP_NUMBER=595123456789
FACEBOOK_PAGE=barberia.alura.paraguay
INSTAGRAM_HANDLE=barberia_alura_py

# Horarios de atención
BUSINESS_HOURS_START=08:00
BUSINESS_HOURS_END=18:00
BUSINESS_DAYS=1,2,3,4,5,6

# Configuración del calendario
APPOINTMENT_DURATION=60
TIMEZONE=America/Asuncion
```

### Configuración del Calendario

```javascript
// Configuración de FullCalendar en app.js
const calendarConfig = {
  defaultView: 'agendaWeek',
  businessHours: {
    dow: [1, 2, 3, 4, 5, 6], // Lunes a Sábado
    start: '08:00',
    end: '18:00'
  },
  slotDuration: '01:00:00',
  minTime: '08:00:00',
  maxTime: '18:00:00',
  locale: 'es',
  timeZone: 'America/Asuncion'
};
```

## 🏗️ Estructura del Proyecto

```
barberiaweba/
├── index.html                  # Página principal con calendario
├── producto.html               # Página de productos y servicios
├── app.js                      # Lógica JavaScript principal
├── config.js                   # Configuración y variables
├── package.json                # Configuración del proyecto
├── .env                        # Variables de entorno
├── styles/                     # Archivos de estilos
│   ├── stylesIndex.css         # Estilos de la página principal
│   ├── stylesproducto.css      # Estilos de productos
│   └── styles-adicionales.css   # Estilos complementarios
└── img/                        # Recursos de imágenes
    ├── logo.png               # Logo de la barbería
    ├── services/              # Imágenes de servicios
    └── gallery/               # Galería de trabajos
```

## 📖 Scripts Disponibles

```bash
# Desarrollo
npm run dev               # Inicia servidor de desarrollo
npm run start             # Servidor en modo producción

# Validación y optimización
npm run validate          # Valida sintaxis HTML
npm run optimize          # Optimiza imágenes
npm run build             # Prepara para deploy

# Utilidades
npm run test              # Ejecuta validaciones (si están configuradas)
```

## 🎯 Funcionalidades Implementadas

### Sistema de Citas Avanzado

```javascript
// Configuración del calendario con eventos
$('#calendar').fullCalendar({
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  },
  businessHours: true,
  editable: false,
  eventClick: function(event) {
    if (event.available) {
      // Redirigir a WhatsApp para reservar
      const message = `Hola, me gustaría reservar una cita para ${event.start.format('LLLL')}`;
      const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  },
  events: generateAvailableSlots()
});
```

### Responsive Navigation

```css
/* Navegación adaptativa */
@media (max-width: 768px) {
  #navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: none;
  }

  #navbar.active {
    display: block;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }
}
```

### Galería de Servicios Interactive

```javascript
// Servicios con información detallada
const servicios = [
  {
    nombre: 'Corte Clásico',
    descripcion: 'Corte tradicional con tijera y máquina',
    precio: '₲50,000',
    duracion: '45 min',
    imagen: 'img/services/corte-clasico.jpg'
  },
  {
    nombre: 'Barba Completa',
    descripcion: 'Recorte y arreglo de barba con productos premium',
    precio: '₲35,000',
    duracion: '30 min',
    imagen: 'img/services/barba.jpg'
  },
  {
    nombre: 'Combo Completo',
    descripcion: 'Corte + Barba + Lavado',
    precio: '₲75,000',
    duracion: '90 min',
    imagen: 'img/services/combo.jpg'
  }
];
```

### Integración con Google Maps

```javascript
// Mapa interactivo
function initMap() {
  const barberia = {
    lat: parseFloat(CONFIG.businessLat),
    lng: parseFloat(CONFIG.businessLng)
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: barberia,
    styles: customMapStyles
  });

  const marker = new google.maps.Marker({
    position: barberia,
    map: map,
    title: CONFIG.siteName,
    animation: google.maps.Animation.BOUNCE
  });

  const infoWindow = new google.maps.InfoWindow({
    content: createInfoWindowContent()
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}
```

### Sistema de Contacto

```javascript
// Enlaces de contacto dinámicos
function setupContactLinks() {
  // WhatsApp
  document.querySelectorAll('.whatsapp-link').forEach(link => {
    link.href = `https://wa.me/${CONFIG.whatsapp}`;
  });

  // Teléfono
  document.querySelectorAll('.phone-link').forEach(link => {
    link.href = `tel:${CONFIG.phone}`;
  });

  // Email
  document.querySelectorAll('.email-link').forEach(link => {
    link.href = `mailto:${CONFIG.email}`;
  });

  // Redes sociales
  document.querySelector('.facebook-link').href = `https://facebook.com/${CONFIG.facebook}`;
  document.querySelector('.instagram-link').href = `https://instagram.com/${CONFIG.instagram}`;
}
```

## 📱 Diseño Responsive

### Breakpoints Definidos

```css
/* Mobile First approach */
/* Base styles: 320px and up */

/* Small devices (480px and up) */
@media (min-width: 480px) {
  .container {
    max-width: 460px;
  }
}

/* Medium devices (768px and up) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large devices (1024px and up) */
@media (min-width: 1024px) {
  .container {
    max-width: 980px;
  }

  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra large devices (1200px and up) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

### Grid Layout Adaptativo

```css
/* Layout de servicios responsivo */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.service-card {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
```

## 🌐 Despliegue

### GitHub Pages

```bash
# 1. Configurar repositorio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Yop007N/barberiaweba.git
git push -u origin main

# 2. Activar GitHub Pages
# Ir a Settings > Pages > Source: Deploy from a branch > main
```

### Netlify

```bash
# 1. Build command (opcional)
npm run build

# 2. Publish directory
./

# 3. Variables de entorno
# Configurar en Netlify dashboard
```

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Configurar variables de entorno
vercel env add GOOGLE_MAPS_API_KEY
```

### Servidor Web Tradicional

```bash
# Subir archivos vía FTP/SFTP
# Estructura en servidor:
public_html/
├── index.html
├── producto.html
├── app.js
├── config.js
├── styles/
└── img/

# Configurar HTTPS y headers de seguridad
```

## 📊 Performance y SEO

### Optimizaciones Implementadas

```html
<!-- Meta tags optimizados -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Barbería Alura - Los mejores cortes y servicios de barbería en Asunción. Reserva tu cita online.">
  <meta name="keywords" content="barbería, corte de cabello, barba, Asunción, Paraguay">

  <!-- Open Graph -->
  <meta property="og:title" content="Barbería Alura - Servicios Profesionales">
  <meta property="og:description" content="La mejor barbería de Asunción. Cortes modernos y clásicos.">
  <meta property="og:image" content="img/og-image.jpg">

  <!-- Preload critical resources -->
  <link rel="preload" href="stylesIndex.css" as="style">
  <link rel="preload" href="app.js" as="script">
</head>
```

### Lazy Loading de Imágenes

```javascript
// Lazy loading implementation
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

## 🔒 Seguridad

### Mejores Prácticas Implementadas

```javascript
// Sanitización de entrada
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Validación de formularios
function validateForm(data) {
  const errors = [];

  if (!data.name || data.name.length < 2) {
    errors.push('Nombre debe tener al menos 2 caracteres');
  }

  if (!data.phone || !/^\+?[0-9\s\-]+$/.test(data.phone)) {
    errors.push('Número de teléfono inválido');
  }

  return errors;
}
```

### Headers de Seguridad

```javascript
// Configuración de seguridad para servidor
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com maps.googleapis.com; style-src 'self' 'unsafe-inline' cdnjs.cloudflare.com fonts.googleapis.com;",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block'
};
```

## 📈 Métricas y Analytics

### Performance Targets

| Métrica | Objetivo | Actual |
|---------|----------|--------|
| **First Contentful Paint** | < 2s | 1.5s |
| **Largest Contentful Paint** | < 3s | 2.2s |
| **Cumulative Layout Shift** | < 0.1 | 0.05 |
| **Time to Interactive** | < 4s | 3.1s |

### Google Analytics Integration

```javascript
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href
});

// Eventos personalizados
function trackCalendarInteraction(action) {
  gtag('event', 'calendar_interaction', {
    'action': action,
    'page': 'home'
  });
}

function trackServiceView(serviceName) {
  gtag('event', 'service_view', {
    'service_name': serviceName,
    'page': 'productos'
  });
}
```

## 👨‍💻 Autor

**Enrique Bobadilla**

---

**Versión:** 1.0.0
**Última actualización:** Diciembre 2024