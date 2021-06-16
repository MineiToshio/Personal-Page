import uniqid from 'uniqid';
import { createFile, deleteFileByUrl } from './files';
import { storage } from '.';
import { getDate } from './utils';

const storageRef = storage.ref();

const getFileType = (fileType: string) => {
  if(/^image\//.test(fileType)) return 'image';
  return 'file';
}

export const saveFile = async (file: File) => {
  const filename = file.name;
  const ext = filename.slice(
    (Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1,
  );

  const hash = uniqid();
  const path = `${hash}.${ext}`;

  const fileRef = storageRef.child(path);
  await fileRef.put(file);

  const url: string = await fileRef.getDownloadURL();
  createFile({
    name: filename,
    type: getFileType(file.type),
    url,
    createdAt: getDate(),
  });
  return url;
};

export const deleteFile = async (fileUrl: string) => {
  const fileRef = storage.refFromURL(fileUrl);
  await fileRef.delete();
  deleteFileByUrl(fileUrl);
};
