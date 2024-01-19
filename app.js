document.addEventListener("DOMContentLoaded", function () {
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
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -25.5129119, lng: -54.6578155 },
            zoom: 17,
        });

        const marker = new google.maps.Marker({
            position: { lat: -25.5129119, lng: -54.6578155 },
            map: map,
            title: 'Barbero Jonh'
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
});
