// Mobile menu toggle functionality
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    if (navMenu && toggleButton) {
        navMenu.classList.toggle('active');
        toggleButton.classList.toggle('active');
    }
}

// Close mobile menu when clicking a nav link
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    if (navMenu && toggleButton) {
        navMenu.classList.remove('active');
        toggleButton.classList.remove('active');
    }
}

// Image lazy loading handler
function handleImageLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        // Add load event listener
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        // Observe for intersection
        imageObserver.observe(img);
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize image loading
    handleImageLoad();
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu when clicking any nav link
            closeMobileMenu();
            
            // Handle smooth scrolling for hash links
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Quick contact form handling
    const quickContactForm = document.getElementById('quickContactForm');
    if (quickContactForm) {
        quickContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.quickName || !data.quickEmail || !data.quickMessage) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.quickEmail)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Here you would typically send the data to your server
            // For now, we'll show a success message
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you within 24 hours.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1000);
        });
    }

    // Add scroll effect to navigation
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // Add intersection observer for animations and section tracking
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Section tracking observer for GA4
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && typeof trackSectionView === 'function') {
                const sectionId = entry.target.id || entry.target.className.split(' ')[0];
                trackSectionView(sectionId);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });

    // Observe main sections for tracking
    const mainSections = document.querySelectorAll('section[id], .hero, .services, .about, .contact, .lead-magnets');
    mainSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Observe service cards and pricing cards for animations
    const cards = document.querySelectorAll('.service-card, .pricing-card, .lead-magnet-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});