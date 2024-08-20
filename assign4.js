document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = 'yellow';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    });
});
