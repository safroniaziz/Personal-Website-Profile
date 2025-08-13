(function(){
  const root = document.documentElement;
  const themeToggles = [
    document.getElementById('themeToggle'),
    document.getElementById('themeToggleMobile')
  ].filter(Boolean);

  function setTheme(mode) {
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
    updateIcons();
  }

  function updateIcons() {
    const isDark = root.classList.contains('dark');
    const sun = document.getElementById('iconSun');
    const moon = document.getElementById('iconMoon');
    if (sun && moon) {
      if (isDark) {
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
      } else {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
      }
    }
  }

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentlyDark = root.classList.contains('dark');
      setTheme(currentlyDark ? 'light' : 'dark');
    });
  });

  // Mobile menu
  const mobileButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileButton && mobileMenu) {
    mobileButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = mobileButton.getAttribute('aria-expanded') === 'true';
      mobileButton.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Typing animation for job title
  function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const phrases = [
      'Software Engineer • Web & Mobile',
      'Full-Stack Developer',
      'UI/UX Enthusiast',
      'Problem Solver',
      'Team Player'
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at end of phrase
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    // Start typing animation after a delay
    setTimeout(type, 1000);
  }

  // Scrollspy for active navigation
  function initScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function updateActiveNav() {
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('section-active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('section-active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
  }

  // Project modal functionality
  function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;

    const projectData = {
      project1: {
        title: 'Project One',
        description: 'A comprehensive web application that streamlines business processes and improves user productivity through intuitive design. Built with modern technologies and best practices for scalability and performance.',
        features: [
          'Responsive design for all devices',
          'Real-time data synchronization',
          'Advanced user authentication',
          'Performance optimization',
          'Comprehensive testing suite'
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
        image: 'assets/img/project-1.jpg',
        liveUrl: '#',
        challenges: 'Implemented complex state management for real-time features while maintaining optimal performance across different network conditions.',
        solutions: 'Utilized React Context with useReducer for state management, implemented WebSocket connections with fallback to polling, and added comprehensive error handling.'
      },
      project2: {
        title: 'Project Two',
        description: 'Modern e-commerce platform with advanced search, payment integration, and responsive design for optimal user experience. Handles high traffic and complex product catalog management.',
        features: [
          'Advanced product search and filtering',
          'Secure payment processing',
          'Inventory management system',
          'Admin dashboard',
          'Analytics and reporting'
        ],
        tech: ['Next.js', 'Prisma', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
        image: 'assets/img/project-2.jpg',
        liveUrl: '#',
        challenges: 'Building a scalable search system that could handle thousands of products with complex filtering requirements.',
        solutions: 'Implemented Elasticsearch for advanced search capabilities, created efficient database indexing strategies, and built a caching layer for improved performance.'
      },
      project3: {
        title: 'Project Three',
        description: 'Cross-platform mobile application for task management with real-time synchronization and offline capabilities. Designed for teams to collaborate effectively on projects.',
        features: [
          'Cross-platform compatibility',
          'Offline-first architecture',
          'Real-time collaboration',
          'Push notifications',
          'Data synchronization'
        ],
        tech: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore', 'Firebase Auth'],
        image: 'assets/img/project-3.jpg',
        liveUrl: '#',
        challenges: 'Implementing offline-first functionality while ensuring data consistency across multiple devices and users.',
        solutions: 'Used Flutter\'s local storage capabilities, implemented conflict resolution strategies, and built a robust sync mechanism with Firebase.'
      }
    };

    window.openProjectModal = function(projectId) {
      const project = projectData[projectId];
      if (!project) return;

      modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <img src="${project.image}" alt="${project.title}" class="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">${project.title}</h2>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">${project.description}</p>
            
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Features</h3>
              <ul class="space-y-2">
                ${project.features.map(feature => `<li class="flex items-center gap-2 text-slate-600 dark:text-slate-300"><div class="w-2 h-2 bg-primary-500 rounded-full"></div>${feature}</li>`).join('')}
              </ul>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                ${project.tech.map(tech => `<span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm">${tech}</span>`).join('')}
              </div>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Challenges & Solutions</h3>
              <div class="space-y-3">
                <div>
                  <h4 class="font-medium text-slate-900 dark:text-slate-100">Challenge:</h4>
                  <p class="text-slate-600 dark:text-slate-300 text-sm">${project.challenges}</p>
                </div>
                <div>
                  <h4 class="font-medium text-slate-900 dark:text-slate-100">Solution:</h4>
                  <p class="text-slate-600 dark:text-slate-300 text-sm">${project.solutions}</p>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <a href="${project.liveUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    window.closeProjectModal = function() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    // Close modal on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeProjectModal();
      }
    });
  }

  // Copy to clipboard functionality
  function initCopyToClipboard() {
    window.copyToClipboard = function(text) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard!');
      });
    };
  }

  // Toast notification
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }

  // Initialize all functionality
  function init() {
    initTypingAnimation();
    initScrollspy();
    initProjectModal();
    initCopyToClipboard();
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Initialize icon state
  updateIcons();

  // Initialize everything when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
