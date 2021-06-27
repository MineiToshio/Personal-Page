import Compressor from 'compressorjs';
import uniqid from 'uniqid';
import getFileType from '@/helpers/getFileType';
import getImageFileDimensions from '@/helpers/getImageFileDimensions';
import type { FileDoc } from '@/types/firebase';
import { createFile, deleteFileByUrl } from './files';
import { storage } from '.';
import { getDate } from './utils';

const storageRef = storage.ref();

const compressImage = (image: File) =>
  new Promise<File>(
    (resolve, reject) =>
      new Compressor(image, {
        maxWidth: 700,
        maxHeight: 700,
        quality: 0.8,
        convertSize: 200000,
        success: result => resolve(result as File),
        error: reject,
      }),
  );

export const saveFile = async (file: File) => {
  const fileType = getFileType(file.type);
  const realFile = fileType === 'image' ? await compressImage(file) : file;

  const filename = realFile.name;
  const ext = filename.slice((Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1);

  const hash = uniqid();
  const storageName = `${hash}.${ext}`;

  const fileRef = storageRef.child(storageName);
  await fileRef.put(realFile);

  const imageDimensions = await getImageFileDimensions(realFile);
  const filenameWithoutExt = filename.slice(0, -ext.length - 1);

  const url: string = await fileRef.getDownloadURL();

  const fileDoc: FileDoc = {
    name: filenameWithoutExt,
    storageName,
    ext,
    type: fileType,
    url,
    createdAt: getDate(),
    size: realFile.size,
    ...imageDimensions,
  };
  createFile(fileDoc);
  return fileDoc;
};

export const deleteFile = async (fileUrl: string) => {
  const fileRef = storage.refFromURL(fileUrl);
  await fileRef.delete();
  deleteFileByUrl(fileUrl);
};
