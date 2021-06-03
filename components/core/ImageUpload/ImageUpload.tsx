import React, { useState, useRef } from 'react';
import theme from '@/styles/theme';
import { saveFile, deleteFile } from '@/firebase/storage';
import useBoolean from '@/hooks/useBoolean';
import { Typography, Icon } from '..';

type Props = {
  onImageUpload: (uploadedImg: string) => void
};

const ImageUpload = ({ onImageUpload }: Props) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [isLoading, setIsLoadingTrue, setIsLoadingFalse] = useBoolean(false);
  const fileUploadRef = useRef<HTMLInputElement>(null);
  
  const onUploadClick = () => fileUploadRef?.current?.click();

  const onImageUploadChange = async () => {
    const image = fileUploadRef.current?.files && fileUploadRef.current.files[0];
    if (image) {
      setIsLoadingTrue();
      const filename = image.name;
      const fileExtension = filename.slice((Math.max(0, filename.lastIndexOf(".")) || Infinity) + 1);
      const imageUrl = await saveFile(image, fileExtension);
      if (imgUrl) {
        deleteFile(imgUrl);
      }
      setImgUrl(imageUrl);
      onImageUpload(imageUrl);
      setIsLoadingFalse();
    }
  }

  const onClose = () => {
    if (imgUrl) {
      setImgUrl(null);
      deleteFile(imgUrl);
    }
  }

  return (
    <div className="container">
      <div className="image-container">
        {isLoading && <Icon icon="spinner" pulse />}
        {!isLoading && (imgUrl
          ? <img src={imgUrl} alt="upload" className="uploaded-image" />
          : <Typography variant="body2" text="Foto de portada" color="muted" />)
        }
      </div>
      {imgUrl
        && (
          <button type="button" className="close" onClick={onClose}>
            <Icon icon="times" color="white" />
          </button>
      )}
      
      <button type="button" className="upload-button" onClick={onUploadClick}>
        <Typography variant="body2" text="Subir foto" />
      </button>
      <input type="file" className="fileUpload" ref={fileUploadRef} onChange={onImageUploadChange} accept="image/*" />
      <style jsx>{`
        .container {
          border: 1px solid ${theme.color.border};
          border-radius: 5px;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .image-container {
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .uploaded-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .upload-button {
          border: 0;
          padding: 5px;
          cursor: pointer;
          border-radius: 5px;
        }
        .fileUpload {
          display: none;
        }
        .close {
          border: 0;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          position: absolute;
          top: 5px;
          right: 5px;
          background: ${theme.color.danger};
          cursor: pointer;
        }
        .close:hover {
          filter: brightness(.9);
        }
      `}</style>
    </div>
  );
};

export default ImageUpload;
