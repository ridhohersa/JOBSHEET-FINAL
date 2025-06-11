
        function animateOnScroll() {
            const elements = document.querySelectorAll('.scroll-animate');
            const windowHeight = window.innerHeight;
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < windowHeight - 80) {
                    el.classList.add('in-view');
                }
            });
        }
        document.addEventListener('DOMContentLoaded', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let toast = document.createElement('div');
            toast.className = 'toast align-items-center text-bg-success border-0 show position-fixed bottom-0 end-0 m-4';
            toast.style.zIndex = 9999;
            toast.setAttribute('role', 'alert');
            toast.setAttribute('aria-live', 'assertive');
            toast.setAttribute('aria-atomic', 'true');
            toast.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body fw-bold">
                        🎉 Terima kasih telah mendaftar, ${document.getElementById('name').value || 'Seniman'}!<br>
                        Cek email Anda untuk info lebih lanjut.
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Tutup"></button>
                </div>
            `;
            document.body.appendChild(toast);
            let bsToast = new bootstrap.Toast(toast, { delay: 4000 });
            bsToast.show();
            toast.addEventListener('hidden.bs.toast', () => toast.remove());
            let modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
            modal.hide();
            this.reset();
            setTimeout(function() {
                window.location.href = "materi.html";
            }, 800);
        });
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