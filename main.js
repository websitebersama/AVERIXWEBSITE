// Navbar toggle for mobile
const navbarToggle = document.getElementById('navbarToggle');
const navbarMobileMenu = document.getElementById('navbarMobileMenu');

if (navbarToggle && navbarMobileMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMobileMenu.classList.toggle('active');
    
    // Toggle icon
    const icon = navbarToggle.querySelector('i');
    if (navbarMobileMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.navbar-mobile-link, .navbar-mobile-cta');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarMobileMenu.classList.remove('active');
      const icon = navbarToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
}

// Smooth scroll offset for sticky navbar (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - navHeight - 10,
        behavior: 'smooth'
      });
    }
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');
    
    // Close all FAQ items
    faqQuestions.forEach(q => {
      q.classList.remove('active');
      if (q.nextElementSibling) {
        q.nextElementSibling.classList.remove('active');
      }
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      question.classList.add('active');
      if (answer) {
        answer.classList.add('active');
      }
    }
  });
});

// Set current year in footer
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
