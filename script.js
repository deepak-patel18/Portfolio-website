// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling effect for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission (Dummy alert)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
