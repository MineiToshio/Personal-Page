import React, { useEffect, useState } from 'react';
import { getFilesByType } from '@/firebase/files';
import { deleteFile, saveFile } from '@/firebase/storage';
import type { FileDoc } from '@/types/firebase';
import ImageGalleryView from './ImageGalleryView';

type Props = {
  onImageSelected: (url: string) => void;
  onClose: () => void;
};

const ImageGallery = ({ onImageSelected, onClose }: Props) => {
  const [images, setImages] = useState<FileDoc[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<FileDoc | null>(null);

  useEffect(() => {
    const getImages = async () => {
      const storedImages = await getFilesByType('image');
      setImages(storedImages);
    };
    getImages();
  }, []);

  const onImageSelectedClick = () => {
    if (selectedImage) {
      onImageSelected(selectedImage.url);
    } else {
      alert('please select an image');
    }
  };

  const onImageDelete = () => {
    if (images && selectedImage) {
      const r = window.confirm('are you sure you want to delete this image?');
      if (r) {
        deleteFile(selectedImage.url);
        setSelectedImage(null);
        const newImages = images.filter(image => image !== selectedImage);
        setImages(newImages);
      }
    }
  };

  const onImageUpload = () => {
    const fu = document.createElement('input');
    fu.setAttribute('type', 'file');
    fu.setAttribute('accept', 'image/*');
    fu.click();

    fu.onchange = async () => {
      if (fu.files) {
        const [file] = fu.files;

        if (/^image\//.test(file.type)) {
          const uploadedImage = await saveFile(file);
          if (images) {
            setImages([uploadedImage, ...images]);
          } else {
            setImages([uploadedImage]);
          }
        } else {
          alert('You can only upload images.');
        }
      }
    };
  };

  return (
    <ImageGalleryView
      onImageSelected={onImageSelectedClick}
      onImageSelect={setSelectedImage}
      selectedImage={selectedImage}
      onImageDelete={onImageDelete}
      onImageUpload={onImageUpload}
      onClose={onClose}
      images={images}
    />
  );
};

export default ImageGallery;
