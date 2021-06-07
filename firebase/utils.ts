import firebase from 'firebase';
import formatDate from '@/helpers/formatDate';
import { Locale } from '@/types/i18n';

export const getFirstDocument = <T>(snap: firebase.firestore.QuerySnapshot<T>) => {
  if (snap.docs.length === 0) return null;
  const doc = snap.docs[0];
  const data = doc.data();
  const obj = { id: doc.id, ...data };
  return obj;
};

export const getDate = () => firebase.firestore.Timestamp.fromDate(new Date());

export const timestampToDateString = (date: firebase.firestore.Timestamp, lang: Locale = 'en') =>
  formatDate(new Date(date.seconds * 1000), lang);
