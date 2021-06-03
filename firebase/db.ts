import firebase from '.';
import type { PostDoc } from '@/types/firebase';

const converter = <T>() => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) => snap.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  // eslint-disable-next-line import/no-named-as-default-member
  firebase.firestore().collection(collectionPath).withConverter(converter<T>());

const db = {
  posts: dataPoint<PostDoc>('posts'),
};

export default db;
