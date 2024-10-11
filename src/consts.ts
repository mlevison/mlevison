import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Agile Pain Reliefs Experimental Blog",
  DESCRIPTION:
    "Writing about How Influnce Works for Agile Managers and Product Owners.",
  EMAIL: "mark@agilepainrelief.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A simple home page.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "The Core Blog",
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
