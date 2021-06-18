import uniqid from 'uniqid';
import getFileType from '@/helpers/getFileType';
import getImageFileDimensions from '@/helpers/getImageFileDimensions';
import { createFile, deleteFileByUrl } from './files';
import { storage } from '.';
import { getDate } from './utils';

const storageRef = storage.ref();

export const saveFile = async (file: File) => {
  const filename = file.name;
  const ext = filename.slice(
    (Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1,
  );

  const hash = uniqid();
  const storageName = `${hash}.${ext}`;

  const fileRef = storageRef.child(storageName);
  await fileRef.put(file);

  const imageDimensions = await getImageFileDimensions(file);
  const filenameWithoutExt = filename.slice(0, -ext.length - 1);

  const url: string = await fileRef.getDownloadURL();
  createFile({
    name: filenameWithoutExt,
    storageName,
    ext,
    type: getFileType(file.type),
    url,
    createdAt: getDate(),
    size: file.size,
    ...imageDimensions
  });
  return url;
};

export const deleteFile = async (fileUrl: string) => {
  const fileRef = storage.refFromURL(fileUrl);
  await fileRef.delete();
  deleteFileByUrl(fileUrl);
};
