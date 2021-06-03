/* eslint-disable import/no-extraneous-dependencies */
// TODO: Eslint throws a weird error, the line above is to fix that.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

import config from './credentials';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  if (typeof window !== 'undefined') firebase.analytics();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
