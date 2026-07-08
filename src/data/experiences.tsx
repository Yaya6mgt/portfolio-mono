
export interface Experience {
  id: string;
  type: 'work' | 'education';
  company: string;
  location: string;
}

export interface ExperienceText {
  date: string;
  title: string;
  description: string;
  tags: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "onlineformapro-dev",
    type: "work",
    company: "Onlineformapro",
    location: "Vesoul (70)"
  },
  {
    id: "ybrush-it",
    type: "work",
    company: "Y-Brush",
    location: "Lyon (69)"
  },
  {
    id: "epitech-3",
    type: "education",
    company: "Epitech",
    location: "Lyon (69)"
  },
  {
    id: "besancon-maths",
    type: "education",
    company: "UFRST de Besançon",
    location: "Besançon (25)"
  },
  {
    id: "stellantis-job",
    type: "work",
    company: "Stellantis",
    location: "Vesoul (70)"
  },
  {
    id: "lycee-s",
    type: "education",
    company: "Lycée Les Haberges",
    location: "Vesoul (70)"
  }
];
