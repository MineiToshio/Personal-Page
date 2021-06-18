import React, { useEffect, useState } from 'react';
import { getFilesByType } from '@/firebase/files';
import type { FileDoc } from '@/types/firebase';
import ImageGalleryView from './ImageGalleryView';

type Props = {
  onImageSelected: (url: string) => void;
  onClose: () => void;
}

const ImageGallery = ({ onImageSelected, onClose }: Props) => {
  const [images, setImages] = useState<FileDoc[] | null>(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const getImages = async () => {
      const storedImages = await getFilesByType('image');
      setImages(storedImages);
    }
    getImages();
  }, []);

  const onImageSelectedClick = () => onImageSelected(selectedImage);

  return (
    <ImageGalleryView 
      onImageSelected={onImageSelectedClick}
      onImageSelect={setSelectedImage}
      selectedImage={selectedImage}
      onClose={onClose}
      images={images}
    />
  )
};

export default ImageGallery;
