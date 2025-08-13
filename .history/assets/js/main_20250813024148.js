(function(){
  const root = document.documentElement;
  const themeToggles = [
    document.getElementById('themeToggle'),
    document.getElementById('themeToggleMobile')
  ].filter(Boolean);
  
  // Language data
  const languages = {
    en: {
      // Navigation
      about: 'About',
      experience: 'Experience',
      applications: 'Applications',
      certificates: 'Certificates',
      ipr: 'IPR',
      organizations: 'Organizations',
      achievements: 'Achievements',
      contact: 'Contact',
      
      // Hero section
      openToOpportunities: 'Open to international opportunities',
      contactMe: 'Contact Me',
      viewApplications: 'View Applications',
      basedIn: 'Based in',
      
      // About section
      aboutMe: 'About Me',
      profile: 'Profile',
      skillsTechnologies: 'Skills & Technologies',
      education: 'Education',
      
      // Experience section
      workExperience: 'Work Experience',
      professionalJourney: 'My professional journey in software engineering and technology',
      
      // Organizations section
      organizationsAwards: 'Achievements & Awards',
      leadershipRoles: 'Academic achievements, competitions, and recognition in various fields',
      organizations: 'Organizations',
      awardsRecognition: 'Awards & Recognition',
      
      // Organizations content
      bankIndonesia: 'Bank Indonesia',
      genbiOfTheYear: 'GenBI Of The Year 2019/2020',
      beasiswaBankIndonesia: 'Bank Indonesia Scholarship 2018',
      mahasiswaBerprestasi: 'Outstanding Student Faculty of Engineering 2018',
      kompetisiLomba: 'Competitions & Contests',
      aseanSkillsCompetition: 'ASEAN Skills Competition (ASC)',
      finalisAseanSkillNasional: 'ASEAN Skill National Finalist Jakarta 2017',
      juara1AseanSkillProvinsi: '1st Place ASEAN Skill Province Bengkulu 2017',
      finalisAseanSkillProvinsi: 'ASEAN Skill Province Finalist Bengkulu 2015',
      lombaKompetensiSiswa: 'Student Competency Competition (LKS)',
      finalisLKSNasional: 'LKS National Finalist Web Design & Development Malang, East Java 2016',
      juara1LKSProvinsi: '1st Place LKS Province Bengkulu Web Design & Development 2016',
      juara1LKSKota: '1st Place LKS City Bengkulu Web Design & Development 2016',
      inkubatorBisnisTeknologi: 'Technology Business Incubator University of Bengkulu',
      pembicaraWebinar: 'Speaker at startup digitalization webinar 2021',
      juara1Inkubator: '1st Place Technology Business Incubator 2020',
      
      // Projects section
      selectedProjects: 'Selected projects and products I\'ve built with modern technologies',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo →',
      details: 'Details →',
      
      // Contact section
      getInTouch: 'Get In Touch',
      readyToCollaborate: 'Ready to collaborate? Let\'s discuss your next project or opportunity',
      email: 'Email',
      phone: 'Phone',
      socialProfiles: 'Social Profiles',
      sendMessageDirectly: 'Send me a message directly',
      callMeDirectly: 'Call me directly',
      connectWithMeOnline: 'Connect with me online',
      copyEmail: 'Copy Email',
      copyPhone: 'Copy Phone',
      
      // Toast messages
      copiedToClipboard: 'Copied to clipboard!',
      
      // Modal
      close: 'Close'
    },
    id: {
      // Navigation
      about: 'Tentang',
      experience: 'Pengalaman',
      applications: 'Aplikasi',
      certificates: 'Sertifikat',
      ipr: 'HKI',
      organizations: 'Organisasi',
      achievements: 'Pencapaian',
      contact: 'Kontak',
      
      // Hero section
      openToOpportunities: 'Terbuka untuk peluang internasional',
      contactMe: 'Hubungi Saya',
      viewApplications: 'Lihat Aplikasi',
      basedIn: 'Berbasis di',
      
      // About section
      aboutMe: 'Tentang Saya',
      profile: 'Profil',
      skillsTechnologies: 'Keahlian & Teknologi',
      education: 'Pendidikan',
      
      // Experience section
      workExperience: 'Pengalaman Kerja',
      professionalJourney: 'Perjalanan profesional saya dalam rekayasa perangkat lunak dan teknologi',
      
      // Organizations section
      organizationsAwards: 'PRESTASI DAN PENGHARGAAN',
      leadershipRoles: 'Pencapaian akademik, kompetisi, dan pengakuan dalam berbagai bidang',
      organizations: 'Organisasi',
      awardsRecognition: 'Penghargaan & Pengakuan',
      
      // Organizations content
      bankIndonesia: 'Bank Indonesia',
      genbiOfTheYear: 'GenBI Of The Year 2019/2020',
      beasiswaBankIndonesia: 'Beasiswa Bank Indonesia 2018',
      mahasiswaBerprestasi: 'Mahasiswa Berprestasi Fakultas Teknik 2018',
      kompetisiLomba: 'Kompetisi & Lomba',
      aseanSkillsCompetition: 'ASEAN Skills Competition (ASC)',
      finalisAseanSkillNasional: 'Finalis ASEAN Skill Nasional Jakarta 2017',
      juara1AseanSkillProvinsi: 'Juara 1 ASEAN Skill Provinsi Bengkulu 2017',
      finalisAseanSkillProvinsi: 'Finalis ASEAN Skill Provinsi Bengkulu 2015',
      lombaKompetensiSiswa: 'Lomba Kompetensi Siswa (LKS)',
      finalisLKSNasional: 'Finalis LKS Nasional Web Design & Development Malang, Jawa Timur 2016',
      juara1LKSProvinsi: 'Juara 1 LKS Provinsi Bengkulu Web Design & Development 2016',
      juara1LKSKota: 'Juara 1 LKS Kota Bengkulu Web Design & Development 2016',
      inkubatorBisnisTeknologi: 'Inkubator Bisnis Teknologi Universitas Bengkulu',
      pembicaraWebinar: 'Pembicara kegiatan webinar digitalisasi startup 2021',
      juara1Inkubator: 'Juara 1 Inkubator Bisnis Teknologi 2020',
      
      // Projects section
      selectedProjects: 'Proyek dan produk terpilih yang telah saya buat dengan teknologi modern',
      viewDetails: 'Lihat Detail',
      liveDemo: 'Demo Langsung →',
      details: 'Detail →',
      
      // Contact section
      getInTouch: 'Hubungi Saya',
      readyToCollaborate: 'Siap berkolaborasi? Mari diskusikan proyek atau peluang Anda berikutnya',
      email: 'Email',
      phone: 'Telepon',
      socialProfiles: 'Profil Sosial',
      sendMessageDirectly: 'Kirim pesan langsung kepada saya',
      callMeDirectly: 'Telepon saya langsung',
      connectWithMeOnline: 'Hubungi saya secara online',
      copyEmail: 'Salin Email',
      copyPhone: 'Salin Telepon',
      
      // Toast messages
      copiedToClipboard: 'Tersalin ke clipboard!',
      
      // Modal
      close: 'Tutup'
    }
  };
  
  // Current language (default: English)
  let currentLanguage = localStorage.getItem('language') || 'en';
  
  // Function to change language
  function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update language toggle buttons
    const languageText = document.querySelector('#languageToggle span');
    const languageTextMobile = document.querySelector('#languageToggleMobile span');
    
    if (lang === 'en') {
      if (languageText) languageText.textContent = 'EN';
      if (languageTextMobile) languageTextMobile.textContent = 'Language: EN';
    } else {
      if (languageText) languageText.textContent = 'ID';
      if (languageTextMobile) languageTextMobile.textContent = 'Language: ID';
    }
    
    // Apply translations
    applyTranslations(lang);
    
    // Close dropdowns
    const languageDropdown = document.getElementById('languageDropdown');
    const languageDropdownMobile = document.getElementById('languageDropdownMobile');
    if (languageDropdown) languageDropdown.classList.add('hidden');
    if (languageDropdownMobile) languageDropdownMobile.classList.add('hidden');
  }
  
  // Function to apply translations
  function applyTranslations(lang) {
    const langData = languages[lang];
    
    // Update navigation
    document.querySelectorAll('a[href="#about"]').forEach(el => el.textContent = langData.about);
    document.querySelectorAll('a[href="#experience"]').forEach(el => el.textContent = langData.experience);
    document.querySelectorAll('a[href="#projects"]').forEach(el => el.textContent = langData.applications);
    document.querySelectorAll('a[href="#certificates"]').forEach(el => el.textContent = langData.certificates);
    document.querySelectorAll('a[href="#ipr"]').forEach(el => el.textContent = langData.ipr);
    document.querySelectorAll('a[href="#organizations"]').forEach(el => el.textContent = langData.organizations);
    document.querySelectorAll('a[href="#achievements"]').forEach(el => el.textContent = langData.achievements);
    document.querySelectorAll('a[href="#contact"]').forEach(el => el.textContent = langData.contact);
    
    // Update section headers
    const aboutHeader = document.querySelector('#about h2');
    if (aboutHeader) aboutHeader.textContent = langData.aboutMe;
    
    const experienceHeader = document.querySelector('#experience h2');
    if (experienceHeader) experienceHeader.textContent = langData.workExperience;
    
    const organizationsHeader = document.querySelector('#organizations h2');
    if (organizationsHeader) organizationsHeader.textContent = langData.organizationsAwards;
    
    const organizationsDesc = document.querySelector('#organizations p');
    if (organizationsDesc) organizationsDesc.textContent = langData.leadershipRoles;
    
    const projectsHeader = document.querySelector('#projects h2');
    if (projectsHeader) projectsHeader.textContent = langData.applications;
    
    const contactHeader = document.querySelector('#contact h2');
    if (contactHeader) contactHeader.textContent = langData.getInTouch;
  }
  
  // Initialize language
  changeLanguage(currentLanguage);
  
  // Language toggle event listeners
  const languageToggle = document.getElementById('languageToggle');
  const languageToggleMobile = document.getElementById('languageToggleMobile');
  
  if (languageToggle) {
    languageToggle.addEventListener('click', function() {
      const languageDropdown = document.getElementById('languageDropdown');
      if (languageDropdown) languageDropdown.classList.toggle('hidden');
    });
  }
  
  if (languageToggleMobile) {
    languageToggleMobile.addEventListener('click', function() {
      const languageDropdownMobile = document.getElementById('languageDropdownMobile');
      if (languageDropdownMobile) languageDropdownMobile.classList.toggle('hidden');
    });
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    const languageToggle = document.getElementById('languageToggle');
    const languageToggleMobile = document.getElementById('languageToggleMobile');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageDropdownMobile = document.getElementById('languageDropdownMobile');
    
    if (languageToggle && !languageToggle.contains(event.target)) {
      if (languageDropdown) languageDropdown.classList.add('hidden');
    }
    if (languageToggleMobile && !languageToggleMobile.contains(event.target)) {
      if (languageDropdownMobile) languageDropdownMobile.classList.add('hidden');
    }
  });
  
    // Make changeLanguage function globally available
  window.changeLanguage = changeLanguage;
  
  // Loading screen functionality
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }
  
  // Hide loading screen after page loads
  window.addEventListener('load', hideLoadingScreen);
  
  // Fallback: hide loading screen after 3 seconds
  setTimeout(hideLoadingScreen, 3000);
  
  // Back to top functionality
  function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Initialize back to top
  initBackToTop();
 
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
      'Web Developer • Full-Stack Developer',
      'Laravel Developer',
      'Vue.js Developer',
      'Government Systems Developer',
      'Problem Solver'
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
        title: 'Sistem Informasi Remunerasi',
        description: 'Sistem informasi untuk manajemen remunerasi dosen dan tenaga kependidikan di Poltekkes Kemenkes Bengkulu. Aplikasi ini mengelola perhitungan gaji, tunjangan, dan laporan keuangan secara terintegrasi.',
        features: [
          'Manajemen data dosen dan tenaga kependidikan',
          'Perhitungan remunerasi otomatis',
          'Laporan keuangan terintegrasi',
          'Dashboard admin yang informatif',
          'Sistem notifikasi real-time'
        ],
        tech: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'jQuery'],
        image: 'assets/img/project-1.jpg',
        liveUrl: '#',
        challenges: 'Mengintegrasikan berbagai komponen perhitungan remunerasi yang kompleks dengan sistem database yang robust.',
        solutions: 'Menggunakan Laravel untuk backend yang scalable, Vue.js untuk frontend yang responsif, dan implementasi caching untuk performa optimal.'
      },
      project2: {
        title: 'Sistem Informasi Penelitian',
        description: 'Sistem informasi untuk manajemen penelitian dan evaluasi dosen di Universitas Bengkulu. Aplikasi ini memudahkan proses pengajuan, monitoring, dan evaluasi penelitian dosen.',
        features: [
          'Pengajuan proposal penelitian online',
          'Monitoring progress penelitian',
          'Sistem evaluasi dan penilaian',
          'Laporan penelitian terintegrasi',
          'Dashboard untuk dosen dan admin'
        ],
        tech: ['CodeIgniter', 'jQuery', 'Bootstrap', 'MySQL', 'PHP'],
        image: 'assets/img/project-2.jpg',
        liveUrl: '#',
        challenges: 'Membangun sistem yang dapat mengelola workflow penelitian dari proposal hingga laporan akhir dengan berbagai status dan approval.',
        solutions: 'Menggunakan CodeIgniter untuk struktur MVC yang rapi, implementasi state machine untuk workflow, dan sistem notifikasi email otomatis.'
      },
      project3: {
        title: 'Sistem Informasi Masyarakat',
        description: 'Sistem informasi untuk layanan masyarakat di DPRD Kabupaten Kepahiang. Aplikasi ini memudahkan masyarakat mengakses informasi dan layanan DPRD secara online.',
        features: [
          'Informasi kegiatan DPRD',
          'Layanan pengaduan online',
          'Tracking status pengaduan',
          'Berita dan pengumuman',
          'Kontak dan lokasi DPRD'
        ],
        tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'PHP'],
        image: 'assets/img/project-3.jpg',
        liveUrl: '#',
        challenges: 'Membangun sistem yang user-friendly untuk masyarakat dengan berbagai tingkat literasi digital dan kebutuhan informasi yang beragam.',
        solutions: 'Menggunakan Laravel untuk backend yang robust, Vue.js untuk frontend yang interaktif, dan desain responsif dengan Tailwind CSS.'
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
