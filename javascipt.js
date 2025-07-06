document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Zoom effect for images on scroll
    const zoomImages = document.querySelectorAll('.zoom-image');
    
    window.addEventListener('scroll', function() {
        zoomImages.forEach(img => {
            const imgPosition = img.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (imgPosition < windowHeight * 0.75) {
                const scrollPercent = (windowHeight * 0.75 - imgPosition) / (windowHeight * 0.75);
                const scale = 1 + scrollPercent * 0.1;
                img.style.transform = `scale(${scale})`;
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});