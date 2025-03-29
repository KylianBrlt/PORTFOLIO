const frTranslations = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    resume: "CV",
    contact: "Contact"
  },
  home: {
    welcome: "Bienvenue sur mon site web !",
    intro: "Je suis Kylian Brault, étudiant en informatique. Mon site web est une vitrine de mes compétences et projets, où je partage mes créations et expériences. Explorez mon travail pour découvrir comment je transforme des idées en réalité numérique.",
    resumeBtn: "CV",
    contactBtn: "Me contacter"
  },
  projects: {
    title: "Derniers Projets",
    learnMore: "En savoir plus",
    chickenCoop: {
      title: "Poulailler connecté",
      description: "Le projet de poulailler connecté est une initiative étudiante visant à créer un système de poulailler connecté. Il utilise une caméra thermique pour la détection des œufs et un mécanisme imprimé en 3D pour la collecte des œufs. Un Raspberry Pi 4 contrôle le système et envoie des notifications via une application mobile. L'objectif est d'initier les étudiants à l'ingénierie, de la conception à la mise en œuvre."
    },
    portfolio: {
      title: "Portfolio",
      description: "Ce site web portfolio a été conçu et développé pour présenter mes projets et compétences. Le site présente un design responsive, une mise en page épurée et des technologies web modernes pour créer une expérience visuelle optimale sur différents appareils."
    },
    seriousGame: {
      title: "Jeu Sérieux",
      description: "Le jeu sérieux est un projet étudiant visant à développer un jeu sérieux 2D sur la cybersécurité. Le jeu, développé sur Unity avec C#, vise à sensibiliser les joueurs aux menaces de cybersécurité et à leur apprendre à les détecter et à les contrer. Il se compose de deux phases principales : la détection d'adresses suspectes et l'arrêt de la propagation d'une infection informatique."
    },
    reservation: {
      title: "Système de Réservation",
      description: "Un système de réservation complet construit avec PHP et MySQL. Ce projet comprend l'enregistrement et l'authentification des utilisateurs avec vérification par e-mail, la programmation de rendez-vous avec intégration de calendrier et des fonctionnalités de gestion de profil. Le système implémente les pratiques de sécurité, notamment la protection CSRF et le hachage des mots de passe."
    },
    backButton: "Retour aux Projets"
  },
  chickenCoop: {
    title: "Poulailler Connecté",
    aboutTitle: "À propos de ce projet",
    aboutText1: "Le projet de poulailler connecté est une initiative étudiante visant à créer un système de poulailler connecté. Il utilise une caméra thermique pour la détection des œufs et un mécanisme imprimé en 3D pour la collecte des œufs. Un Raspberry Pi 4 contrôle le système et envoie des notifications via une application mobile. L'objectif est d'initier les étudiants à l'ingénierie, de la conception à la mise en œuvre.",
    aboutText2: "Cette section détaille ma contribution au projet \"Smart Chicken\", en me concentrant sur le système automatisé de collecte d'œufs. Dans le cadre d'une initiative plus large visant à créer un poulailler intelligent, mon rôle consistait à concevoir et à mettre en œuvre un mécanisme permettant de récupérer automatiquement les œufs après leur détection. Ce système visait à réduire l'effort manuel, à minimiser les dommages aux œufs et à s'intégrer parfaitement à la détection thermique des œufs. L'objectif ultime était de créer un poulailler intelligent entièrement fonctionnel, comme le montre l'image d'aperçu du projet.",
    technologiesTitle: "Technologies",
    tech1: "Raspberry Pi (pour le contrôle et l'intégration du système global)",
    tech2: "Composants mécaniques (moteurs pour le mouvement)",
    tech3: "Électronique pour le contrôle des moteurs et la détection",
    featuresTitle: "Fonctionnalités clés",
    feature1Title: "Récupération automatisée des œufs :",
    feature1Text: "Mécanisme pour collecter physiquement les œufs de la zone de nidification après détection.",
    feature2Title: "Transfert automatisé vers le stockage :",
    feature2Text: "Dirige les œufs collectés vers une zone de stockage désignée dans le poulailler.",
    techNotionsTitle: "Notions techniques",
    bubble1 : "Automatisation Python",
    bubble2 : "Impression 3D",
  },
  seriousGame: {
    title: "Jeu Sérieux",
    aboutTitle: "À propos de ce projet",
    aboutText1: "Le jeu sérieux est un projet étudiant visant à développer un jeu sérieux 2D sur la cybersécurité. Le jeu, développé sur Unity avec C#, vise à sensibiliser les joueurs aux menaces de cybersécurité et à leur apprendre à les détecter et à les contrer. Il se compose de deux phases principales : la détection d'adresses suspectes et l'arrêt de la propagation d'une infection informatique.",
    aboutText2: "Ce projet de jeu sérieux a été développé comme un outil pédagogique qui combine des éléments de jeu avec du contenu éducatif. Le jeu a été conçu pour enseigner des compétences ou des connaissances spécifiques d'une manière engageante et interactive, rendant l'apprentissage plus agréable et efficace.",
    technologiesTitle: "Technologies",
    tech1: "Moteur de jeu Unity",
    tech2: "Programmation C#",
    tech3: "Design UI/UX",
    featuresTitle: "Fonctionnalités clés",
    feature1Title: "Apprentissage interactif :",
    feature1Text: "Mécaniques de jeu engageantes qui renforcent le contenu éducatif.",
    feature2Title: "Difficulté adaptative :",
    feature2Text: "Ajuste le niveau de défi en fonction de la performance du joueur.",
    techNotionsTitle: "Notions techniques",
    gameDesign: "Conception de jeux"
  },
  portfolioProject: {
    title: "Site Portfolio",
    aboutTitle: "À propos de ce projet",
    aboutText1: "Ce site web portfolio a été conçu et développé pour présenter mes projets et compétences. Le site présente un design responsive, une mise en page épurée et des technologies web modernes pour créer une expérience visuelle optimale sur différents appareils.",
    aboutText2: "Mon site portfolio personnel sert de plateforme centrale pour mes informations professionnelles. Développé avec HTML, CSS et JavaScript, il offre un design responsive pour garantir une visualisation optimale sur n'importe quel appareil. Les fonctionnalités principales incluent une vitrine de projets avec des descriptions détaillées et des liens, une section \"CV\" présentant mon parcours et mes compétences, et un formulaire de contact pour que les visiteurs puissent facilement me contacter. Le site est conçu pour présenter mon travail, mes compétences et mon expérience de manière claire et attrayante.",
    technologiesTitle: "Technologies",
    tech1: "HTML5 / CSS3",
    tech2: "JavaScript",
    tech3: "Design Web Responsive",
    featuresTitle: "Fonctionnalités clés",
    feature1Title: "Design Responsive :",
    feature1Text: "S'adapte à différentes tailles d'écran pour une expérience de visualisation optimale.",
    feature2Title: "Vitrine de Projets :",
    feature2Text: "Pages dédiées à chaque projet avec des informations détaillées.",
    feature3Title: "Formulaire de Contact :",
    feature3Text: "Moyen simple pour les visiteurs de me contacter.",
    techNotionsTitle: "Notions techniques",
    responsiveDesign: "Design Responsive",
    linksTitle: "Liens",
    viewGithub: "Voir sur GitHub"
  },
  reservationProject: {
    title: "Système de Réservation",
    aboutTitle: "À propos de ce projet",
    aboutText1: "Un système de réservation complet construit avec PHP et MySQL. Ce projet comprend l'enregistrement et l'authentification des utilisateurs avec vérification par e-mail, la programmation de rendez-vous avec intégration de calendrier et des fonctionnalités de gestion de profil. Le système implémente les pratiques de sécurité, notamment la protection CSRF et le hachage des mots de passe.",
    aboutText2: "Le système de réservation a été développé pour fournir une solution complète pour la gestion des rendez-vous et des comptes utilisateurs. Les utilisateurs peuvent s'inscrire avec vérification par e-mail, se connecter en toute sécurité, planifier des rendez-vous à l'aide d'un calendrier interactif, gérer leurs informations de profil et annuler des rendez-vous si nécessaire. Le système inclut des fonctionnalités d'administration et met l'accent sur les meilleures pratiques de sécurité dans toute l'application.",
    technologiesTitle: "Technologies",
    tech1: "PHP",
    tech2: "Base de données MySQL",
    tech3: "JavaScript avec FullCalendar",
    tech4: "HTML5/CSS3",
    featuresTitle: "Fonctionnalités clés",
    feature1Title: "Authentification des utilisateurs :",
    feature1Text: "Système d'enregistrement et de connexion sécurisé avec vérification par e-mail.",
    feature2Title: "Gestion des rendez-vous :", 
    feature2Text: "Calendrier interactif pour la planification et la gestion des rendez-vous.",
    feature3Title: "Gestion de profil :",
    feature3Text: "Les utilisateurs peuvent consulter et mettre à jour leurs informations personnelles.",
    feature4Title: "Fonctionnalités de sécurité :",
    feature4Text: "Protection CSRF, hachage des mots de passe et validation des entrées dans toute l'application.",
    techNotionsTitle: "Notions techniques",
    bubble1: "Authentification",
    bubble2: "Protection CSRF",
    linksTitle: "Liens",
    viewDemo: "Voir la démo"
  },
  contact: {
    title: "Me contacter",
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre adresse email",
    subjectPlaceholder: "De quoi s'agit-il ?",
    messagePlaceholder: "Votre message ici...",
    sendButton: "Envoyer le message",
    successMessage: "Votre message a été envoyé avec succès !",
    errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
    securityError: "La vérification de sécurité a échoué. Veuillez réessayer."
  },
  footer: {
    copyright: "© 2025 Kylian BRAULT - Tous droits réservés."
  }
};