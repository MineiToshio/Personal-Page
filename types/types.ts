export type Project = {
  id: string;
  name: {
    es: string;
    en: string;
  };
  tech: Array<string>;
  description: {
    es: string;
    en: string;
  };
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
