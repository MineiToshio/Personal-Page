const getFileType = (fileType: string) => {
  if (/^image\//.test(fileType)) return 'image';
  return 'file';
};

export default getFileType;
