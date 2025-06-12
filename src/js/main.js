// main.js - Código completo para la landing page de Cabañas Caralmapu

document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. MENÚ MÓVIL (TOGGLE)
  // ======================
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Iconos para el botón (abierto/cerrado)
  const menuIcon = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  `;
  
  const closeIcon = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  `;
  
  // Función para alternar el menú
  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = isOpen ? menuIcon : closeIcon;
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  }
  
  // Event listeners
  menuBtn.innerHTML = menuIcon;
  menuBtn.addEventListener('click', toggleMenu);
  
  // Cerrar menú al hacer clic en enlace
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // ======================
  // 2. ANIMACIONES SCROLL
  // ======================
  function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(el => {
      const elementPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        el.classList.add('aos-animate');
      }
    });
  }
  
  // Inicializar animaciones
  function initAnimations() {
    // Añadir clases iniciales
    document.querySelectorAll('.animate-fadeIn').forEach(el => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.6s ease-out';
    });
    
    document.querySelectorAll('.animate-slideUp').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
    });
    
    // Animación flotante para elementos
    document.querySelectorAll('.animate-float').forEach(el => {
      el.style.animation = 'float 3s ease-in-out infinite';
    });
    
    // Efecto hover para cards
    document.querySelectorAll('.card-hover').forEach(card => {
      card.style.transition = 'all 0.3s ease';
      
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }
  
  // ======================
  // 3. SCROLL SUAVE
  // ======================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // ======================
  // 4. INICIALIZACIÓN
  // ======================
  function init() {
    initAnimations();
    initSmoothScroll();
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Hero animation
    const heroTitle = document.querySelector('#inicio h1');
    if (heroTitle) {
      setTimeout(() => {
        heroTitle.style.opacity = '1';
      }, 300);
    }
    
    const heroSubtitle = document.querySelector('#inicio p');
    if (heroSubtitle) {
      setTimeout(() => {
        heroSubtitle.style.opacity = '1';
      }, 600);
    }
    
    const heroButtons = document.querySelector('#inicio .space-x-4');
    if (heroButtons) {
      setTimeout(() => {
        heroButtons.style.opacity = '1';
        heroButtons.style.transform = 'translateY(0)';
      }, 900);
    }
  }
  
  init();
});