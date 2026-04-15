// VitalStep - Interactions de base

document.addEventListener('DOMContentLoaded', () => {
    // Animation simple au défilement
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.frame').forEach(frame => {
        observer.observe(frame);
    });

    // Gestion du formulaire de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            if (email) {
                alert(`Merci ! L'adresse ${email} a bien été enregistrée.`);
                newsletterForm.reset();
            }
        });
    }

    // Effet de survol sur les annotations de la chaussure
    const annotations = document.querySelectorAll('.annotation');
    annotations.forEach(ann => {
        ann.addEventListener('mouseenter', () => {
            ann.querySelector('.dot').style.transform = 'scale(1.5)';
            ann.querySelector('.dot').style.transition = 'transform 0.3s ease';
        });
        ann.addEventListener('mouseleave', () => {
            ann.querySelector('.dot').style.transform = 'scale(1)';
        });
    });
});