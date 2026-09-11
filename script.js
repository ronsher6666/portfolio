// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Toggle specifications
function toggleSpecs(model) {
    const allSpecs = document.querySelectorAll('.specs-detail');
    const selectedSpec = document.getElementById(model + '-specs');
    
    allSpecs.forEach(spec => {
        if (spec === selectedSpec) {
            spec.classList.toggle('hidden');
        } else {
            spec.classList.add('hidden');
        }
    });
}

// Modal functionality
function openModal(imgId) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    
    modal.style.display = 'block';
    
    // For now, using emoji as placeholder
    const descriptions = {
        'img1': '🏁 Racing Experience - Feel the raw power and agility',
        'img2': '🌃 City Driving - Navigate urban streets with confidence',
        'img3': '🛣️ Highway Adventure - Cruise with style and performance',
        'img4': '🌅 Sunset Drive - Experience luxury in motion',
        'img5': '🏔️ Mountain Roads - Conquer challenging terrain',
        'img6': '🌊 Coastal Journey - Explore scenic routes in comfort'
    };
    
    captionText.innerHTML = descriptions[imgId] || 'Jaguar Experience';
    modalImg.style.fontSize = '100px';
    modalImg.innerHTML = '';
    
    // Add emoji visual
    const emojiMap = {
        'img1': '🏁',
        'img2': '🌃',
        'img3': '🛣️',
        'img4': '🌅',
        'img5': '🏔️',
        'img6': '🌊'
    };
    
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.textContent = emojiMap[imgId] || '🐆';
        modalContent.style.fontSize = '150px';
        modalContent.style.textAlign = 'center';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const message = inputs[2].value;
        
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon!`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Test drive form handling
const testDriveForm = document.querySelector('.test-drive-form');
if (testDriveForm) {
    testDriveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input, select');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const phone = inputs[2].value;
        const model = inputs[3].value;
        const date = inputs[4].value;
        
        if (name && email && phone && model && date) {
            const modelNames = {
                'ftype': 'Jaguar F-TYPE',
                'xe': 'Jaguar XE',
                'fpace': 'Jaguar F-PACE'
            };
            alert(`${name}! Your test drive for the ${modelNames[model]} has been booked for ${date}. We'll confirm via email at ${email}`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            alert(`Thank you! We've sent a confirmation email to ${email}`);
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// CTA Button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const modelsSection = document.querySelector('#models');
        if (modelsSection) {
            modelsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.model-card, .feature-item, .testimonial-card, .gallery-item, .spec-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('🐆 Jaguar Portfolio Website Loaded!');
