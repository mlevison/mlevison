import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Agile Pain Reliefs Experimentanl Blog",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "mark@agilepainrelief.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/marklevison/",
  },
  {
    NAME: "Mastodon",
    HREF: "https://agilealliance.social/@mlevison",
  },
  {
    NAME: "Threads",
    HREF: "https://www.threads.net/@levisonmark",
  },
];
