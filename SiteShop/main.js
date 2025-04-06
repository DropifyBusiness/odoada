// Плавные переходы между страницами
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="http"]:not([target="_blank"]), a[href^="/"], a[href^="#"]');
    const transition = document.querySelector('.page-transition');
    
    // Анимация при клике на ссылку
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            transition.classList.add('active');
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
    
    // Анимация при загрузке страницы
    setTimeout(() => {
        transition.classList.remove('active');
    }, 100);
    
    // Параллакс эффект для изображений
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }
    
    // Изменение шапки при скролле
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Анимация при наведении на карточки товаров
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Добавление товаров в корзину
    const addToCartButtons = document.querySelectorAll('.product-card .btn');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Анимация добавления в корзину
            const cartIcon = document.querySelector('.cart-icon');
            cartIcon.classList.add('animate-bounce');
            
            setTimeout(() => {
                cartIcon.classList.remove('animate-bounce');
            }, 1000);
        });
    });
});