import type { FileDoc, FileType } from '@/types/firebase';
import db from './db';
import { getDocumentsWithId } from './utils';

export const getFilesByType = async (type: FileType) => {
  const snap = await db.files.where('type', '==', type).orderBy('createdAt').get();
  const files = getDocumentsWithId(snap);
  return files;
}

export const createFile = async (file: FileDoc) => {
  const ref = await db.files.add(file);
  return {
    ...file,
    id: ref.id,
  }
};

export const deleteFile = (id: string) => db.files.doc(id).delete();

export const deleteFileByUrl = async (url: string) => {
  const snap = await db.files.where('url', '==', url).get();
  snap.docs.forEach(doc => doc.ref.delete());
};
