import uniqid from 'uniqid';
import { storage } from '.';

const storageRef = storage.ref();

export const saveFile = async (file: File) => {
  const filename = file.name;
  const ext = filename.slice(
    (Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1,
  );

  const hash = uniqid();
  const path = `${hash}.${ext}`;

  const fileRef = storageRef.child(path);
  await fileRef.put(file);

  const url = await fileRef.getDownloadURL();
  return url;
};

export const deleteFile = async (fileUrl: string) => {
  const fileRef = storage.refFromURL(fileUrl);
  await fileRef.delete();
};
