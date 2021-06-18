import React from 'react';
import classnames from 'classnames';
import { Typography, Spacer, Icon, Button } from '@/components/core'
import { Portal } from '@/components/shared';
import theme from '@/styles/theme';
import type { FileDoc } from '@/types/firebase';
import { getResetButtonStyles } from '@/styles/common';
import InfoPanel from './InfoPanel';
import Images from './Images';

type Props = {
  onImageSelected: () => void;
  onImageSelect: (image: FileDoc) => void;
  onImageDelete: () => void;
  onImageUpload: () => void;
  onClose: () => void;
  images: FileDoc[] | null;
  selectedImage: FileDoc | null;
}

const { className: resetButtonClass, styles: resetButtonStyles } = getResetButtonStyles();

const ImageGallery = ({ onImageSelected, onImageSelect, onImageDelete, onImageUpload, onClose, images, selectedImage }: Props) => (
  <Portal>
    <div className="modal">
      <div className="container">
        <div className="header">
          <Typography text="Image Gallery" variant="subtitle" />
          <button onClick={onClose} type="button" className={classnames(resetButtonClass, 'close')}>
            <Icon icon="times" />
          </button>
        </div>
        <Spacer direction="vertical" size={2} />
        <div className="body">
          <Images images={images} onImageSelect={onImageSelect} onImageUpload={onImageUpload} selectedImage={selectedImage} />
          {selectedImage && (
            <>
              <Spacer direction="horizontal" size={2} />
              <InfoPanel image={selectedImage} onImageDelete={onImageDelete} />
            </>
          )}
        </div>
        <Spacer direction="vertical" size={2} />
        <div className="footer">
          <Button onClick={onImageSelected} text="Select" icon="check" />
          <Spacer direction="horizontal" size={2} />
          <Button onClick={onClose} text="Close" backgroundColor="danger" icon="times" />
        </div>
      </div>
    </div>
    {resetButtonStyles}
    <style jsx>{`
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: ${theme.color.white};
        z-index: 99;
      }
      .header {
        display: flex;
        justify-content: space-between;
      }
      .close {
        font-size: 25px;
      }
      .container {
        padding: 30px;
      }
      .body {
        display: flex;
      }
      .footer {
        display: flex;
      }
    `}</style>
  </Portal>
)

export default ImageGallery;
