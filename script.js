AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

const createParticles = () => {
    const container = document.querySelector('.particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        container.appendChild(particle);
        
        animateParticle(particle);
    }
};

const animateParticle = (particle) => {
    const duration = Math.random() * 20 + 10;
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;
    
    particle.animate([
        { left: `${startX}%`, top: `${startY}%` },
        { left: `${endX}%`, top: `${endY}%` }
    ], {
        duration: duration * 1000,
        easing: 'linear',
        iterations: Infinity
    });
};

const handleCardInteraction = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
};

const animateTemperature = () => {
    const temperatureElements = document.querySelectorAll('.temperature');
    temperatureElements.forEach(element => {
        let temp = 22;
        setInterval(() => {
            temp += (Math.random() - 0.5) * 0.4;
            element.textContent = `${temp.toFixed(1)}°C`;
        }, 2000);
    });
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        event.target.reset();
    }, 1500);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    document.querySelectorAll('.interactive-card').forEach(card => {
        card.addEventListener('mousemove', handleCardInteraction);
    });

    animateTemperature();

    document.querySelector('form').addEventListener('submit', handleFormSubmit);
}); 