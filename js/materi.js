
    function onScrollAnimate() {
        const elements = document.querySelectorAll('.scroll-animate');
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', onScrollAnimate);
    window.addEventListener('DOMContentLoaded', onScrollAnimate);
        const backToTopBtn = document.getElementById('backToTopBtn');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
                backToTopBtn.classList.add('in-view');
            } else {
                backToTopBtn.style.display = 'none';
                backToTopBtn.classList.remove('in-view');
            }
        });

        backToTopBtn.addEventListener('mouseenter', function() {
            document.getElementById('topBtnIcon').style.transform = 'translateY(-8px) scale(1.2) rotate(-15deg)';
        });
        backToTopBtn.addEventListener('mouseleave', function() {
            document.getElementById('topBtnIcon').style.transform = '';
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const icon = document.getElementById('topBtnIcon');
            icon.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(-20deg)' },
                { transform: 'rotate(20deg)' },
                { transform: 'rotate(-10deg)' },
                { transform: 'rotate(0deg)' }
            ], { duration: 500, easing: 'ease' });
        });
    