import type { ReactNode } from "react";
import type { ProjectText } from "../../data/projects";

export type Language = 'fr' | 'en';

export interface Translations {
  navbar: {
    presentation: string;
    projects: string;
    contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: ReactNode;
    cardLocation: { title: string; subtitle: string };
    cardEducation: { title: string; subtitle: string };
    cardAvailability: { title: string; subtitle: string };
    cardLanguage: { title: string; subtitle: string };
    btnProjects: string;
    btnContact: string;
    softSkills: string[];
  };
  project: {
    title: string;
    subtitle: string;
    all: string;
    projects: Record<string, ProjectText>;
    modal: {
      keyFeatures: string;
      personalNote: string;
      sourceCode: string;
      urlProject: string;
    };
  }
  toWork: {
    title: string;
    subtitle: string;
    mail: string;
  }
  footer: {
    technologies: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    navbar: {
      presentation: "Présentation",
      projects: "Projets",
      contact: "Contact"
    },
    about: {
      title: "Bonjour, je m'appelle",
      subtitle: "Développeur Software & Fullstack",
      description: (
        <>
          Actuellement en 4ème année de mon cursus à <span className="text-slate-900 dark:text-white font-semibold">Epitech Lyon</span>,
          je réalise également un cursus à <span className="text-slate-900 dark:text-white font-semibold">Heriot-Watt University</span> à Édimbourg
          afin d'obtenir un double diplôme en <span className="text-slate-900 dark:text-white font-semibold">Software Engineering</span>.
          <br /><br />
          Je conçois et développe des applications performantes, du schéma de base de données jusqu'à l'interface utilisateur.
          Fort de mes expériences en entreprise, notamment sur des architectures{" "}
          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary-500">NestJS</span>,{" "}
          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary-500">React</span>{" "}
          et <span className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary-500">Symfony</span>,
          je suis passionné par l'écosystème TypeScript.
        </>
      ),
      cardLocation: {
        title: "Lyon (69), France",
        subtitle: "Basé en France, ouvert aux projets à distance"
      },
      cardEducation: {
        title: "Double diplôme en cours",
        subtitle: "Epitech Lyon + Heriot-Watt University"
      },
      cardAvailability: {
        title: "Disponible pour de futurs projets",
        subtitle: "Freelance, stage ou mission"
      },
      cardLanguage: {
        title: "Français natif, anglais B2",
        subtitle: "Communication fluide en équipe internationale"
      },
      btnProjects: "Voir mes projets",
      btnContact: "Me contacter",
      softSkills: ["Autonome", "Esprit d'équipe", "Curieux", "Rigoureux", "Communication"],
    },
    project: {
      title: "Mes réalisations",
      subtitle: "Filtrer mes projets par domaine de compétences :",
      all: "Tous",
      projects: {
        "portfolio": {
          title: "Portfolio Monopage",
          description: "Mon site vitrine personnel responsive, moderne et entièrement internationalisé.",
          longDescription: `Ce portfolio a été conçu pour centraliser et mettre en valeur mes compétences de développeur Fullstack à travers une expérience utilisateur fluide et soignée.
          Il est développé en React avec TypeScript pour garantir un code robuste et typé, et utilise Tailwind CSS pour un design moderne, épuré et adaptatif (responsive).
          Pour optimiser l'organisation, j'ai isolé la logique des données techniques de la logique d'affichage, permettant une maintenance simplifiée du site.
          L'application intègre également un système de bascule de thèmes (Sombre / Clair / Système) basé sur le stockage local et les préférences du navigateur.
          Afin d'assurer une visibilité internationale auprès des recruteurs et clients, j'ai mis en place un système multilingue complet développé sur-mesure sans dépendance lourde.`,
          personalNote: `Ce projet m'a permis de mettre en pratique les bonnes pratiques de développement Front-end modernes et de configurer une chaîne de linting stricte avec ESLint 9.
          C'est une vitrine vivante que je vais continuer à faire évoluer au fil de mes projets Web, Mobiles et Back-end.`,
          features: [
            "Architecture Single Page Application (SPA) fluide",
            "Système multilingue (FR/EN) sur-mesure via les Context de React",
            "Gestionnaire de thèmes (Light / Dark / System) avec persistance locale",
            "Filtrage dynamique et typé des projets par domaine de compétences",
            "Configuration ESLint 9 (Flat Config) pour un code propre et standardisé"
          ]
        },
        "ssl-monitor": {
          title: "SSL Monitor",
          description: "Application de surveillance des certificats SSL pour les sites web.",
          longDescription: `SSL Monitor est une application qui surveille les certificats SSL des sites web et envoie des notifications lorsque ceux-ci sont sur le point d'expirer.
          Elle utilise ReactJS pour l'interface utilisateur, Node.js et Express pour le backend, PostgreSQL pour la base de données, et est entièrement développée en TypeScript avec TailwindCSS pour le style.
          L'application est conçue pour être déployée facilement avec Docker et Docker Compose, permettant une installation rapide et une gestion simplifiée des dépendances.
          J'ai également mit en place un traitement des erreurs sans API externe, il permet de voir tout de même la majorité des erreurs de certificats SSL, même si certains sites web ne sont pas accessibles.
          Il y'a également un système de recherche de site web directement avec un IP, ce qui permet de trouver le site web associé à une IP, même si le site web n'est pas accessible directement.
          Il y'a tout un système de dashboard afin de surveiller différents nom de domaine, nom de domaine groupable par serveur également, ce qui permet de surveiller plusieurs sites web sur le même serveur.
          Une gestion d'utilisateur est également présente, avec différent rôles afin de gérer les droits d'accès aux différentes fonctionnalités de l'application.`,
          personalNote: `Ce projet m'a permis de renforcer mes compétences en développement fullstack et en gestion de bases de données, tout en mettant l'accent sur la sécurité et la fiabilité des applications web.
          Ce projet est aujourd'hui mit en production en interne dans une entreprise chez laquelle j'ai travaillé.
          Je suis fier de voir mon travail utilisé dans un contexte réel et d'avoir contribué à améliorer la sécurité des sites web.`,
          features: [
            "Surveillance en temps réel des certificats SSL",
            "Notifications par email avant l'expiration",
            "Interface utilisateur réactive et moderne",
            "Gestion des utilisateurs et des sites surveillés",
            "Déploiement facile avec Docker et Docker Compose",

          ]
        },
        "cabanesDB": {
          title: "CabanesDB",
          description: "Site vitrines pour une psycologue avec prise de rendez-vous en ligne.",
          longDescription: `CabanesDB est un site vitrine pour une psychologue, offrant la possibilité de réserver des séances en ligne.
          Le site est développé avec HTML, CSS et JavaScript pour le frontend, et utilise Node.js et Express pour le backend.
          Il est conçu pour être responsive et accessible sur tous les appareils.
          Il permet aux utilisateurs de consulter les informations sur les services proposés, de prendre rendez-vous en ligne et de recevoir des confirmations par email.
          Le site est optimisé pour le référencement et la performance, garantissant une expérience utilisateur fluide et agréable.
          Il est également sécurisé pour protéger les données des utilisateurs et assurer la confidentialité des informations personnelles.`,
          personalNote: `Premier vrai projet réalisé en freelance, il m'a permis de comprendre les besoins des clients et de créer une solution adaptée à leurs attentes, tout en respectant les délais et le budget.
          Aujourd'hui je n'utiliserais plus cette technologie pour mes projets, mais je suis fier de ce que j'ai accompli avec CabanesDB. Parfois, il est important de se rappeler d'où l'on vient et de célébrer ses réussites, même si elles ne sont plus à la pointe de la technologie.`,
          features: [
            "Site vitrine responsive et moderne",
            "Système de réservation en ligne pour les séances",
            "Interface utilisateur intuitive et facile à naviguer",
            "Optimisation pour le référencement et la performance du site",
          ]
        },
        "koudmain": {
          title: "Koudmain",
          description: "Application complète pour le recrutement instantané dans le secteur des CHR.",
          longDescription: `Koudmain est une application complète pour le recrutement instantané dans le secteur des CHR (Cafés, Hôtels, Restaurants).
          Le but est de proposé des CDDU (Contrat de travail à durée déterminée d'usage) aux candidats et de permettre aux recruteurs de trouver rapidement des candidats qualifiés pour leurs besoins en personnel.
          Elle est découpée en trois parties : deux applications mobiles en React Native (une pour les candidats et une pour les recruteurs), un site vitrine et deux backends (un pour l'API métier en NestJS et un pour les websockets et le matching en Golang).
          Tout se système est développé en TypeScript et utilise TailwindCSS pour le style.
          Les applications mobiles sont concues pour être intuitives et faciles à utiliser, permettant aux candidats de postuler rapidement et aux recruteurs de trouver les meilleurs talents en temps réel.
          Elles sont également sur un monorépo avec Turborepo, ce qui permet de partager du code entre les deux applications et d'optimiser le développement.
          Le backend en NestJS gère les données et la logique métier, tandis que le backend en Golang gère les websockets, les notifications et le matching entre candidats et recruteurs.
          L'ensemble du système est conçu pour être scalable et performant, permettant de gérer un grand nombre d'utilisateurs simultanément.
          Une CI/CD est également mise en place pour automatiser les tests, le build et le déploiement des applications et des backends grâce à un répo qui sert uniquement au build et au déploiement tournant avec Docker Compose.
          Il y'a également un système de documentation pour les développeurs, permettant de comprendre rapidement l'architecture et le fonctionnement de l'application.
          On a decidé d'utiliser Documenso pour tout ce qui touchera à la signature électronique et à la gestion des documents, ce qui permet de gérer les contrats et les documents administratifs de manière sécurisée et conforme aux régulations en vigueur.`,
          personalNote: `Nous sommes une équipe de 5 personnes pour mener à bien ce projet.  Ce projet est dans le cadre de notre EIP (Epitech Innovative Project) et il sera présenté d'ici 2028 devant un jury d'experts. Il est donc en constante évolution et nous travaillons dur pour le rendre le plus performant et le plus complet possible.
          C'est notre projet de fin d'études et nous sommes très fiers de ce que nous avons accompli jusqu'à présent. Nous avons appris énormément de choses sur le développement d'applications complètes et sur la gestion de projet en équipe.
          Il nous a également permis de gagner en compétence sur toute la partie marketing et buisness, ce qui est très important pour la réussite d'un projet et pour trouver des financements pour le développer.
          Nous sommes impatients de continuer à travailler sur ce projet et de le présenter devant le jury d'experts. Nous espérons que notre travail sera apprécié et que nous pourrons continuer à développer Koudmain après notre diplôme.
          Le site vitrine est déjà en ligne mais ne représente absolument pas l'application finale, il est là pour présenter le projet et donner envie aux investisseurs et aux candidats de nous rejoindre.`,
          features: [
            "Application mobile pour les candidats et les recruteurs",
            "Application web pour les recruteurs et le site vitrine",
            "Backend en NestJS pour l'API métier",
            "Backend en Golang pour les websockets et le matching",
            "Monorépo avec Turborepo pour partager du code entre les applications",
            "CI/CD pour automatiser les tests, le build et le déploiement",
            "Système de documentation pour les développeurs",
            "Intégration de Documenso pour la signature électronique et la gestion des documents",
          ]
        },
        "area": {
          title: "AREA",
          description: "Une plateforme d'automatisation inspirée de Zapier et IFTTT, connectant des API tierces via des systèmes d'Actions/Réactions.",
          longDescription: `L'AREA (Action REAction Application) est une suite logicielle complète permettant de créer des flux d'automatisation entre différentes plateformes (GitHub, Spotify, Discord, Google...).
          Le cœur du projet réside dans son architecture backend développée en Node.js (TypeScript) : elle orchestre les protocoles d'authentification OAuth2 pour sécuriser l'accès aux comptes des utilisateurs, surveille en continu les déclencheurs (Actions) et exécute instantanément les conséquences (Réactions).
          Pour garantir la fiabilité et la performance de ces tâches automatisées en arrière-plan, j'ai intégré une base de données en mémoire Redis pour gérer efficacement les files d'attente et l'exécution asynchrone.
          Le projet se décline en une interface Web développée sous React et une application mobile native robuste en Kotlin, toutes deux connectées à notre API centrale.`,
          personalNote: `Ce projet d'Epitech en équipe a été un vrai défi d'architecture logicielle. Gérer de nombreuses API externes, des flux d'authentification OAuth2 variés et l'asynchronisme avec Redis m'a permis de comprendre concrètement les problématiques de scalabilité et de synchronisation des données en temps réel.`,
          features: [
            "Architecture modulaire permettant l'ajout rapide de nouveaux services",
            "Gestion complète du flux d'authentification OAuth2 (multi-plateformes)",
            "Traitement asynchrone des tâches en arrière-plan propulsé par Redis",
            "Interface Web responsive (React) et application mobile native (Kotlin)",
            "Tableau de bord utilisateur pour créer, activer et monitorer les flux"
          ]
        },
        "chattera": {
          title: "Chattera",
          description: "Une application de messagerie instantanée cross-platform (Web & Mobile) propulsée par les WebSockets.",
          longDescription: `Chattera est une plateforme de messagerie complète (type Teams ou Messenger) conçue pour explorer les technologies de communication bidirectionnelle en temps réel.
          L'écosystème s'appuie sur une API centrale en Node.js utilisant les WebSockets pour la transmission instantanée des messages et des états (comme l'indicateur "en train d'écrire"). L'interface Web est propulsée par Vite (ReactJS) tandis que l'application mobile tourne sous Expo (React Native), partageant une logique de gestion des sockets similaire.
          Au-delà du texte, j'ai implémenté un système de gestion des médias permettant l'envoi sécurisé et fluide de photos, de documents et de GIFs, ainsi qu'un système complet de gestion de profils et de listes d'amis.`,
          personalNote: `Ce projet purement personnel m'a permis de me frotter aux problématiques du temps réel. Synchroniser l'état des conversations simultanément sur un navigateur web et une application mobile tout en gérant le transfert de fichiers lourds a été un excellent exercice d'optimisation de flux de données.`,
          features: [
            "Communication instantanée et bidirectionnelle via WebSockets",
            "Partage multimédia riche : images, documents et intégration de GIFs",
            "Système complet d'authentification et de création de comptes sécurisés",
            "Gestion sociale : requêtes, ajouts d'amis et statuts de présence",
            "Application mobile fluide développée avec Expo et interface Web rapide avec Vite"
          ]
        },
      },
      modal: {
        keyFeatures: "Fonctionnalités",
        personalNote: "Note personnelle",
        sourceCode: "Code source",
        urlProject: "Lien du projet"
      },
    },
    toWork: {
      title: "On travaille ensemble ?",
      subtitle: "Je suis actuellement disponible pour de nouvelles opportunités en CDI ou en Freelance.",
      mail: "Envoyer un e-mail"
    },
    footer: {
      technologies: "Technologies utilisées : React, TypeScript, TailwindCSS, Vite.",
      copyright: "© " + new Date().getFullYear() + " - Conçu par Yanis Mignot. Tous droits réservés."
    }
  },
  en: {
    navbar: {
      presentation: "Presentation",
      projects: "Projects",
      contact: "Contact"
    },
    about: {
      title: "Hi, my name is",
      subtitle: "Software & Fullstack Developer",
      description: (
        <>
          Currently in the 4th year of my curriculum at <span className="text-slate-900 dark:text-white font-semibold">Epitech Lyon</span>,
          I am also pursuing a double degree at <span className="text-slate-900 dark:text-white font-semibold">Heriot-Watt University</span> in Edinburgh
          to obtain a Master's in <span className="text-slate-900 dark:text-white font-semibold">Software Engineering</span>.
          <br /><br />
          I design and develop high-performance applications, from database schemas to user interfaces.
          Backed by my corporate experiences, particularly with{" "}
          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary-500">NestJS</span>,{" "}
          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary-500">React</span>{" "}
          and <span className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary-500">Symfony</span> architectures,
          I am passionate about the TypeScript ecosystem.
        </>
      ),
      cardLocation: {
        title: "Lyon (69), France",
        subtitle: "Based in France, open to remote opportunities"
      },
      cardEducation: {
        title: "Dual degree in progress",
        subtitle: "Epitech Lyon + Heriot-Watt University"
      },
      cardAvailability: {
        title: "Available for future projects",
        subtitle: "Freelance, internship, or contract roles"
      },
      cardLanguage: {
        title: "Native French, B2 English",
        subtitle: "Fluent communication in international teams"
      },
      btnProjects: "View my projects",
      btnContact: "Contact me",
      softSkills: ["Autonomous", "Team Player", "Curious", "Rigorous", "Communication"],
    },
    project: {
      title: "My Projects",
      subtitle: "Filter my projects by skill domain:",
      all: "All",
      projects: {
        "portfolio": {
          title: "Single-Page Portfolio",
          description: "My personal showcase website: responsive, modern, and fully internationalized.",
          longDescription: `This portfolio was designed to centralize and highlight my skills as a Fullstack developer through a smooth and polished user experience.
          It is built using React and TypeScript to ensure a robust, type-safe codebase, and leverages Tailwind CSS for a modern, clean, and fully responsive design.
          To optimize organization, I isolated the technical data logic from the UI logic, allowing for simplified website maintenance.
          The application also integrates a theme switching system (Dark / Light / System) based on local storage and native browser preferences.
          To ensure international visibility for recruiters and clients, I implemented a complete custom-built multilingual system without relying on heavy third-party libraries.`,
          personalNote: `This project allowed me to apply modern Front-end development best practices and set up a strict linting pipeline with ESLint 9.
          It serves as a living showcase that I will continue to evolve alongside my Web, Mobile, and Back-end projects.`,
          features: [
            "Smooth Single Page Application (SPA) architecture",
            "Custom multilingual system (FR/EN) via React Context API",
            "Theme management (Light / Dark / System) with local persistence",
            "Dynamic and type-safe project filtering by skill domain",
            "ESLint 9 (Flat Config) setup for clean and standardized code"
          ]
        },
        "ssl-monitor": {
          title: "SSL Monitor",
          description: "SSL certificate monitoring application for websites.",
          longDescription: `SSL Monitor is an application that monitors SSL certificates of websites and sends notifications when they are about to expire.
          It uses ReactJS for the user interface, Node.js and Express for the backend, PostgreSQL for the database, and is fully developed in TypeScript with TailwindCSS for styling.
          The application is designed for easy deployment with Docker and Docker Compose, allowing for quick installation and simplified dependency management.
          I also implemented error handling without an external API, which allows most SSL certificate errors to be seen even if some websites are not accessible.
          There is also a search system for websites directly by IP, which allows finding the website associated with an IP even if the website is not directly accessible.
          There is a whole dashboard system to monitor different domain names, groupable by server as well, allowing monitoring of multiple websites on the same server.
          User management is also present, with different roles to manage access rights to the various features of the application.`,
          personalNote: `This project allowed me to strengthen my skills in full-stack development and database management, while focusing on the security and reliability of web applications.
          This project is now deployed internally in a company where I worked.
          I am proud to see my work used in a real context and to have contributed to improving the security of websites.`,
          features: [
            "Real-time SSL certificate monitoring",
            "Email notifications before expiration",
            "Responsive and modern user interface",
            "User and monitored site management",
            "Easy deployment with Docker and Docker Compose",
          ]
        },
        "cabanesDB": {
          title: "CabanesDB",
          description: "Showcase website for a psychologist with online appointment booking.",
          longDescription: `CabanesDB is a showcase website for a psychologist, offering the ability to book sessions online.
          The site is developed with HTML, CSS, and JavaScript for the frontend, and uses Node.js and Express for the backend.
          It is designed to be responsive and accessible on all devices.
          It allows users to view information about the services offered, book appointments online, and receive confirmations via email.
          The site is optimized for SEO and performance, ensuring a smooth and pleasant user experience.
          It is also secured to protect user data and ensure the confidentiality of personal information.`,
          personalNote: `My first real freelance project, it allowed me to understand client needs and create a solution tailored to their expectations while respecting deadlines and budget.
          Today I would no longer use this technology for my projects, but I am proud of what I accomplished with CabanesDB. Sometimes it's important to remember where you come from and celebrate your successes, even if they are no longer at the cutting edge of technology.`,
          features: [
            "Responsive and modern showcase website",
            "Online booking system for sessions",
            "Intuitive and easy-to-navigate user interface",
            "Optimized for SEO and site performance",
          ]
        },
        "koudmain": {
          title: "Koudmain",
          description: "Comprehensive application for instant recruitment in the hospitality sector.",
          longDescription: `Koudmain is a comprehensive application for instant recruitment in the hospitality sector (Cafés, Hotels, Restaurants).
          The goal is to offer CDDU (Fixed-term employment contracts) to candidates and allow recruiters to quickly find qualified candidates for their staffing needs.
          It is divided into three parts: two mobile applications in React Native (one for candidates and one for recruiters), a showcase website, and two backends (one for the business API in NestJS and one for websockets and matching in Golang).
          The entire system is developed in TypeScript and uses TailwindCSS for styling.
          The mobile applications are designed to be intuitive and easy to use, allowing candidates to apply quickly and recruiters to find the best talent in real-time.
          They are also in a monorepo with Turborepo, which allows sharing code between the two applications and optimizing development.
          The NestJS backend manages data and business logic, while the Golang backend handles websockets, notifications, and matching between candidates and recruiters.
          The entire system is designed to be scalable and performant, allowing for a large number of simultaneous users.
          A CI/CD pipeline is also in place to automate testing, building, and deployment of the applications and backends through a repository dedicated solely to building and deploying with Docker Compose.
          There is also a documentation system for developers, allowing them to quickly understand the architecture and functionality of the application.
          Documenso is integrated for electronic signatures and document management, enabling secure handling of contracts and administrative documents in compliance with current regulations.`,
          personalNote: `We are a team of 5 people working on this project. This project is part of our EIP (Epitech Innovative Project) and will be presented by 2028 before a panel of experts. It is therefore constantly evolving, and we are working hard to make it as efficient and comprehensive as possible.
          This is our final year project, and we are very proud of what we have accomplished so far. We have learned a lot about developing complete applications and managing projects in a team.
          It has also allowed us to gain skills in marketing and business, which are crucial for the success of a project and for securing funding to develop it further.
          We are eager to continue working on this project and present it before the panel of experts. We hope our work will be appreciated and that we can continue developing Koudmain after graduation.
          The showcase website is already live but does not represent the final application; it is there to present the project and attract investors and candidates to join us.`,
          features: [
            "Mobile application for candidates and recruiters",
            "Web application for recruiters and showcase website",
            "NestJS backend for business API",
            "Golang backend for websockets and matching",
            "Monorepo with Turborepo to share code between applications",
            "CI/CD pipeline to automate testing, building, and deployment",
            "Documentation system for developers",
            "Integration of Documenso for electronic signatures and document management",
          ]
        },
        "area": {
          title: "AREA",
          description: "An automation platform inspired by Zapier and IFTTT, connecting third-party APIs through Action/Reaction systems.",
          longDescription: `AREA (Action REAction Application) is a comprehensive software suite that enables the creation of automated workflows between various platforms (GitHub, Spotify, Discord, Google...).
          The core of the project lies in its backend architecture built with Node.js (TypeScript): it orchestrates OAuth2 authentication protocols to secure user accounts, continuously monitors triggers (Actions), and instantly executes consequences (Reactions).
          To ensure the reliability and performance of these background automation tasks, I integrated a Redis in-memory database to efficiently manage job queues and asynchronous processing.
          The project features a responsive Web interface developed with React and a robust native Mobile application built in Kotlin, both communicating with our central API.`,
          personalNote: `This Epitech team project was a true software architecture challenge. Handling multiple external APIs, diverse OAuth2 authentication flows, and asynchronous behavior with Redis gave me a solid, practical understanding of scalability and real-time data synchronization.`,
          features: [
            "Modular architecture allowing rapid integration of new microservices",
            "Comprehensive OAuth2 authentication flow management (multi-platform)",
            "Asynchronous background task and queue processing powered by Redis",
            "Responsive Web layout (React) and native Mobile application (Kotlin)",
            "User dashboard to easily create, trigger, and monitor active workflows"
          ]
        },
        "chattera": {
          title: "Chattera",
          description: "A cross-platform instant messaging application (Web & Mobile) powered by WebSockets.",
          longDescription: `Chattera is a full-featured messaging platform (similar to Teams or Messenger) built to explore modern bidirectional, real-time communication technologies.
          The ecosystem relies on a central Node.js API leveraging WebSockets for instant message delivery and status updates (such as "typing..." indicators). The Web interface is powered by Vite (ReactJS), while the mobile app runs on Expo (React Native), sharing a cohesive socket management architecture.
          Beyond text, I implemented a media handling pipeline that allows users to seamlessly send photos, documents, and GIFs, alongside a comprehensive profile and friend-list management system.`,
          personalNote: `This purely personal project allowed me to dive deep into real-time system architectures. Synchronizing conversation states simultaneously across a web browser and a mobile device while handling heavy file uploads was an incredible exercise in data stream optimization.`,
          features: [
            "Instant and bidirectional communication powered by WebSockets",
            "Rich media sharing: support for images, documents, and GIF integration",
            "Secure user authentication and full account creation flow",
            "Social management system: friend requests, friend lists, and online presence",
            "Smooth mobile experience built with Expo and high-performance web app via Vite"
          ]
        },
      },
      modal: {
        keyFeatures: "Key Features",
        personalNote: "Personal Note",
        sourceCode: "Source Code",
        urlProject: "Project Link"
      },
    },
    toWork: {
      title: "Shall we work together?",
      subtitle: "I am currently available for new opportunities in full-time or freelance.",
      mail: "Send an email"
    },
    footer: {
      technologies: "Technologies used: React, TypeScript, TailwindCSS, Vite.",
      copyright: "© " + new Date().getFullYear() + " - Designed by Yanis Mignot. All rights reserved."
    }
  }
};