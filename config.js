// PROBLEMA ARREGLADO: Se creó archivo de configuración para manejar API keys y datos sensibles
class Config {
    constructor() {
        this.loadConfig();
    }

    loadConfig() {
        // En un entorno real, estas variables vendrían de variables de entorno
        // Para desarrollo local, se pueden configurar aquí temporalmente
        this.googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || 'TU_API_KEY';
        this.businessInfo = {
            name: process.env.SITE_NAME || 'Barbería Alura',
            phone: process.env.SITE_PHONE || '+595123456789',
            email: process.env.SITE_EMAIL || 'contacto@barberia-alura.com',
            address: process.env.BUSINESS_ADDRESS || 'Av. Principal 123, Asunción, Paraguay',
            coordinates: {
                lat: -25.5129119,
                lng: -54.6578155
            },
            hours: process.env.BUSINESS_HOURS || 'Lunes a Sábado 8:00 - 18:00'
        };
        this.socialMedia = {
            whatsapp: process.env.WHATSAPP_NUMBER || '595123456789',
            facebook: process.env.FACEBOOK_PAGE || 'barberia.alura.paraguay',
            instagram: process.env.INSTAGRAM_HANDLE || 'barberia_alura_py'
        };
        this.appointments = {
            duration: parseInt(process.env.APPOINTMENT_DURATION) || 60,
            maxPerDay: parseInt(process.env.MAX_APPOINTMENTS_PER_DAY) || 10,
            advanceBookingDays: parseInt(process.env.ADVANCE_BOOKING_DAYS) || 30
        };
    }

    getGoogleMapsApiKey() {
        return this.googleMapsApiKey;
    }

    getBusinessInfo() {
        return this.businessInfo;
    }

    getSocialMedia() {
        return this.socialMedia;
    }

    getAppointmentConfig() {
        return this.appointments;
    }

    // Validación de configuración
    validate() {
        if (this.googleMapsApiKey === 'TU_API_KEY') {
            console.warn('⚠️ Google Maps API Key no configurada. El mapa no funcionará correctamente.');
        }

        if (!this.businessInfo.phone || this.businessInfo.phone === '+595123456789') {
            console.warn('⚠️ Número de teléfono no configurado o usando valor por defecto.');
        }

        console.log('✅ Configuración cargada:', {
            business: this.businessInfo.name,
            hasValidApiKey: this.googleMapsApiKey !== 'TU_API_KEY',
            socialMedia: Object.keys(this.socialMedia).length
        });
    }
}

// Crear instancia global de configuración
window.barberiaConfig = new Config();

// Validar configuración al cargar
document.addEventListener('DOMContentLoaded', () => {
    window.barberiaConfig.validate();
});