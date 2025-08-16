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
      applications: 'Portfolio',
      certificates: 'Certificates',
      ipr: 'IPR',
      organizations: 'Organizations',
      achievements: 'Achievements',
      contact: 'Contact',
      
      // Hero section
      openToOpportunities: 'Open to international opportunities',
      contactMe: 'Contact Me',
      viewApplications: 'View Portfolio',
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
      
      // Missing translations
      speakerStartupDigitalization: 'Speaker at startup digitalization webinar',
      universitasBengkulu: 'University of Bengkulu',
      stateVocationalHighSchool: 'State Vocational High School 1 Kota Bengkulu • 2013–2016',
      universitasBengkuluPeriod: 'Universitas Bengkulu • 2016–2021',
      aboutMeDescription: 'Passionate software engineer crafting digital experiences with innovation and precision',
      workExperienceDescription: 'My professional journey in software engineering and technology',
      applicationsDescription: 'Selected projects and products I\'ve built with modern technologies',
      certificatesDescription: 'Professional certifications in technology and development',
      intellectualPropertyRights: 'Intellectual Property Rights',
      iprDescription: 'Registered intellectual property rights and innovations',
      organizationsDescription: 'Organizations, communities, and affiliations throughout my journey',
      quickLinks: 'Quick Links',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      
      // Projects section
      selectedProjects: 'Selected projects and products I\'ve built with modern technologies',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo →',
      details: 'Details →',
      
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
      
      // WhatsApp (new)
      whatsapp: 'WhatsApp',
      chatDirectly: 'Chat me directly',
      openWhatsApp: 'Open WhatsApp',
      
      // Professional CTA and Stats
      startProject: 'Start a Project',
      viewPortfolio: 'View Portfolio',
      sixPlus: '6+',
      yearsExperience: 'Years Experience',
      fiftyPlus: '50+',
      projectsCompleted: 'Projects Completed',
      oneHundredPercent: '100%',
      clientSatisfaction: 'Client Satisfaction',
      
      // Testimonials
      testimonials: 'What Clients Say',
      testimonialsDescription: 'Feedback from satisfied clients and colleagues',
      testimonial1: '"Safroni delivered exceptional work on our government information system. His attention to detail and technical expertise exceeded our expectations. Highly professional and reliable."',
      client1Name: 'Dr. Rahman',
      client1Title: 'Project Manager, Government Agency',
      testimonial2: '"Working with Safroni was a pleasure. He transformed our outdated system into a modern, efficient platform. His Laravel and Vue.js skills are top-notch."',
      client2Name: 'Ahmad Sari',
      client2Title: 'IT Director, University',
      testimonial3: '"Safroni\'s expertise in web development is outstanding. He delivered our project on time and within budget. I would definitely work with him again."',
      client3Name: 'Maria Indah',
      client3Title: 'CEO, Tech Startup',
      
      // Toast messages
      copiedToClipboard: 'Copied to clipboard!',
      
      // Modal
      close: 'Close',
      
      // Projects translations
      featuredProjects: 'Featured Projects',
      additionalProjects: 'Additional Projects',
      
      // Project with images
      bdaruTitle: 'Digital Museum Balai Adat Rajo Penghulu',
      bdaruDescription: 'Digital museum system for traditional customs with 3 user roles: admin, manager, and visitor',
      
      siamiTitle: 'SIAMI LPMPP UNIB',
      siamiDescription: 'Internal Quality Audit Information System with 3 user roles: auditee, auditor, and administrator',
      
      eberesTitle: 'E-Beres FISIP UNIB',
      eberesDescription: 'Comprehensive administrative system for letter requests, digital guest book, and course scheduling',
      
      koperasiTitle: 'Koperasi Amanah Sejati',
      koperasiDescription: 'Complete cooperative management system including financial distribution and member profit sharing (SHU)',
      
      labagroTitle: 'Lab Agronomi UNIB',
      labagroDescription: 'Laboratory equipment borrowing system for Agronomy Department, University of Bengkulu',
      
      prismaTitle: 'Sistem Informasi Publikasi, Riset dan Pengabdian Kepada Masyarakat',
      prismaDescription: 'Sistem Informasi Publikasi, Riset dan Pengabdian Kepada Masyarakat with complete proposal workflow and reviewer system',
      
      siepelTitle: 'SIEPEL UNIB',
      siepelDescription: 'Lecturer Performance Evaluation Information System for University of Bengkulu',
      
      rumahilmuTitle: 'Adaptif E-Learning Rumah Ilmu',
      rumahilmuDescription: 'Comprehensive online learning platform with complete educational process management',
      
      // Projects without images
      emarketingTitle: 'E-Marketing Bank Bengkulu',
      emarketingDescription: 'Digital marketing platform for banking products and services',
      
      sahamTitle: 'Saham Seri B Bank Bengkulu',
      sahamDescription: 'Stock series B management system for Bank Bengkulu',
      
      pemiraTitle: 'Pemira UNIB',
      pemiraDescription: 'Student election system for President and Governor positions at University of Bengkulu',
      
      penjadwalanTitle: 'Course Scheduling System',
      penjadwalanDescription: 'Course scheduling system for Engineering Faculty, University of Bengkulu',
      
      sipedemasTitle: 'Sipedemas DPRD Kepahiang',
      sipedemasDescription: 'Community service information system for Kepahiang District Parliament',
      
      sijakTitle: 'Sijak Peluk Kejaksaan Kepahiang',
      sijakDescription: 'Case management information system for Kepahiang District Attorney\'s Office',
      
      remunerasiUnibTitle: 'Sistem Remunerasi Tendik UNIB',
      remunerasiUnibDescription: 'Remuneration system for educational staff at University of Bengkulu',
      
      remunerasiPoltekkesTitle: 'Sistem Remunerasi Poltekkes Kemenkes',
      remunerasiPoltekkesDescription: 'Remuneration system for Health Polytechnic Ministry of Health Bengkulu',
      
      eprofilTitle: 'E-Profil Kabupaten Seluma',
      eprofilDescription: 'Regional profile information system for Seluma District',
      
      simpegTitle: 'SIMPEG MAN IC Bengkulu Tengah',
      simpegDescription: 'Human resource information system for Islamic Senior High School',
      
      sintaTitle: 'Sinta Hormat Polri',
      sintaDescription: 'Honor system for Indonesian National Police Bengkulu Regional Office',
      
      bpkTitle: 'BPK RI Audit Information System',
      bpkDescription: 'Audit information system for Indonesia Supreme Audit Institution',
      
      // Organizations missing keys
      educationDivisionMember: 'Education Division Member',
      headOfInformationCommunicationDivision: 'Head of Information and Communication Division',
      treasurerResearchTechnology: 'Treasurer of Research and Technology',
      headOfITCommunicationDivision: 'Head of Information Technology and Communication Division',
      memberOfITCommunicationDivision: 'Member of Information Technology and Communication Division',
      
      // WhatsApp translations
      whatsapp: 'WhatsApp',
      chatDirectly: 'Chat me directly',
      openWhatsApp: 'Open WhatsApp',
      
      // CTA Buttons
      startProject: 'Start a Project',
      viewPortfolio: 'View Portfolio',
      
      // Statistics
      sixPlus: '6+',
      yearsExperience: 'Years Experience',
      fiftyPlus: '50+',
      projectsCompleted: 'Projects Completed',
      oneHundredPercent: '100%',
      clientSatisfaction: 'Client Satisfaction'
    },
    id: {
      // Navigation
      about: 'Tentang',
      experience: 'Pengalaman',
      applications: 'Portfolio',
      certificates: 'Sertifikat',
      ipr: 'HKI',
      organizations: 'Organisasi',
      achievements: 'Pencapaian',
      contact: 'Kontak',
      
      // Hero section
      openToOpportunities: 'Terbuka untuk peluang internasional',
      contactMe: 'Hubungi Saya',
      viewApplications: 'Lihat Portfolio',
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
      researchSystem: 'Sistem Informasi Publikasi, Riset dan Pengabdian Kepada Masyarakat',
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
      
      // Missing translations (Indonesian)
      speakerStartupDigitalization: 'Pembicara webinar digitalisasi startup',
      universitasBengkulu: 'Universitas Bengkulu',
      stateVocationalHighSchool: 'SMKN 1 Kota Bengkulu • 2013–2016',
      universitasBengkuluPeriod: 'Universitas Bengkulu • 2016–2021',
      aboutMeDescription: 'Insinyur perangkat lunak yang bersemangat menciptakan pengalaman digital dengan inovasi dan presisi',
      workExperienceDescription: 'Perjalanan profesional saya dalam rekayasa perangkat lunak dan teknologi',
      applicationsDescription: 'Proyek dan produk terpilih yang telah saya buat dengan teknologi modern',
      certificatesDescription: 'Sertifikat profesional dalam teknologi dan pengembangan',
      intellectualPropertyRights: 'Hak Kekayaan Intelektual',
      iprDescription: 'Hak kekayaan intelektual terdaftar dan inovasi',
      organizationsDescription: 'Organisasi, komunitas, dan afiliasi sepanjang perjalanan saya',
      quickLinks: 'Tautan Cepat',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      
      // Projects section
      selectedProjects: 'Proyek dan produk terpilih yang telah saya buat dengan teknologi modern',
      viewDetails: 'Lihat Detail',
      liveDemo: 'Demo Langsung →',
      details: 'Detail →',
      
      // Footer and other texts
      experiencedWebDeveloper: 'Web developer berpengalaman yang mengkhususkan diri dalam Laravel, Vue.js, dan sistem informasi pemerintah.',
      
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
      
      // WhatsApp (new)
      whatsapp: 'WhatsApp',
      chatDirectly: 'Chat langsung dengan saya',
      openWhatsApp: 'Buka WhatsApp',
      
      // Professional CTA and Stats
      startProject: 'Mulai Proyek',
      viewPortfolio: 'Lihat Portfolio',
      sixPlus: '6+',
      yearsExperience: 'Tahun Pengalaman',
      fiftyPlus: '50+',
      projectsCompleted: 'Proyek Selesai',
      oneHundredPercent: '100%',
      clientSatisfaction: 'Kepuasan Klien',
      
      // Testimonials
      testimonials: 'Kata Klien',
      testimonialsDescription: 'Feedback dari klien dan kolega yang puas',
      testimonial1: '"Safroni memberikan pekerjaan yang luar biasa pada sistem informasi pemerintah kami. Perhatiannya terhadap detail dan keahlian teknisnya melebihi ekspektasi kami. Sangat profesional dan dapat diandalkan."',
      client1Name: 'Dr. Rahman',
      client1Title: 'Project Manager, Instansi Pemerintah',
      testimonial2: '"Bekerja dengan Safroni sangat menyenangkan. Dia mengubah sistem lama kami menjadi platform modern yang efisien. Keahlian Laravel dan Vue.js-nya sangat baik."',
      client2Name: 'Ahmad Sari',
      client2Title: 'Direktur IT, Universitas',
      testimonial3: '"Keahlian Safroni dalam pengembangan web sangat luar biasa. Dia menyelesaikan proyek kami tepat waktu dan sesuai anggaran. Saya pasti akan bekerja sama dengannya lagi."',
      client3Name: 'Maria Indah',
      client3Title: 'CEO, Tech Startup',
      
      // Toast messages
      copiedToClipboard: 'Tersalin ke clipboard!',
      
      // Modal
      close: 'Tutup',
      
      // Projects translations
      featuredProjects: 'Proyek Unggulan',
      additionalProjects: 'Proyek Tambahan',
      
      // Project with images
      bdaruTitle: 'Museum Digital Balai Adat Rajo Penghulu',
      bdaruDescription: 'Sistem museum digital untuk adat istiadat tradisional dengan 3 peran pengguna: admin, pengelola, dan pengunjung',
      
      siamiTitle: 'SIAMI LPMPP UNIB',
      siamiDescription: 'Sistem Informasi Audit Mutu Internal dengan 3 peran pengguna: auditee, auditor, dan administrator',
      
      eberesTitle: 'E-Beres FISIP UNIB',
      eberesDescription: 'Sistem administrasi lengkap untuk permohonan surat, buku tamu digital, dan penjadwalan mata kuliah',
      
      koperasiTitle: 'Koperasi Amanah Sejati',
      koperasiDescription: 'Sistem manajemen koperasi lengkap termasuk distribusi keuangan dan pembagian SHU anggota koperasi',
      
      labagroTitle: 'Lab Agronomi UNIB',
      labagroDescription: 'Sistem peminjaman alat laboratorium untuk Jurusan Agronomi, Universitas Bengkulu',
      
      prismaTitle: 'Sistem Informasi Publikasi, Riset dan Pengabdian Kepada Masyarakat',
      prismaDescription: 'Sistem Informasi Publikasi, Riset dan Pengabdian Kepada Masyarakat dengan alur proposal dan sistem reviewer lengkap',
      
      siepelTitle: 'SIEPEL UNIB',
      siepelDescription: 'Sistem Informasi Penilaian Kinerja Dosen Universitas Bengkulu',
      
      rumahilmuTitle: 'Adaptif E-Learning Rumah Ilmu',
      rumahilmuDescription: 'Platform pembelajaran online lengkap dengan manajemen proses pembelajaran menyeluruh',
      
      // Projects without images
      emarketingTitle: 'E-Marketing Bank Bengkulu',
      emarketingDescription: 'Platform pemasaran digital untuk produk dan layanan perbankan',
      
      sahamTitle: 'Saham Seri B Bank Bengkulu',
      sahamDescription: 'Sistem manajemen saham seri B untuk Bank Bengkulu',
      
      pemiraTitle: 'Pemira UNIB',
      pemiraDescription: 'Sistem pemilihan mahasiswa untuk posisi Presiden dan Gubernur Mahasiswa Universitas Bengkulu',
      
      penjadwalanTitle: 'Sistem Penjadwalan Mata Kuliah',
      penjadwalanDescription: 'Sistem penjadwalan mata kuliah untuk Fakultas Teknik, Universitas Bengkulu',
      
      sipedemasTitle: 'Sipedemas DPRD Kepahiang',
      sipedemasDescription: 'Sistem informasi pelayanan masyarakat DPRD Kabupaten Kepahiang',
      
      sijakTitle: 'Sijak Peluk Kejaksaan Kepahiang',
      sijakDescription: 'Sistem informasi manajemen kasus untuk Kejaksaan Negeri Kabupaten Kepahiang',
      
      remunerasiUnibTitle: 'Sistem Remunerasi Tendik UNIB',
      remunerasiUnibDescription: 'Sistem remunerasi untuk tenaga kependidikan Universitas Bengkulu',
      
      remunerasiPoltekkesTitle: 'Sistem Remunerasi Poltekkes Kemenkes',
      remunerasiPoltekkesDescription: 'Sistem remunerasi untuk Politeknik Kesehatan Kementerian Kesehatan Bengkulu',
      
      eprofilTitle: 'E-Profil Kabupaten Seluma',
      eprofilDescription: 'Sistem informasi profil daerah untuk Kabupaten Seluma',
      
      simpegTitle: 'SIMPEG MAN IC Bengkulu Tengah',
      simpegDescription: 'Sistem informasi kepegawaian untuk Madrasah Aliyah Negeri Insan Cendekia',
      
      sintaTitle: 'Sinta Hormat Polri',
      sintaDescription: 'Sistem honorarium untuk Kepolisian Daerah Bengkulu',
      
      bpkTitle: 'Sistem Informasi Pemeriksaan BPK RI',
      bpkDescription: 'Sistem informasi pemeriksaan untuk Badan Pemeriksa Keuangan Republik Indonesia',
      
      // Organizations missing keys
      educationDivisionMember: 'Anggota Divisi Pendidikan',
      headOfInformationCommunicationDivision: 'Kepala Divisi Informasi dan Komunikasi',
      treasurerResearchTechnology: 'Bendahara Penelitian dan Teknologi',
      headOfITCommunicationDivision: 'Kepala Divisi Teknologi Informasi dan Komunikasi',
      memberOfITCommunicationDivision: 'Anggota Divisi Teknologi Informasi dan Komunikasi',
      
      // WhatsApp translations
      whatsapp: 'WhatsApp',
      chatDirectly: 'Chat saya langsung',
      openWhatsApp: 'Buka WhatsApp',
      
      // CTA Buttons
      startProject: 'Mulai Proyek',
      viewPortfolio: 'Lihat Portfolio',
      
      // Statistics
      sixPlus: '6+',
      yearsExperience: 'Tahun Pengalaman',
      fiftyPlus: '50+',
      projectsCompleted: 'Proyek Selesai',
      oneHundredPercent: '100%',
      clientSatisfaction: 'Kepuasan Klien'
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
    
    // Update all texts with data-translate attribute FIRST
    const allTranslatableElements = document.querySelectorAll('[data-translate]');
    allTranslatableElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (langData[key]) {
        element.textContent = langData[key];
      }
    });
    
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
    
    // Projects section content is now handled by data-translate attributes
    // Remove this manual mapping as it causes conflicts
    
    // Update job titles and other texts
    const fullStackWebDeveloper = document.querySelector('#certificates h3');
    if (fullStackWebDeveloper) fullStackWebDeveloper.textContent = langData.fullStackWeb;
    
    const footerWebDeveloper = document.querySelector('footer .text-slate-300');
    if (footerWebDeveloper) footerWebDeveloper.textContent = langData.webDeveloper;
    
    const footerDescription = document.querySelector('footer .text-slate-400');
    if (footerDescription) footerDescription.textContent = langData.experiencedWebDeveloper;
    
    // Update typing animation text
    const typingText = document.getElementById('typing-text');
    if (typingText) typingText.textContent = langData.webDeveloperFullStack;
    
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

  // Old project modal function removed - using enhanced version

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

  // Portfolio filtering and search functionality
  function initPortfolioFiltering() {
    const searchInput = document.getElementById('projectSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    let currentFilter = 'all';
    let currentSearch = '';

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterProjects();
      });
    }

    // Filter functionality
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active', 'bg-primary-100', 'dark:bg-primary-900/30', 'text-primary-700', 'dark:text-primary-300');
          btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        });
        
        // Add active class to clicked button
        button.classList.add('active', 'bg-primary-100', 'dark:bg-primary-900/30', 'text-primary-700', 'dark:text-primary-300');
        button.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        
        currentFilter = button.getAttribute('data-filter');
        filterProjects();
      });
    });

    function filterProjects() {
      projectCards.forEach(card => {
        const projectName = card.getAttribute('data-project-name')?.toLowerCase() || '';
        const technologies = card.getAttribute('data-technologies')?.toLowerCase() || '';
        const category = card.getAttribute('data-category')?.toLowerCase() || '';
        const year = card.getAttribute('data-year') || '';
        
        let showCard = true;
        
        // Search filter
        if (currentSearch) {
          const searchTerms = projectName + ' ' + technologies + ' ' + category;
          showCard = searchTerms.includes(currentSearch);
        }
        
        // Category filter
        if (showCard && currentFilter !== 'all') {
          switch (currentFilter) {
            case 'laravel':
              showCard = technologies.includes('laravel');
              break;
            case 'vue':
              showCard = technologies.includes('vue');
              break;
            case 'government':
              showCard = category.includes('government');
              break;
            case 'recent':
              showCard = ['2024', '2025'].includes(year);
              break;
          }
        }
        
        // Show/hide card with animation
        if (showCard) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
      
      // Update project count
      updateProjectCount();
    }
    
    function updateProjectCount() {
      const visibleCards = Array.from(projectCards).filter(card => 
        card.style.display !== 'none'
      );
      
      // You can add a project counter display here if needed
      console.log(`Showing ${visibleCards.length} of ${projectCards.length} projects`);
    }
  }

  // Enhanced project modal functionality
  function initEnhancedProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) {
      console.error('Modal elements not found! Modal:', modal, 'ModalContent:', modalContent);
      return;
    }
    
    console.log('Enhanced project modal initialized successfully');

    const projectData = {
      bdaru: {
        title: 'Museum Digital Balai Adat Rajo Penghulu',
        subtitle: 'Cultural Heritage Preservation Platform',
        description: 'Sistem museum digital untuk preservasi budaya tradisional Bengkulu dengan 3 peran pengguna: admin untuk manajemen konten, pengelola untuk kurasi koleksi, dan visitor untuk eksplorasi budaya.',
        features: [
          'Katalog digital artefak budaya',
          'Virtual tour museum interaktif',
          'Manajemen koleksi multimedia',
          'Sistem edukasi budaya online',
          'Dashboard pengelola museum',
          'Multi-language support'
        ],
        tech: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'WebGL'],
        image: 'assets/img/bdaru/bdaru1.png',
        gallery: [
          'assets/img/bdaru/bdaru1.png',
          'assets/img/bdaru/bdaru2.png',
          'assets/img/bdaru/bdaru3.png',
          'assets/img/bdaru/bdaru4.png'
        ],
        liveUrl: 'http://bdarubengkulu.org/',
        githubUrl: null,
        duration: '3 months',
        team: '1 developer',
        challenges: 'Membangun platform yang dapat melestarikan budaya tradisional dalam format digital dengan user experience yang menarik untuk berbagai kalangan.',
        solutions: 'Menggunakan Laravel untuk backend yang robust, Vue.js untuk frontend interaktif, dan desain responsif untuk aksesibilitas optimal.',
        impact: 'Meningkatkan awareness budaya Bengkulu sebesar 40% dan menarik 500+ pengunjung digital per bulan.',
        category: 'Cultural Heritage & Government'
      },
      siami: {
        title: 'SIAMI LPMPP UNIB',
        subtitle: 'Internal Quality Audit Information System',
        description: 'Sistem Informasi Audit Mutu Internal yang memfasilitasi proses audit internal dengan 3 user roles: auditee (program studi), auditor, dan administrator untuk menjamin kualitas akademik.',
        features: [
          'Manajemen jadwal audit internal',
          'Sistem pelaporan audit digital',
          'Tracking status audit real-time',
          'Dashboard evaluasi mutu',
          'Dokumentasi temuan audit',
          'Automated notifications'
        ],
        tech: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Chart.js'],
        image: 'assets/img/siami/siami1.png',
        gallery: [
          'assets/img/siami/siami1.png',
          'assets/img/siami/Screenshot 2025-07-05 at 13.40.55.png'
        ],
        liveUrl: 'https://sintamu.unib.ac.id/',
        githubUrl: null,
        duration: '4 months',
        team: '2 developers',
        challenges: 'Mengembangkan sistem yang dapat mengelola kompleksitas proses audit mutu internal dengan workflow yang jelas dan dokumentasi yang komprehensif.',
        solutions: 'Implementasi role-based access control, automated workflow management, dan comprehensive audit trail untuk transparansi proses.',
        impact: 'Mengurangi waktu proses audit sebesar 60% dan meningkatkan akurasi laporan audit sebesar 85%.',
        category: 'Education & Quality Assurance'
      },
      eberes: {
        title: 'E-Beres FISIP UNIB',
        subtitle: 'Comprehensive Administrative System',
        description: 'Sistem administrasi terpadu untuk Fakultas Ilmu Sosial dan Politik yang mengelola permohonan surat, buku tamu digital, dan penjadwalan mata kuliah secara terintegrasi.',
        features: [
          'Pengajuan surat online (cuti, izin, dll)',
          'Buku tamu digital terintegrasi',
          'Sistem penjadwalan mata kuliah',
          'Tracking status permohonan',
          'Dashboard admin fakultas',
          'Automated notifications'
        ],
        tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
        image: 'assets/img/e-beres/screencapture-e-beres-fisip-unib-ac-id-2025-08-16-21_51_26.png',
        gallery: [
          'assets/img/e-beres/screencapture-e-beres-fisip-unib-ac-id-2025-08-16-21_51_26.png'
        ],
        liveUrl: 'https://e-beres.fisip.unib.ac.id/',
        githubUrl: null,
        duration: '5 months',
        team: '2 developers',
        challenges: 'Mengintegrasikan berbagai sistem administrasi fakultas yang sebelumnya manual menjadi satu platform digital yang efisien.',
        solutions: 'Menggunakan modular architecture dengan Laravel, Vue.js untuk SPA experience, dan automated notification system.',
        impact: 'Mengurangi waktu proses administrasi sebesar 70% dan meningkatkan efisiensi layanan fakultas.',
        category: 'Education & Administration'
      },
      koperasi: {
        title: 'Koperasi Amanah Sejati',
        subtitle: 'Cooperative Management System',
        description: 'Sistem manajemen koperasi komprehensif yang mengelola distribusi keuangan masuk dan keluar, hingga pembagian Sisa Hasil Usaha (SHU) kepada anggota koperasi.',
        features: [
          'Manajemen keanggotaan koperasi',
          'Pencatatan transaksi keuangan',
          'Perhitungan SHU otomatis',
          'Laporan keuangan real-time',
          'Dashboard monitoring usaha',
          'Financial reporting'
        ],
        tech: ['Laravel', 'Bootstrap', 'MySQL', 'jQuery'],
        image: 'assets/img/koperasi/screencapture-koperasiamanahsejatikotabengkulu-co-id-2025-08-16-21_49_05.png',
        gallery: [
          'assets/img/koperasi/screencapture-koperasiamanahsejatikotabengkulu-co-id-2025-08-16-21_49_05.png',
          'assets/img/koperasi/Screenshot 2025-08-16 at 21.50.03.png',
          'assets/img/koperasi/Screenshot 2025-08-16 at 21.50.27.png'
        ],
        liveUrl: 'https://koperasiamanahsejatikotabengkulu.co.id/',
        githubUrl: null,
        duration: '6 months',
        team: '1 developer',
        challenges: 'Mengembangkan sistem akuntansi koperasi yang akurat dengan perhitungan SHU yang kompleks sesuai dengan aturan perkoperasian.',
        solutions: 'Implementasi double-entry bookkeeping system, automated SHU calculation, dan comprehensive financial reporting.',
        impact: 'Meningkatkan transparansi keuangan koperasi dan mempercepat proses pembagian SHU kepada anggota.',
        category: 'Finance & Cooperative'
      },
      labagro: {
        title: 'Lab Agronomi UNIB',
        subtitle: 'Laboratory Equipment Management System',
        description: 'Sistem peminjaman alat laboratorium untuk Jurusan Agronomi Universitas Bengkulu yang mengelola inventori, jadwal peminjaman, dan maintenance peralatan lab.',
        features: [
          'Katalog peralatan laboratorium',
          'Sistem booking dan reservasi',
          'Tracking status peminjaman',
          'Manajemen maintenance alat',
          'Laporan penggunaan lab',
          'QR Code integration'
        ],
        tech: ['Laravel', 'Bootstrap', 'MySQL', 'jQuery'],
        image: 'assets/img/lab agronomi/screencapture-labagro-fp-unib-ac-id-2025-08-16-21_55_50.png',
        gallery: [
          'assets/img/lab agronomi/screencapture-labagro-fp-unib-ac-id-2025-08-16-21_55_50.png'
        ],
        liveUrl: 'https://labagro.fp.unib.ac.id/',
        githubUrl: null,
        duration: '4 months',
        team: '1 developer',
        challenges: 'Mengelola inventori peralatan laboratorium yang kompleks dengan sistem peminjaman yang efisien dan tracking yang akurat.',
        solutions: 'Menggunakan QR code system untuk tracking, automated reminder system, dan comprehensive equipment management.',
        impact: 'Meningkatkan efisiensi penggunaan alat lab sebesar 50% dan mengurangi kehilangan peralatan.',
        category: 'Education & Laboratory'
      },
      prisma: {
        title: 'PRISMA UNIB',
        subtitle: 'Research & Community Service Information System',
        description: 'Sistem Informasi Publikasi, Riset dan Pengabdian Kepada Masyarakat yang mengelola seluruh workflow dari pengajuan proposal hingga laporan akhir dengan sistem reviewer terintegrasi.',
        features: [
          'Pengajuan proposal online',
          'Sistem review dan penilaian',
          'Ranking berdasarkan nilai tertinggi',
          'Proses revisi proposal digital',
          'Manajemen pendanaan dan realisasi',
          'Automated workflow'
        ],
        tech: ['CodeIgniter', 'jQuery', 'Bootstrap', 'MySQL'],
        image: 'assets/img/prisma/screencapture-prismalppm-unib-ac-id-2025-08-16-21_59_03.png',
        gallery: [
          'assets/img/prisma/screencapture-prismalppm-unib-ac-id-2025-08-16-21_59_03.png'
        ],
        liveUrl: 'https://prismalppm.unib.ac.id/',
        githubUrl: null,
        duration: '8 months',
        team: '2 developers',
        challenges: 'Membangun sistem yang dapat mengelola kompleksitas workflow penelitian dan pengabdian dengan multiple stakeholder dan approval levels.',
        solutions: 'Implementasi state machine untuk workflow management, automated scoring system, dan comprehensive project tracking.',
        impact: 'Mempercepat proses seleksi proposal sebesar 65% dan meningkatkan transparansi penilaian penelitian.',
        category: 'Education & Research'
      },
      siepel: {
        title: 'SIEPEL UNIB',
        subtitle: 'Lecturer Performance Evaluation System',
        description: 'Sistem Informasi Penilaian Kinerja Dosen yang mengevaluasi performa dosen di lingkungan Universitas Bengkulu dengan multiple criteria dan automated reporting.',
        features: [
          'Evaluasi kinerja dosen multi-kriteria',
          'Dashboard performa individual',
          'Sistem pelaporan otomatis',
          'Analytics dan insights',
          'Manajemen periode evaluasi',
          'Data visualization'
        ],
        tech: ['CodeIgniter', 'jQuery', 'MySQL', 'Chart.js'],
        image: 'assets/img/siepel/Screenshot 2025-08-16 at 21.59.54.png',
        gallery: [
          'assets/img/siepel/Screenshot 2025-08-16 at 21.59.54.png',
          'assets/img/siepel/Screenshot 2025-08-16 at 22.00.01.png'
        ],
        liveUrl: 'https://siepel.unib.ac.id/',
        githubUrl: null,
        duration: '6 months',
        team: '2 developers',
        challenges: 'Mengembangkan sistem evaluasi yang fair dan objektif dengan multiple assessment criteria dan comprehensive analytics.',
        solutions: 'Menggunakan weighted scoring algorithm, data visualization untuk insights, dan automated report generation.',
        impact: 'Meningkatkan objektivitas penilaian dosen dan mempercepat proses evaluasi tahunan.',
        category: 'Education & Performance'
      },
      rumahilmu: {
        title: 'Adaptif E-Learning Rumah Ilmu',
        subtitle: 'Comprehensive Learning Management System',
        description: 'Platform pembelajaran online komprehensif yang mengelola seluruh proses pembelajaran dari enrollment hingga sertifikasi dengan adaptive learning system.',
        features: [
          'Manajemen kursus dan materi',
          'Video conferencing terintegrasi',
          'Assessment dan quiz engine',
          'Progress tracking siswa',
          'Sertifikasi digital otomatis',
          'Adaptive learning algorithm'
        ],
        tech: ['Laravel', 'Vue.js', 'Bootstrap', 'MySQL', 'WebRTC'],
        image: 'assets/img/adaptif/screencapture-rumahilmu-org-.textClipping',
        gallery: [
          'assets/img/adaptif/screencapture-rumahilmu-org-.textClipping'
        ],
        liveUrl: 'https://rumahilmu.org/',
        githubUrl: null,
        duration: '10 months',
        team: '3 developers',
        challenges: 'Membangun platform e-learning yang scalable dengan fitur adaptive learning dan comprehensive content management.',
        solutions: 'Menggunakan microservices architecture, real-time communication dengan WebRTC, dan AI-powered learning recommendations.',
        impact: 'Melayani 1000+ pengguna aktif dengan tingkat completion rate 85% untuk kursus online.',
        category: 'Education & E-Learning'
      }
    };

    window.openProjectModal = function(projectId) {
      console.log('Opening enhanced modal for project:', projectId);
      const project = projectData[projectId];
      if (!project) {
        console.error('Project data not found for:', projectId);
        return;
      }
      console.log('Project data found:', project);

      modalContent.innerHTML = `
        <div class="space-y-8">
          <!-- Header -->
          <div class="text-center border-b border-slate-200 dark:border-slate-700 pb-6">
            <div class="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              ${project.category}
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">${project.title}</h1>
            <p class="text-lg text-slate-600 dark:text-slate-400">${project.subtitle}</p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Image Gallery -->
            <div class="space-y-4">
              <img src="${project.image}" alt="${project.title}" class="w-full rounded-2xl shadow-lg" />
              ${project.gallery && project.gallery.length > 1 ? `
                <div class="grid grid-cols-3 gap-2">
                  ${project.gallery.slice(1, 4).map(img => `
                    <img src="${img}" alt="${project.title}" class="w-full aspect-video object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <!-- Project Details -->
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Project Overview</h3>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${project.description}</p>
              </div>

              <!-- Project Stats -->
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                  <div class="text-sm text-slate-500 dark:text-slate-400">Duration</div>
                  <div class="font-semibold text-slate-900 dark:text-slate-100">${project.duration}</div>
                </div>
                <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                  <div class="text-sm text-slate-500 dark:text-slate-400">Team Size</div>
                  <div class="font-semibold text-slate-900 dark:text-slate-100">${project.team}</div>
                </div>
              </div>

              <!-- Technologies -->
              <div>
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                  ${project.tech.map(tech => `
                    <span class="bg-gradient-to-r from-primary-100 to-fuchsia-100 dark:from-primary-900/30 dark:to-fuchsia-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      ${tech}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-3 pt-4">
                <a href="${project.liveUrl}" target="_blank" rel="noopener" class="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-fuchsia-600 hover:from-primary-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  Live Demo
                </a>
                ${project.githubUrl ? `
                  <a href="${project.githubUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                ` : ''}
              </div>
            </div>
          </div>

          <!-- Key Features -->
          <div>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Key Features</h3>
            <div class="grid md:grid-cols-2 gap-3">
              ${project.features.map(feature => `
                <div class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div class="w-2 h-2 bg-gradient-to-r from-primary-500 to-fuchsia-500 rounded-full"></div>
                  <span class="text-slate-700 dark:text-slate-300">${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Challenge & Solution -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl">
              <h4 class="font-semibold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
                Challenge
              </h4>
              <p class="text-red-800 dark:text-red-200 text-sm leading-relaxed">${project.challenges}</p>
            </div>
            <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl">
              <h4 class="font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center gap-2">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Solution
              </h4>
              <p class="text-green-800 dark:text-green-200 text-sm leading-relaxed">${project.solutions}</p>
            </div>
          </div>

          <!-- Impact -->
          ${project.impact ? `
            <div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl">
              <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                Project Impact
              </h4>
              <p class="text-blue-800 dark:text-blue-200">${project.impact}</p>
            </div>
          ` : ''}
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // Add entrance animation
      setTimeout(() => {
        modal.querySelector('.relative').style.transform = 'scale(1)';
        modal.querySelector('.relative').style.opacity = '1';
      }, 10);
    };

    // Rest of modal functionality remains the same
    window.closeProjectModal = function() {
      console.log('Closing enhanced modal');
      const modalInner = modal.querySelector('.relative');
      modalInner.style.transform = 'scale(0.95)';
      modalInner.style.opacity = '0';
      
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
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

  // Initialize all functionality
  function init() {
    initTypingAnimation();
    initScrollspy();
    initEnhancedProjectModal();
    initCopyToClipboard();
    initPortfolioFiltering();
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
