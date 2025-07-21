document.addEventListener('DOMContentLoaded', function() {
    const sectionTracker = document.getElementById('section-tracker');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#section-tracker a');
    
    // Function to check if user has scrolled to empathize section or below
    // function updateNavVisibility() {
    //     const empathizeSection = document.getElementById('empathize');
    //     const footer = document.querySelector('footer');
        
    //     if (!empathizeSection || !footer) return;
        
    //     const empathizeTop = empathizeSection.offsetTop;
    //     const scrollPosition = window.pageYOffset;
    //     const windowHeight = window.innerHeight;
        
    //     // Check if footer is halfway visible
    //     const footerTop = footer.offsetTop;
    //     const footerHalfwayPoint = footerTop - (windowHeight / 2);
        
    //     // Show nav when user reaches empathize section but hide when footer is halfway visible
    //     if (scrollPosition >= empathizeTop  && scrollPosition < footerHalfwayPoint) {
    //         sectionTracker.style.opacity = '1';
    //         sectionTracker.style.visibility = 'visible';
    //     } else {
    //         sectionTracker.style.opacity = '0';
    //         sectionTracker.style.visibility = 'hidden';
    //     }
    // }

    function updateNavVisibility() {
    const empathizeSection = document.getElementById('empathize');
    const footer = document.querySelector('footer');
    const sectionTracker = document.getElementById('section-tracker');
    
    if (!empathizeSection || !footer) return;

    const empathizeTop = empathizeSection.offsetTop;
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const footerTop = footer.offsetTop;
    const footerHalfwayPoint = footerTop - (windowHeight / 2);

    // Stick to top after scrolling past empathize
    if (scrollPosition >= empathizeTop && scrollPosition < footerHalfwayPoint) {
        sectionTracker.classList.add('sticky');
        sectionTracker.style.opacity = '1';
        sectionTracker.style.visibility = 'visible';
    } else {
        sectionTracker.classList.remove('sticky');
        sectionTracker.style.opacity = '0';
        sectionTracker.style.visibility = 'hidden';
    }
}

    
    // Function to update active nav link
    function updateActiveSection() {
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 200; 
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    function smoothScrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;
        
        const targetPosition = targetSection.offsetTop + 75; 
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    
    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            smoothScrollToSection(targetSection);
        });
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        updateNavVisibility();
        updateActiveSection();
    });
    
    // Initial check
    updateNavVisibility();
    updateActiveSection();
});