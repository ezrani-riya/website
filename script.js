// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (basic, needs server-side handling)
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // You would typically send the form data to a server here using AJAX
    // For this example, we'll just display an alert message.
    alert('Form submitted! (This is just a placeholder.)');

    // Optionally clear the form fields
    this.reset();
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
