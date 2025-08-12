// 7 Minute CABS - High-Energy JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Blast contact form handling
    const blastForm = document.querySelector('.blast-form');
    if (blastForm) {
        blastForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.blastName || !data.blastEmail || !data.blastProject || !data.blastTimeline || !data.blastMessage) {
                alert('🚨 HOLD UP! Fill in ALL the required fields for MAXIMUM BLAST power!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.blastEmail)) {
                alert('⚡ EMAIL POWER DOWN! Please enter a valid email address!');
                return;
            }
            
            // High-energy form submission
            const button = this.querySelector('.btn-submit');
            const originalText = button.textContent;
            
            button.textContent = 'BLASTING YOUR REQUEST...';
            button.disabled = true;
            button.style.background = 'linear-gradient(135deg, #FFD700 0%, #FF6B35 100%)';
            
            // Simulate form submission with energy
            setTimeout(() => {
                alert('🚀 BLAST OFF! Your cabinet project has been LAUNCHED into our system! We\'ll contact you within 4 hours with EXPLOSIVE results!');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = 'linear-gradient(135deg, var(--blast-red) 0%, var(--blast-orange) 100%)';
                
                // Celebration effect
                createBlastEffect();
            }, 1500);
        });
    }

    // Add scroll effects and animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add extra blast effect for service cards
                if (entry.target.classList.contains('service-card-blast')) {
                    entry.target.style.animation = 'blastIn 0.8s ease-out';
                }
            }
        });
    }, observerOptions);

    // Observe service cards and other elements
    const animateElements = document.querySelectorAll('.service-card-blast, .comparison-card, .contact-item-blast');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Add blast animation keyframes
    if (!document.querySelector('#blast-animations')) {
        const style = document.createElement('style');
        style.id = 'blast-animations';
        style.textContent = `
            @keyframes blastIn {
                0% { transform: translateY(30px) rotate(-5deg) scale(0.8); }
                50% { transform: translateY(-10px) rotate(2deg) scale(1.05); }
                100% { transform: translateY(0) rotate(0deg) scale(1); }
            }
            
            @keyframes blastParticle {
                0% { transform: translate(0, 0) scale(1); opacity: 1; }
                100% { transform: translate(var(--random-x, 100px), var(--random-y, -100px)) scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Add energetic hover effects to buttons
    const blastButtons = document.querySelectorAll('.btn-blast');
    blastButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        });
    });

    // Add click blast effect to important buttons
    blastButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            createClickBlast(e);
        });
    });

    // Phone number click excitement
    const phoneLinks = document.querySelectorAll('.phone-number-blast');
    phoneLinks.forEach(phone => {
        phone.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // Add excitement to form interactions
    const formInputs = document.querySelectorAll('.blast-form input, .blast-form select, .blast-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#FFD700';
            this.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.4)';
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
    });
});

// Create blast effect function
function createBlastEffect() {
    const blastContainer = document.createElement('div');
    blastContainer.style.position = 'fixed';
    blastContainer.style.top = '50%';
    blastContainer.style.left = '50%';
    blastContainer.style.transform = 'translate(-50%, -50%)';
    blastContainer.style.pointerEvents = 'none';
    blastContainer.style.zIndex = '10000';
    
    // Create multiple blast particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.background = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`; // Yellow to red range
        particle.style.animation = `blastParticle 1s ease-out forwards`;
        
        // Random direction
        const randomX = (Math.random() - 0.5) * 400;
        const randomY = (Math.random() - 0.5) * 400;
        particle.style.setProperty('--random-x', randomX + 'px');
        particle.style.setProperty('--random-y', randomY + 'px');
        
        blastContainer.appendChild(particle);
    }
    
    document.body.appendChild(blastContainer);
    
    // Remove blast effect after animation
    setTimeout(() => {
        document.body.removeChild(blastContainer);
    }, 1000);
}

// Create click blast effect
function createClickBlast(event) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    
    const blast = document.createElement('div');
    blast.style.position = 'fixed';
    blast.style.left = clickX + 'px';
    blast.style.top = clickY + 'px';
    blast.style.width = '0px';
    blast.style.height = '0px';
    blast.style.borderRadius = '50%';
    blast.style.background = 'radial-gradient(circle, #FFD700 0%, transparent 70%)';
    blast.style.transform = 'translate(-50%, -50%)';
    blast.style.pointerEvents = 'none';
    blast.style.zIndex = '9999';
    blast.style.animation = 'clickBlast 0.6s ease-out forwards';
    
    if (!document.querySelector('#click-blast-styles')) {
        const style = document.createElement('style');
        style.id = 'click-blast-styles';
        style.textContent = `
            @keyframes clickBlast {
                0% { width: 0px; height: 0px; opacity: 0.8; }
                50% { width: 100px; height: 100px; opacity: 0.4; }
                100% { width: 200px; height: 200px; opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(blast);
    
    setTimeout(() => {
        if (blast.parentNode) {
            document.body.removeChild(blast);
        }
    }, 600);
}

// Add some periodic excitement effects
setInterval(() => {
    const urgencyBanner = document.querySelector('.urgency-banner');
    if (urgencyBanner && Math.random() < 0.3) {
        urgencyBanner.style.animation = 'none';
        setTimeout(() => {
            urgencyBanner.style.animation = 'flash 2s infinite';
        }, 50);
    }
}, 5000);

// Track section views for analytics
function trackSectionView(sectionName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'section_view', {
            event_category: 'Engagement',
            event_label: sectionName + '_7minutecabs'
        });
    }
}