// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeHeader();
    initializeMobileMenu();
    initializeFloatingMenu();
    initializeParticles();
    initializeScrollAnimations();
    initializeHeroAnimations();
    initializeSmoothScrolling();
});

// Header functionality
function initializeHeader() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }
}

// Floating Action Button functionality
function initializeFloatingMenu() {
    const fabButton = document.getElementById('fabButton');
    const fabMenu = document.getElementById('fabMenu');
    const fabItems = document.querySelectorAll('.fab-item');
    
    if (fabButton && fabMenu) {
        fabButton.addEventListener('click', function() {
            fabButton.classList.toggle('active');
            fabMenu.classList.toggle('active');
        });
        
        // Set active fab item based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        fabItems.forEach(item => {
            const itemPage = item.getAttribute('href');
            if (itemPage === currentPage || (currentPage === '' && itemPage === 'index.html')) {
                item.classList.add('active');
            }
        });
        
        // Close fab menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!fabButton.contains(event.target) && !fabMenu.contains(event.target)) {
                fabButton.classList.remove('active');
                fabMenu.classList.remove('active');
            }
        });
        
        // Close fab menu when clicking on a fab item
        fabItems.forEach(item => {
            item.addEventListener('click', function() {
                fabButton.classList.remove('active');
                fabMenu.classList.remove('active');
            });
        });
    }
}

// Particle system
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    // Create particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random color variation
        const colors = [
            'linear-gradient(45deg, #3b82f6, #06b6d4)',
            'linear-gradient(45deg, #06b6d4, #3b82f6)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(6, 182, 212, 0.8)',
            'rgba(147, 197, 253, 0.6)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }
    
    // Create initial particles
    for (let i = 0; i < 30; i++) {
        setTimeout(createParticle, i * 200);
    }
    
    // Continue creating particles
    setInterval(createParticle, 300);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
                if (entry.target.classList.contains('program-card')) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
                if (entry.target.classList.contains('section-header')) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.feature-card, .program-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Hero animations
function initializeHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroStats = document.querySelector('.hero-stats');
    
    // Stagger animations
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.animation = 'heroTitleSlide 1s ease-out forwards';
        }, 300);
    }
    
    if (heroDescription) {
        setTimeout(() => {
            heroDescription.style.animation = 'heroDescSlide 1s ease-out forwards';
        }, 600);
    }
    
    if (heroButtons) {
        setTimeout(() => {
            heroButtons.style.animation = 'heroButtonsSlide 1s ease-out forwards';
        }, 900);
    }
    
    if (heroStats) {
        setTimeout(() => {
            heroStats.style.animation = 'heroStatsSlide 1s ease-out forwards';
        }, 1200);
    }
    
    // Animate stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
        setTimeout(() => {
            animateNumber(stat);
        }, 1500 + index * 200);
    });
}

// Animate numbers
function animateNumber(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const number = parseInt(target.replace(/[^\d]/g, ''));
    
    let current = 0;
    const increment = number / 60; // 60 frames for 1 second at 60fps
    
    function updateNumber() {
        current += increment;
        if (current >= number) {
            current = number;
            element.textContent = number + (isPercentage ? '%' : '') + (isPlus ? '+' : '');
        } else {
            element.textContent = Math.floor(current) + (isPercentage ? '%' : '') + (isPlus ? '+' : '');
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}

// Smooth scrolling
function initializeSmoothScrolling() {
    // Smooth scroll to top when clicking logo
    const logo = document.querySelector('.nav-brand');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });
});

// Card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .program-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Performance optimizations
function optimizeAnimations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.classList.add('motion-reduce');
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        const particles = document.querySelectorAll('.particle, .orb');
        if (document.hidden) {
            particles.forEach(particle => {
                particle.style.animationPlayState = 'paused';
            });
        } else {
            particles.forEach(particle => {
                particle.style.animationPlayState = 'running';
            });
        }
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeAnimations);

// Error handling
window.addEventListener('error', function(e) {
    console.warn('Error caught:', e.message);
    // Graceful degradation - remove problematic animations
    if (e.message.includes('animation')) {
        document.documentElement.classList.add('motion-reduce');
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimized scroll listener
const optimizedScrollHandler = throttle(function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);