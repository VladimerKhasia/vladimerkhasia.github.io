export interface Author {
  name: string;
  isMe?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  thumbnailUrl: string;
  abstract: string;
  links: {
    paper?: string;
    code?: string;
    website?: string;
    pdf?: string;
  };
  tags: string[];
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  email: string;
  github: string;
  scholar?: string;
  twitter?: string;
  linkedin?: string;
  about: string;
  avatarUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
}