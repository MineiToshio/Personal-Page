import type Firebase from 'firebase';

export type PostDoc = {
  // TODO: Make the id mandatory
  id?: string;
  titleEs: string;
  titleEn: string;
  featureImage?: string;
  contentEs: string;
  contentEn: string;
  url: string;
  timeToRead: number;
  creatorId: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  published: boolean;
  likeQty: number;
  tags?: string[];
  category?: string;
  order: number;
};

export type UserAuth = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  providerId: string;
  emailVerified?: boolean;
  isAdmin?: boolean;
};

export type User = UserAuth | null;

export type AuthError = {
  error: string;
};

export type AuthResponse = Firebase.auth.UserCredential | AuthError;

export const isAuthError = (res: AuthResponse): res is AuthError =>
  // eslint-disable-next-line no-extra-parens
  (res as AuthError).error !== undefined;
