import React, { useEffect, useState } from 'react';
import { getFilesByType } from '@/firebase/files';
import { deleteFile } from '@/firebase/storage';
import type { FileDoc } from '@/types/firebase';
import ImageGalleryView from './ImageGalleryView';

type Props = {
  onImageSelected: (url: string) => void;
  onClose: () => void;
}

const ImageGallery = ({ onImageSelected, onClose }: Props) => {
  const [images, setImages] = useState<FileDoc[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<FileDoc | null>(null);

  useEffect(() => {
    const getImages = async () => {
      const storedImages = await getFilesByType('image');
      setImages(storedImages);
    }
    getImages();
  }, []);

  const onImageSelectedClick = () => {
    if (selectedImage) {
      onImageSelected(selectedImage.url);
    } else {
      alert('please select an image')
    }
  }

  const onImageDelete = () => {
    if (images && selectedImage) {
      const r = window.confirm('are you sure you want to delete this image?');
      if (r) {
        deleteFile(selectedImage.url);
        setSelectedImage(null);
        const newImages = images.filter(image => image !== selectedImage)
        setImages(newImages);
      }
    }
  }

  return (
    <ImageGalleryView 
      onImageSelected={onImageSelectedClick}
      onImageSelect={setSelectedImage}
      selectedImage={selectedImage}
      onImageDelete={onImageDelete}
      onClose={onClose}
      images={images}
    />
  )
};

export default ImageGallery;
