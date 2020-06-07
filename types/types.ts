export type BlogPost = {
  id: number;
  title: string;
  photo: string;
  summary: string;
  createdAt: string;
  commentQty: number;
  readingTime: number;
  likedQty: number;
  thumbnail: string;
  url: string;
};

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
  icon: 'twitter' | 'facebook-square' | 'instagram' | 'github' | 'linkedin';
};
