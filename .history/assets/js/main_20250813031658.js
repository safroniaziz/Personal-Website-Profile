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
      heroDescription: 'Hello! I\'m Safroni Aziz Suprianto, an experienced Web Developer with 6+ years in web development. Currently working as a Software Developer at the Supreme Audit Institution of Indonesia, previously at the University of Bengkulu.',
      
      // About section
      aboutMe: 'About Me',
      profile: 'Profile',
      skillsTechnologies: 'Skills & Technologies',
      education: 'Education',
      aboutDescription: 'Passionate software engineer crafting digital experiences with innovation and precision',
      profileDescription: 'Experienced Web Developer with 6+ years in web development. Currently working as a Software Developer at the Supreme Audit Institution of Indonesia, previously at the University of Bengkulu. Specialized in developing information systems for government and private institutions.',
      bachelorDegree: 'Bachelor\'s degree, Information Technology',
      webPageDesign: 'Web Page, Digital/Multimedia Design',
      stateVocationalHighSchool: 'State Vocational High School 1 Kota Bengkulu',
      headOfIT: 'Head of IT at HIMATIF, GenBI Member',
      
      // Experience section
      workExperience: 'Work Experience',
      professionalJourney: 'My professional journey in software engineering and technology',
      webDeveloper: 'Web Developer',
      auditBoardIndonesia: 'The Audit Board of Indonesia',
      universityBengkulu: 'University of Bengkulu',
      developingInfoSystems: 'Developing information systems for state audit and financial examination using modern technologies.',
      developedVariousSystems: 'Developed various information systems for the university and related institutions.',
      webAppDevelopment: 'Web application development with Laravel and Vue.js',
      integrationNetGo: 'Integration with .NET Framework and Go',
      tailwindImplementation: 'Tailwind CSS implementation for modern UI design',
      
      // Experience bullet points
      researchSystem: 'Research & Lecturer Evaluation Information System',
      remunerationSystem: 'Poltekkes Remuneration Information System',
      shareManagementSystem: 'Share Management & Bank Bengkulu Report System',
      andManyMore: 'And many more (etc.)',
      
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
      
      // Achievement descriptions
      genbiDescription: 'Highest award for GenBI members who excel and actively contribute to Bank Indonesia\'s program.',
      beasiswaDescription: 'Full scholarship from Bank Indonesia for outstanding students in the Generasi Baru Indonesia (GenBI) program.',
      mahasiswaBerprestasiDescription: 'Award for outstanding students at the faculty of engineering level based on academic and non-academic achievements.',
      aseanSkillDescription: 'Web Design Technology',
      lksDescription: 'Web Design & Development',
      genbiProgram: 'Bank Indonesia\'s flagship program for outstanding students',
      ercomDescription: 'Research and technology community for engineering students',
      himatifDescription: 'Student organization for Information Technology major',
      
      // Projects section
      selectedProjects: 'Selected projects and products I\'ve built with modern technologies',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo →',
      details: 'Details →',
      remunerationSystem: 'Remuneration Information System',
      remunerationDescription: 'Information system for managing remuneration of lecturers and educational staff at Poltekkes Kemenkes Bengkulu.',
      researchSystem: 'Research Information System',
      researchDescription: 'Information system for managing research and lecturer evaluation at the University of Bengkulu.',
      communitySystem: 'Community Information System',
      communityDescription: 'Information system for community services at the Kepahiang District Legislative Council.',
      
      // Footer and other texts
      experiencedWebDeveloper: 'Experienced web developer specializing in Laravel, Vue.js, and government information systems.',
      
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
      
      // Certificates section
      certificates: 'Certificates',
      certificatesDescription: 'Professional certifications in technology and development',
      dasarPemrogramanWeb: 'Dasar Pemrograman Web (Google Curriculum)',
      dasarPemrogramanDescription: 'Comprehensive web development fundamentals following Google\'s curriculum standards.',
      englishSpeaking: 'English Speaking Program',
      englishSpeakingDescription: 'Intensive 2-month English speaking and communication skills program.',
      laravelFlutter: 'Full-Stack Laravel & Flutter: Food Market Apps',
      laravelFlutterDescription: 'Advanced full-stack development certification for food market applications.',
      fullStackWeb: 'Full-Stack Web Developer',
      fullStackWebDescription: 'Comprehensive full-stack web development certification covering modern technologies.',
      kubernetesCKAD: 'Certified Kubernetes Application Developer (CKAD) Preparation',
      kubernetesCKADDescription: 'Advanced Kubernetes certification preparation for cloud-native application development.',
      sqlServer: 'Microsoft SQL Server 2022 Advanced',
      sqlServerDescription: 'Advanced SQL Server 2022 management, optimization, and performance tuning certification.',
      issued: 'Issued',
      credentialId: 'Credential ID',
      course: 'Course',
      issuer: 'Issuer',
      
      // Job titles and other texts
      fullStackDeveloper: 'Full-Stack Developer',
      webDeveloperFullStack: 'Web Developer • Full-Stack Developer',
      
      // IPR section
      ipr: 'IPR',
      iprDescription: 'Registered intellectual property rights (Hak Kekayaan Intelektual) and innovations',
      innovativeSoftwareArchitecture: 'Innovative Software Architecture',
      patentRegistration: 'Patent Registration',
      active: 'Active',
      registrationNo: 'Registration No',
      registrationYear: 'Registration Year',
      jurisdiction: 'Jurisdiction',
      innovativeSoftwareDescription: 'A novel approach to scalable software architecture that improves performance and reduces infrastructure costs by 40%. This innovation addresses the growing need for efficient resource utilization in cloud computing environments.',
      viewCertificate: 'View Certificate',
      validUntil: 'Valid until',
      aiPoweredDataProcessing: 'AI-Powered Data Processing',
      copyrightRegistration: 'Copyright Registration',
      aiPoweredDescription: 'Advanced machine learning algorithms for real-time data processing and analysis. This system provides intelligent insights and automated decision-making capabilities for enterprise applications.',
      
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
      heroDescription: 'Halo! Saya Safroni Aziz Suprianto, seorang Web Developer berpengalaman dengan 6+ tahun dalam pengembangan web. Saat ini bekerja sebagai Software Developer di Badan Pemeriksa Keuangan Republik Indonesia, sebelumnya di Universitas Bengkulu.',
      
      // About section
      aboutMe: 'Tentang Saya',
      profile: 'Profil',
      skillsTechnologies: 'Keahlian & Teknologi',
      education: 'Pendidikan',
      aboutDescription: 'Insinyur perangkat lunak yang bersemangat dalam menciptakan pengalaman digital dengan inovasi dan presisi',
      profileDescription: 'Web Developer berpengalaman dengan 6+ tahun dalam pengembangan web. Saat ini bekerja sebagai Software Developer di Badan Pemeriksa Keuangan Republik Indonesia, sebelumnya di Universitas Bengkulu. Spesialisasi dalam mengembangkan sistem informasi untuk lembaga pemerintah dan swasta.',
      bachelorDegree: 'Sarjana, Teknologi Informasi',
      webPageDesign: 'Halaman Web, Desain Digital/Multimedia',
      stateVocationalHighSchool: 'SMKN 1 Kota Bengkulu',
      headOfIT: 'Kepala IT di HIMATIF, Anggota GenBI',
      
      // Experience section
      workExperience: 'Pengalaman Kerja',
      professionalJourney: 'Perjalanan profesional saya dalam rekayasa perangkat lunak dan teknologi',
      webDeveloper: 'Web Developer',
      auditBoardIndonesia: 'Badan Pemeriksa Keuangan Republik Indonesia',
      universityBengkulu: 'Universitas Bengkulu',
      developingInfoSystems: 'Mengembangkan sistem informasi untuk audit negara dan pemeriksaan keuangan menggunakan teknologi modern.',
      developedVariousSystems: 'Mengembangkan berbagai sistem informasi untuk universitas dan lembaga terkait.',
      webAppDevelopment: 'Pengembangan aplikasi web dengan Laravel dan Vue.js',
      integrationNetGo: 'Integrasi dengan .NET Framework dan Go',
      tailwindImplementation: 'Implementasi Tailwind CSS untuk desain UI modern',
      
      // Experience bullet points
      researchSystem: 'Sistem Informasi Penelitian & Evaluasi Dosen',
      remunerationSystem: 'Sistem Informasi Remunerasi Poltekkes',
      shareManagementSystem: 'Sistem Manajemen Saham & Laporan Bank Bengkulu',
      andManyMore: 'Dan masih banyak lagi (dll.)',
      
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
      
      // Achievement descriptions
      genbiDescription: 'Penghargaan tertinggi untuk anggota GenBI yang berprestasi dan aktif berkontribusi pada program Bank Indonesia.',
      beasiswaDescription: 'Beasiswa penuh dari Bank Indonesia untuk mahasiswa berprestasi dalam program Generasi Baru Indonesia (GenBI).',
      mahasiswaBerprestasiDescription: 'Penghargaan untuk mahasiswa berprestasi tingkat fakultas teknik berdasarkan prestasi akademik dan non-akademik.',
      aseanSkillDescription: 'Teknologi Web Design',
      lksDescription: 'Web Design & Development',
      genbiProgram: 'Program unggulan Bank Indonesia untuk mahasiswa berprestasi',
      ercomDescription: 'Komunitas penelitian dan teknologi untuk mahasiswa teknik',
      himatifDescription: 'Organisasi mahasiswa untuk jurusan Teknologi Informasi',
      
      // Projects section
      selectedProjects: 'Proyek dan produk terpilih yang telah saya buat dengan teknologi modern',
      viewDetails: 'Lihat Detail',
      liveDemo: 'Demo Langsung →',
      details: 'Detail →',
      remunerationSystem: 'Sistem Informasi Remunerasi',
      remunerationDescription: 'Sistem informasi untuk mengelola remunerasi dosen dan tenaga kependidikan di Poltekkes Kemenkes Bengkulu.',
      researchSystem: 'Sistem Informasi Penelitian',
      researchDescription: 'Sistem informasi untuk mengelola penelitian dan evaluasi dosen di Universitas Bengkulu.',
      communitySystem: 'Sistem Informasi Masyarakat',
      communityDescription: 'Sistem informasi untuk layanan masyarakat di Dewan Perwakilan Rakyat Daerah Kabupaten Kepahiang.',
      
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
      
      // Certificates section
      certificates: 'Sertifikat',
      certificatesDescription: 'Sertifikat profesional dalam teknologi dan pengembangan',
      dasarPemrogramanWeb: 'Dasar Pemrograman Web (Kurikulum Google)',
      dasarPemrogramanDescription: 'Fundamental pengembangan web komprehensif mengikuti standar kurikulum Google.',
      englishSpeaking: 'Program Berbicara Bahasa Inggris',
      englishSpeakingDescription: 'Program intensif 2 bulan untuk keterampilan berbicara dan komunikasi bahasa Inggris.',
      laravelFlutter: 'Full-Stack Laravel & Flutter: Aplikasi Pasar Makanan',
      laravelFlutterDescription: 'Sertifikat pengembangan full-stack lanjutan untuk aplikasi pasar makanan.',
      fullStackWeb: 'Full-Stack Web Developer',
      fullStackWebDescription: 'Sertifikat pengembangan web full-stack komprehensif yang mencakup teknologi modern.',
      kubernetesCKAD: 'Persiapan Certified Kubernetes Application Developer (CKAD)',
      kubernetesCKADDescription: 'Persiapan sertifikasi Kubernetes lanjutan untuk pengembangan aplikasi cloud-native.',
      sqlServer: 'Microsoft SQL Server 2022 Advanced',
      sqlServerDescription: 'Sertifikat manajemen, optimasi, dan tuning performa SQL Server 2022 lanjutan.',
      issued: 'Diterbitkan',
      credentialId: 'ID Kredensial',
      course: 'Kursus',
      issuer: 'Penerbit',
      
      // Job titles and other texts
      fullStackDeveloper: 'Pengembang Full-Stack',
      webDeveloperFullStack: 'Web Developer • Pengembang Full-Stack',
      
      // IPR section
      ipr: 'HKI',
      iprDescription: 'Hak kekayaan intelektual terdaftar dan inovasi',
      innovativeSoftwareArchitecture: 'Arsitektur Perangkat Lunak Inovatif',
      patentRegistration: 'Pendaftaran Paten',
      active: 'Aktif',
      registrationNo: 'Nomor Pendaftaran',
      registrationYear: 'Tahun Pendaftaran',
      jurisdiction: 'Yurisdiksi',
      innovativeSoftwareDescription: 'Pendekatan baru untuk arsitektur perangkat lunak yang dapat diskalakan yang meningkatkan performa dan mengurangi biaya infrastruktur sebesar 40%. Inovasi ini mengatasi kebutuhan yang terus meningkat untuk pemanfaatan sumber daya yang efisien dalam lingkungan komputasi awan.',
      viewCertificate: 'Lihat Sertifikat',
      validUntil: 'Berlaku hingga',
      aiPoweredDataProcessing: 'Pemrosesan Data Berbasis AI',
      copyrightRegistration: 'Pendaftaran Hak Cipta',
      aiPoweredDescription: 'Algoritma machine learning lanjutan untuk pemrosesan dan analisis data real-time. Sistem ini menyediakan wawasan cerdas dan kemampuan pengambilan keputusan otomatis untuk aplikasi perusahaan.',
      
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
    
    // Update hero section
    const openToOpportunities = document.querySelector('#home .inline-flex.items-center.gap-2');
    if (openToOpportunities) {
      // Find the text node that contains the actual text (not the span with dots)
      const textNodes = Array.from(openToOpportunities.childNodes);
      const textNode = textNodes.find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (textNode) {
        textNode.textContent = ' ' + langData.openToOpportunities;
      }
    }
    
    const heroDescription = document.querySelector('#home p');
    if (heroDescription) heroDescription.textContent = langData.heroDescription;
    
    const contactMeBtn = document.querySelector('#home a[href="#contact"]');
    if (contactMeBtn) contactMeBtn.textContent = langData.contactMe;
    
    const viewApplicationsBtn = document.querySelector('#home a[href="#projects"]');
    if (viewApplicationsBtn) viewApplicationsBtn.textContent = langData.viewApplications;
    
    const basedIn = document.querySelector('#home .absolute .text-xs');
    if (basedIn) basedIn.textContent = langData.basedIn;
    
    // Update section headers
    const aboutHeader = document.querySelector('#about h2');
    if (aboutHeader) aboutHeader.textContent = langData.aboutMe;
    
    const aboutDescription = document.querySelector('#about .text-center p');
    if (aboutDescription) aboutDescription.textContent = langData.aboutDescription;
    
    const profileTitle = document.querySelector('#about .group:nth-child(1) h3');
    if (profileTitle) profileTitle.textContent = langData.profile;
    
    const profileDescription = document.querySelector('#about .group:nth-child(1) p');
    if (profileDescription) profileDescription.textContent = langData.profileDescription;
    
    const skillsTitle = document.querySelector('#about .group:nth-child(2) h3');
    if (skillsTitle) skillsTitle.textContent = langData.skillsTechnologies;
    
    const educationTitle = document.querySelector('#about .group:nth-child(3) h3');
    if (educationTitle) educationTitle.textContent = langData.education;
    
    const bachelorDegree = document.querySelector('#about .border-l-4:nth-child(1) .font-semibold');
    if (bachelorDegree) bachelorDegree.textContent = langData.bachelorDegree;
    
    const webPageDesign = document.querySelector('#about .border-l-4:nth-child(2) .font-semibold');
    if (webPageDesign) webPageDesign.textContent = langData.webPageDesign;
    
    const stateVocationalHighSchool = document.querySelector('[data-education="stateVocationalHighSchool"]');
    if (stateVocationalHighSchool) stateVocationalHighSchool.textContent = langData.stateVocationalHighSchool + ' • 2013–2016';
    
    const headOfIT = document.querySelector('#about .text-xs');
    if (headOfIT) headOfIT.textContent = langData.headOfIT;
    
    const experienceHeader = document.querySelector('#experience h2');
    if (experienceHeader) experienceHeader.textContent = langData.workExperience;
    
    const experienceDescription = document.querySelector('#experience .text-center p');
    if (experienceDescription) experienceDescription.textContent = langData.professionalJourney;
    
    // Update Work Experience content
    const webDeveloperTitles = document.querySelectorAll('#experience h3');
    webDeveloperTitles.forEach(title => {
      if (title.textContent.includes('Web Developer')) {
        title.textContent = langData.webDeveloper;
      }
    });
    
    const auditBoardText = document.querySelector('#experience .text-primary-600');
    if (auditBoardText) auditBoardText.textContent = langData.auditBoardIndonesia;
    
    const universityBengkuluText = document.querySelector('#experience .text-fuchsia-600');
    if (universityBengkuluText) universityBengkuluText.textContent = langData.universityBengkulu;
    
    const developingInfoSystemsText = document.querySelector('#experience .text-slate-600');
    if (developingInfoSystemsText) developingInfoSystemsText.textContent = langData.developingInfoSystems;
    
    const developedVariousSystemsText = document.querySelectorAll('#experience .text-slate-600')[1];
    if (developedVariousSystemsText) developedVariousSystemsText.textContent = langData.developedVariousSystems;
    
    // Update bullet points for first experience
    const firstExperienceBullets = document.querySelectorAll('#experience .group:nth-child(1) .text-slate-700');
    if (firstExperienceBullets.length >= 3) {
      firstExperienceBullets[0].textContent = langData.webAppDevelopment;
      firstExperienceBullets[1].textContent = langData.integrationNetGo;
      firstExperienceBullets[2].textContent = langData.tailwindImplementation;
    }
    
    const achievementsHeader = document.querySelector('#achievements h2');
    if (achievementsHeader) achievementsHeader.textContent = langData.organizationsAwards;
    
    const achievementsDesc = document.querySelector('#achievements .text-center p');
    if (achievementsDesc) achievementsDesc.textContent = langData.leadershipRoles;
    
    const organizationsHeader = document.querySelector('#organizations h2');
    if (organizationsHeader) organizationsHeader.textContent = langData.organizations;
    
    const organizationsDesc = document.querySelector('#organizations .text-center p');
    if (organizationsDesc) organizationsDesc.textContent = langData.leadershipRoles;
    
    const projectsHeader = document.querySelector('#projects h2');
    if (projectsHeader) projectsHeader.textContent = langData.applications;
    
    const projectsDescription = document.querySelector('#projects .text-center p');
    if (projectsDescription) projectsDescription.textContent = langData.selectedProjects;
    
    const contactHeader = document.querySelector('#contact h2');
    if (contactHeader) contactHeader.textContent = langData.getInTouch;
    
    const contactDescription = document.querySelector('#contact .text-center p');
    if (contactDescription) contactDescription.textContent = langData.readyToCollaborate;
    
    // Update Certificates section
    const certificatesHeader = document.querySelector('#certificates h2');
    if (certificatesHeader) certificatesHeader.textContent = langData.certificates;
    
    const certificatesDescription = document.querySelector('#certificates .text-center p');
    if (certificatesDescription) certificatesDescription.textContent = langData.certificatesDescription;
    
    // Update IPR section
    const iprHeader = document.querySelector('#ipr h2');
    if (iprHeader) iprHeader.textContent = langData.ipr;
    
    const iprDescription = document.querySelector('#ipr .text-center p');
    if (iprDescription) iprDescription.textContent = langData.iprDescription;
    
    // Update Projects section content
    const projectTitles = document.querySelectorAll('#projects h3');
    if (projectTitles.length >= 3) {
      projectTitles[0].textContent = langData.remunerationSystem;
      projectTitles[1].textContent = langData.researchSystem;
      projectTitles[2].textContent = langData.communitySystem;
    }
    
    const projectDescriptions = document.querySelectorAll('#projects .text-slate-600');
    if (projectDescriptions.length >= 3) {
      projectDescriptions[0].textContent = langData.remunerationDescription;
      projectDescriptions[1].textContent = langData.researchDescription;
      projectDescriptions[2].textContent = langData.communityDescription;
    }
    
    // Update Achievement descriptions
    const genbiDescription = document.querySelector('#achievements .text-slate-600');
    if (genbiDescription) genbiDescription.textContent = langData.genbiDescription;
    
    const beasiswaDescription = document.querySelectorAll('#achievements .text-slate-600')[1];
    if (beasiswaDescription) beasiswaDescription.textContent = langData.beasiswaDescription;
    
    const mahasiswaBerprestasiDescription = document.querySelectorAll('#achievements .text-slate-600')[2];
    if (mahasiswaBerprestasiDescription) mahasiswaBerprestasiDescription.textContent = langData.mahasiswaBerprestasiDescription;
    
    // Update Organization descriptions
    const genbiProgram = document.querySelector('#organizations .text-slate-500');
    if (genbiProgram) genbiProgram.textContent = langData.genbiProgram;
    
    const ercomDescription = document.querySelectorAll('#organizations .text-slate-500')[1];
    if (ercomDescription) ercomDescription.textContent = langData.ercomDescription;
    
    const himatifDescription = document.querySelectorAll('#organizations .text-slate-500')[2];
    if (himatifDescription) himatifDescription.textContent = langData.himatifDescription;
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
