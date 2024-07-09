document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".name");
    const nameText = nameElement.textContent;
    nameElement.textContent = "";
    
    [...nameText].forEach((char, index) => {
        setTimeout(() => {
            nameElement.textContent += char;
        }, index * 100); // Adjust the delay for letter-by-letter effect
    });

    // Reveal the paragraph after the name animation is complete
    setTimeout(() => {
        const introElement = document.querySelector(".intro");
        introElement.style.opacity = "1";
    }, nameText.length * 100 + 500); // Adjust the delay to match the name animation duration
});

$(document).ready(function() {
    // Smooth scrolling on click
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
