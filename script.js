document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

