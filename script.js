// script.js

(function() {
    'use strict';

    // ---- Mobile hamburger ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        // close on link click (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // ---- Typewriter effect ----
    const phrases = [
        'Crafting digital experiences',
        'Full-stack problem solver',
        'UI/UX & code enthusiast',
        'Building the future, one line at a time'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.getElementById('typewriter-text');
    let isDeleting = false;

    function typeEffect() {
        if (!typewriterElement) return;
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            // delete
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 600);
                return;
            }
            setTimeout(typeEffect, 40);
        } else {
            // type
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1800);
                return;
            }
            setTimeout(typeEffect, 70);
        }
    }
    // start typewriter after a short delay
    setTimeout(typeEffect, 400);

    // ---- scroll reveal (simple) ----
    const revealElements = document.querySelectorAll('.project-card, .stat-card, .skill-box, .about-grid');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ---- smooth nav scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();