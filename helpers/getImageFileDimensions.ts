import getFileType from './getFileType';

type Dimension = {
  height: number;
  width: number;
};

const getImageFileDimensions = (file: File) =>
  new Promise<Dimension | null>(resolve => {
    if (getFileType(file.type) === 'image') {
      const fr = new FileReader();

      fr.onload = () => {
        const img = new Image();
        img.onload = () => {
          resolve({
            height: img.height,
            width: img.width,
          });
        };
        if (typeof fr.result === 'string') {
          img.src = fr.result;
        }
      };

      fr.readAsDataURL(file);
    } else {
      resolve(null);
    }
  });

export default getImageFileDimensions;
