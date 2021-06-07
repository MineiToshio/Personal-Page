import type Firebase from 'firebase';

export type PostDoc = {
  // TODO: Make the id mandatory
  id?: string;
  en: {
    title?: string;
    content?: string;
    timeToRead?: number;
  },
  es: {
    title?: string;
    content?: string;
    timeToRead?: number;
  },
  creator: {
    id: string;
    name: string;
    photoUrl?: string;
  },
  featureImage?: string;
  url?: string;
  createdAt: Firebase.firestore.Timestamp;
  updatedAt: Firebase.firestore.Timestamp;
  publishedAt?: Firebase.firestore.Timestamp;
  isPublished: boolean;
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
