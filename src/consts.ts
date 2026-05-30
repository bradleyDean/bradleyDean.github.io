import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Bradley Lignoski",
  EMAIL: "bradleylignoski@gmail.com",
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Bradley Lignoski — ML & full-stack engineer and CS/mathematics educator. MS in AI/ML at Johns Hopkins.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Research and engineering projects spanning mechanistic interpretability, applied ML, and full-stack software.",
};

export const TEACHING: Metadata = {
  TITLE: "Teaching",
  DESCRIPTION:
    "Teaching philosophy, background, and artifacts from 12+ years teaching computer science and mathematics.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "The teaching-to-engineering-to-AI-research career arc of Bradley Lignoski.",
};

export const CLIMBING: Metadata = {
  TITLE: "Climbing Etc",
  DESCRIPTION:
    "Climbing and highlining accomplishments, photos, and trip writeups.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/bradleyDean",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/bradley-lignoski-2b9446a9",
  },
];
