export type Project = {
  id: string;
  name: string;
  tech: Array<string>;
  description: string;
  images: Array<string>;
  live?: string;
  github?: string;
};

export type SocialIcon = {
  name: string;
  url: string;
  color: string;
  icon: 'twitter' | 'facebookSquare' | 'instagram' | 'github' | 'linkedin';
};

export type Technology = {
  name: string;
  icon: string;
};

export type IntentionalAny = any;
