// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// Mobile Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (isValid) {
        form.submit();
    } else {
        alert('Please fill in all fields.');
    }
});
