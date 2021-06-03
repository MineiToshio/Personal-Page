import uniqid from 'uniqid';
import { storage } from '.';

const storageRef = storage.ref();

export const saveFile = async (file: File, ext: string) => {
  const hash = uniqid();
  const path = `${hash}.${ext}`;

  const fileRef = storageRef.child(path);
  await fileRef.put(file);

  const url = await fileRef.getDownloadURL();
  return url;
}

export const deleteFile = async (fileUrl: string) => {
  const fileRef = storage.refFromURL(fileUrl);
  await fileRef.delete();
}
