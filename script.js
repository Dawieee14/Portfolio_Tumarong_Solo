// Create floating ice particles
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }
}

// Starfield background
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let stars = [];
    
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    function createStars() {
        stars = [];
        for (let i = 0; i < 150; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2,
                speed: Math.random() * 0.2 + 0.1,
                opacity: Math.random()
            });
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        stars.forEach(star => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Move star
            star.y -= star.speed;
            if (star.y < 0) {
                star.y = height;
                star.x = Math.random() * width;
            }
            
            // Twinkle effect
            star.opacity += (Math.random() - 0.5) * 0.05;
            if (star.opacity < 0.1) star.opacity = 0.1;
            if (star.opacity > 1) star.opacity = 1;
        });
        
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
        resize();
        createStars();
    });
    
    resize();
    createStars();
    animate();
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe about text paragraphs
    document.querySelectorAll('.about-text p').forEach(p => {
        observer.observe(p);
    });
}

// Parallax effect for moon
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const moon = document.querySelector('.moon');
        if (moon) {
            moon.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
}

// Smooth scroll for navigation
function initSmoothScroll() {
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

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initStarfield();
    initScrollAnimations();
    initParallax();
    initSmoothScroll();
    
    console.log('🌙 Welcome to the Lunar Skater\'s world!');
});
document.querySelectorAll('.friend-card').forEach(card=>{
card.addEventListener('click',()=>{
const img = card.querySelector('.friend-photo');
if(img){
img.classList.toggle('show');
}
});
});
// AUDIO PLAYER ADD-ON SCRIPT - Add to your JS
const audio = document.getElementById('bgMusic');
const record = document.getElementById('record');
const btn = document.getElementById('playPauseBtn');
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    record.classList.remove('playing');
    btn.innerHTML = '▶';
  } else {
    audio.play();
    record.classList.add('playing');
    btn.innerHTML = '⏸';
  }
  isPlaying = !isPlaying;
}

