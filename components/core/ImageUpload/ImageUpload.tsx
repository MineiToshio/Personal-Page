import React from 'react';
import theme from '@/styles/theme';
import useBoolean from '@/hooks/useBoolean';
import { Typography, Icon } from '..';
import { ImageGallery } from '../../shared';

type Props = {
  onImageChange: (uploadedImg?: string) => void;
  imgUrl?: string;
  label: string;
};

const ImageUpload = ({ onImageChange, imgUrl, label }: Props) => {
  const [isLoading, setIsLoadingTrue, setIsLoadingFalse] = useBoolean(false);
  const [showGallery, onImageOpen, onImageClose] = useBoolean();

  const onDelete = () => {
    onImageChange(undefined);
  };

  const onImageSelected = (imageUrl: string) => {
    onImageChange(imageUrl);
    onImageClose();
  }

  return (
    <>
      {showGallery && <ImageGallery onClose={onImageClose} onImageSelected={onImageSelected} />}
      <div className="container">
        <div className="image-container">
          {isLoading && <Icon icon="spinner" pulse />}
          {!isLoading &&
            (imgUrl ? (
              <img src={imgUrl} alt="upload" className="uploaded-image" />
            ) : (
              <Typography variant="body2" text={label} color="muted" />
            ))}
        </div>
        {imgUrl && (
          <button type="button" className="close" onClick={onDelete}>
            <Icon icon="times" color="white" />
          </button>
        )}

        <button type="button" className="upload-button" onClick={onImageOpen}>
          <Typography variant="body2" text="Upload photo" />
        </button>
      </div>
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
          filter: brightness(0.9);
        }
      `}</style>
    </>
  );
};

export default ImageUpload;
