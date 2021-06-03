import * as admin from 'firebase-admin';
import { adminCredentials } from './credentials';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(adminCredentials),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default admin.auth();
