# Barbería Alura - Sitio Web

Un sitio web profesional para Barbería Alura con sistema de citas y galería de servicios.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Sistema de Citas**: Calendario interactivo para reservar turnos
- **Galería de Servicios**: Showcase de los servicios ofrecidos
- **Información de Contacto**: Enlaces dinámicos a redes sociales y WhatsApp
- **Mapa Interactivo**: Ubicación de la barbería con Google Maps
- **Configuración Segura**: Variables de entorno para API keys

## 📋 Requisitos

- Navegador web moderno
- Servidor web local (opcional para desarrollo)
- Google Maps API Key (para el mapa)

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yop007n/barberia-alura-website.git
cd barberia-alura-website
```

2. Instala las dependencias (opcional):
```bash
npm install
```

3. Configura las variables de entorno:
   - Copia `.env` y configura tus valores
   - Especialmente `GOOGLE_MAPS_API_KEY`

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
barberiaweba/
├── index.html              # Página principal
├── producto.html           # Página de productos/servicios
├── app.js                  # Funcionalidad JavaScript
├── config.js               # Configuración y variables
├── stylesIndex.css         # Estilos principales
├── stylesproducto.css      # Estilos para productos
├── styles-adicionales.css  # Estilos complementarios
├── package.json            # Configuración del proyecto
├── .env                    # Variables de entorno
└── img/                    # Imágenes del sitio
```

## ⚙️ Configuración

### Variables de Entorno (.env)

```env
# Google Maps API Key
GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here

# Información del negocio
SITE_NAME=Barbería Alura
SITE_PHONE=+595123456789
SITE_EMAIL=contacto@barberia-alura.com
BUSINESS_ADDRESS=Av. Principal 123, Asunción, Paraguay

# Redes sociales
WHATSAPP_NUMBER=595123456789
FACEBOOK_PAGE=barberia.alura.paraguay
INSTAGRAM_HANDLE=barberia_alura_py
```

### Configuración del Calendario

El calendario está configurado para:
- Horarios: Lunes a Sábado, 8:00 - 18:00
- Duración de citas: 1 hora
- Zona horaria: America/Asuncion

## 🔧 Personalización

### Cambiar Información de Contacto

Edita el archivo `config.js` o las variables de entorno en `.env`.

### Modificar Horarios de Atención

Actualiza la configuración `businessHours` en el calendario (index.html).

### Cambiar Servicios

Edita `producto.html` para agregar, quitar o modificar servicios.

## 📱 Funcionalidades

### Sistema de Citas
- Calendario interactivo con FullCalendar
- Visualización de turnos disponibles y ocupados
- Click para reservar (integración con WhatsApp)

### Responsive Design
- Diseño adaptativo para móviles y tablets
- Navegación optimizada para touch
- Imágenes optimizadas

### SEO y Performance
- Meta tags optimizados
- Carga asíncrona de recursos
- Imágenes comprimidas

## 🌐 Deploy

### GitHub Pages
```bash
# Configura el repositorio en GitHub
# Activa GitHub Pages en la configuración del repositorio
```

### Servidor Web
- Sube todos los archivos a tu servidor web
- Configura las variables de entorno
- Asegúrate de que el servidor soporte HTTPS

## 🔒 Seguridad

- ✅ API keys manejadas por variables de entorno
- ✅ No hay credenciales hardcodeadas
- ✅ Enlaces externos seguros
- ✅ Validación de formularios

## 🐛 Problemas Resueltos

- ✅ Enlaces de navegación rotos
- ✅ API key de Google Maps hardcodeada
- ✅ Falta de responsive design
- ✅ Información de contacto estática
- ✅ Calendario con eventos básicos

## 📞 Soporte

Para soporte técnico o consultas sobre el sitio web:
- Email: contacto@barberia-alura.com
- WhatsApp: +595 123 456 789

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles.