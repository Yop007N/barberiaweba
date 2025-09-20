document.addEventListener("DOMContentLoaded", function () {
    // PROBLEMA ARREGLADO: Se agregó inicialización de configuración y links dinámicos
    initializeBusinessInfo();

    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY + 80;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const sectionId = section.getAttribute("id");
                updateActiveMenuItem(sectionId);
            }
        });
    });

    function updateActiveMenuItem(currentSectionId) {
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach((link) => {
            const href = link.getAttribute("href").substring(1);
            link.classList.toggle("active", href === currentSectionId);
        });
    }

    function initMap() {
        if (!window.barberiaConfig) {
            console.error('Configuración no disponible para el mapa');
            return;
        }

        const businessInfo = window.barberiaConfig.getBusinessInfo();
        const coords = businessInfo.coordinates;

        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: coords.lat, lng: coords.lng },
            zoom: 17,
        });

        const marker = new google.maps.Marker({
            position: { lat: coords.lat, lng: coords.lng },
            map: map,
            title: businessInfo.name
        });
    }

    const testimonios = document.querySelectorAll('.testimonio');

    function handleTestimonios() {
        testimonios.forEach(testimonio => {
            if (isElementInViewport(testimonio)) {
                testimonio.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleTestimonios);

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // PROBLEMA ARREGLADO: Función para inicializar información de negocio dinámicamente
    function initializeBusinessInfo() {
        if (!window.barberiaConfig) {
            console.warn('Configuración no disponible, usando valores por defecto');
            return;
        }

        const businessInfo = window.barberiaConfig.getBusinessInfo();
        const socialMedia = window.barberiaConfig.getSocialMedia();

        // Actualizar información de contacto
        const addressEl = document.getElementById('business-address');
        const phoneEl = document.getElementById('business-phone');
        const emailEl = document.getElementById('business-email');
        const hoursEl = document.getElementById('business-hours');

        if (addressEl) addressEl.textContent = businessInfo.address;
        if (phoneEl) phoneEl.textContent = businessInfo.phone;
        if (emailEl) emailEl.textContent = businessInfo.email;
        if (hoursEl) hoursEl.textContent = businessInfo.hours;

        // Actualizar links de redes sociales
        const whatsappLink = document.getElementById('whatsapp-link');
        const facebookLink = document.getElementById('facebook-link');
        const instagramLink = document.getElementById('instagram-link');

        if (whatsappLink) {
            whatsappLink.href = `https://wa.me/${socialMedia.whatsapp}`;
        }
        if (facebookLink) {
            facebookLink.href = `https://www.facebook.com/${socialMedia.facebook}`;
        }
        if (instagramLink) {
            instagramLink.href = `https://www.instagram.com/${socialMedia.instagram}`;
        }

        // Actualizar API key del mapa si está disponible
        const mapScript = document.querySelector('script[src*="maps.googleapis.com"]');
        if (mapScript) {
            const apiKey = window.barberiaConfig.getGoogleMapsApiKey();
            if (apiKey !== 'TU_API_KEY') {
                mapScript.src = mapScript.src.replace('TU_API_KEY', apiKey);
            }
        }
    }
});
