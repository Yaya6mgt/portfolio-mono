import type { ReactNode } from "react";

export type Language = 'fr' | 'en';

export interface Translations {
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
  footer: {
    technologies: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
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
    footer: {
      technologies: "Technologies utilisées : React, TypeScript, TailwindCSS, Vite.",
      copyright: "© " + new Date().getFullYear() + " - Conçu par Yanis Mignot. Tous droits réservés."
    }
  },
  en: {
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
    footer: {
      technologies: "Technologies used: React, TypeScript, TailwindCSS, Vite.",
      copyright: "© " + new Date().getFullYear() + " - Designed by Yanis Mignot. All rights reserved."
    }
  }
};