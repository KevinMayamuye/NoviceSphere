// NBT Applications Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const nbtPackageBtn = document.getElementById('nbtPackageBtn');
    const nbtPackageMenu = document.getElementById('nbtPackageMenu');
    const nbtCtaBtn = document.getElementById('nbtCtaBtn');
    const nbtCtaMenu = document.getElementById('nbtCtaMenu');

    // NBT package dropdown functionality
    if (nbtPackageBtn && nbtPackageMenu) {
        nbtPackageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nbtPackageBtn.classList.toggle('active');
            nbtPackageMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!nbtPackageBtn.contains(e.target) && !nbtPackageMenu.contains(e.target)) {
                nbtPackageBtn.classList.remove('active');
                nbtPackageMenu.classList.remove('active');
            }
        });

        // Handle dropdown item clicks
        const dropdownItems = nbtPackageMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const packageType = this.getAttribute('href').substring(1);
                
                // Scroll to the appropriate package
                const targetPackage = document.querySelector(`[data-package="${packageType}"]`);
                if (targetPackage) {
                    targetPackage.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Close dropdown
                nbtPackageBtn.classList.remove('active');
                nbtPackageMenu.classList.remove('active');
            });
        });
    }

    // NBT CTA dropdown functionality
    if (nbtCtaBtn && nbtCtaMenu) {
        nbtCtaBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nbtCtaBtn.classList.toggle('active');
            nbtCtaMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!nbtCtaBtn.contains(e.target) && !nbtCtaMenu.contains(e.target)) {
                nbtCtaBtn.classList.remove('active');
                nbtCtaMenu.classList.remove('active');
            }
        });

        // Handle dropdown item clicks
        const ctaDropdownItems = nbtCtaMenu.querySelectorAll('.dropdown-item');
        ctaDropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const action = this.getAttribute('href').substring(1);
                
                if (action === 'packages') {
                    // Scroll to packages section
                    const packagesSection = document.querySelector('#packages');
                    if (packagesSection) {
                        packagesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                
                // Close dropdown
                nbtCtaBtn.classList.remove('active');
                nbtCtaMenu.classList.remove('active');
            });
        });
    }

    // FAQ Accordion Fix
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer) {
        faqContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('faq-question')) {
                const item = e.target.closest('.faq-item');
                // Close other open items
                document.querySelectorAll('.faq-item.active').forEach(openItem => {
                    if (openItem !== item) openItem.classList.remove('active');
                });
                // Toggle current item
                item.classList.toggle('active');
            }
        });
    }

    // FAQ Show More/Less Functionality
    (function() {
      const faqContainer = document.querySelector('.faq-container');
      if (!faqContainer) return;
      const faqItems = faqContainer.querySelectorAll('.faq-item');
      const extraContainer = faqContainer.querySelector('.faq-extra-items');
      const toggleBtn = faqContainer.querySelector('.faq-toggle-btn');
      if (faqItems.length > 3 && extraContainer && toggleBtn) {
        for (let i = 3; i < faqItems.length; i++) {
          extraContainer.appendChild(faqItems[i]);
        }
        toggleBtn.style.display = '';
        toggleBtn.addEventListener('click', function() {
          const isOpen = extraContainer.style.display === 'block';
          extraContainer.style.display = isOpen ? 'none' : 'block';
          toggleBtn.textContent = isOpen ? 'View More' : 'View Less';
        });
      } else if (toggleBtn) {
        toggleBtn.style.display = 'none';
      }
    })();

    // Register buttons
    const registerBtns = document.querySelectorAll('.register-btn');
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // You can implement a modal or redirect to a registration page
            alert('NBT Registration functionality - implement your preferred registration solution');
        });
    });

    // Explore more options buttons
    const exploreBtns = document.querySelectorAll('.explore-btn');
    exploreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // You can implement a modal or redirect to explore more options
            alert('Explore more options functionality - implement your preferred solution');
        });
    });

    // FAQ CTA buttons
    const faqCtaBtns = document.querySelectorAll('.faq-cta .btn');
    faqCtaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            if (buttonText === 'Schedule a Free Call') {
                alert('Schedule a free call functionality - implement your preferred scheduling solution');
            } else if (buttonText === 'Apply for me') {
                // Scroll to packages section
                const packagesSection = document.querySelector('#packages');
                if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Support CTA buttons
    const supportCtaBtns = document.querySelectorAll('.support-cta .btn');
    supportCtaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            if (buttonText === 'Schedule a Free Call') {
                alert('Schedule a free call functionality - implement your preferred scheduling solution');
            } else if (buttonText === 'Learn How It Works') {
                // Scroll to how it works section
                const howItWorksSection = document.querySelector('.how-it-works');
                if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}); 
// Horizontal Scroll Navigation
function setupScrollNavigation() {
    const scrollContainers = document.querySelectorAll('.services-grid, .packages-grid, .reviews-track');
    
    scrollContainers.forEach(container => {
        // Create scroll container wrapper if it doesn't exist
        let scrollWrapper = container.parentElement;
        if (!scrollWrapper.classList.contains('scroll-container')) {
            scrollWrapper = document.createElement('div');
            scrollWrapper.className = 'scroll-container';
            container.parentNode.insertBefore(scrollWrapper, container);
            scrollWrapper.appendChild(container);
        }
        
        // Create navigation arrows
        const leftArrow = document.createElement('button');
        leftArrow.className = 'scroll-arrow left';
        leftArrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>';
        leftArrow.setAttribute('aria-label', 'Scroll left');
        
        const rightArrow = document.createElement('button');
        rightArrow.className = 'scroll-arrow right';
        rightArrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>';
        rightArrow.setAttribute('aria-label', 'Scroll right');
        
        scrollWrapper.appendChild(leftArrow);
        scrollWrapper.appendChild(rightArrow);
        
        // Scroll functionality
        const scrollAmount = 300; // Adjust scroll distance
        
        leftArrow.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        rightArrow.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update arrow visibility based on scroll position
        function updateArrows() {
            const isAtStart = container.scrollLeft <= 0;
            const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
            
            leftArrow.disabled = isAtStart;
            rightArrow.disabled = isAtEnd;
        }
        
        // Initial update
        updateArrows();
        
        // Update on scroll
        container.addEventListener('scroll', updateArrows);
        
        // Update on resize
        window.addEventListener('resize', updateArrows);
    });
}

// Initialize scroll navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', setupScrollNavigation); 
