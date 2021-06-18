import React from 'react';
import Image from 'next/image'
import classnames from 'classnames';
import { Typography, Spacer, Icon, Button } from '@/components/core'
import { Portal } from '@/components/shared';
import theme from '@/styles/theme';
import type { FileDoc } from '@/types/firebase';
import { getResetButtonStyles, getScrollStyles } from '@/styles/common';
import formatBytes from '@/helpers/formatBytes';

type Props = {
  onImageSelected: () => void;
  onImageSelect: (image: FileDoc) => void;
  onImageDelete: () => void;
  onClose: () => void;
  images: FileDoc[] | null;
  selectedImage: FileDoc | null;
}

const { className: resetButtonClass, styles: resetButtonStyles } = getResetButtonStyles();
const { className: scrollClass, styles: scrollStyles } = getScrollStyles('div');

const ImageGallery = ({ onImageSelected, onImageSelect, onImageDelete, onClose, images, selectedImage }: Props) => (
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
          <div className={classnames(scrollClass, "images-container")}>
            <div className="images">
              {images
                ? (
                  <>
                    {images.map(image => (
                      <button
                        onClick={() => onImageSelect(image)}
                        type="button"
                        className={classnames({
                          [resetButtonClass]: true,
                          image: true,
                          selectedImage: image === selectedImage
                        })}
                        key={image.url}
                      >
                        <Image src={image.url} alt={image.name} layout="fill" objectFit="cover" title={image.name} />
                      </button>
                    ))}
                  </>
                )
                : <Icon icon="spinner" pulse />
              }
            </div>
          </div>
          {selectedImage && (
            <>
            <Spacer direction="horizontal" size={2} />
            <div className="info-container">
              <div className="thumbnail">
                <Image src={selectedImage.url} layout="fill" objectFit="contain" />
              </div>
              <div className="info">
                <Typography text={`${selectedImage.name}.${selectedImage.ext}`} />
                <Typography text={selectedImage.createdAt.toDate().toString()} />
                <Typography text={`${selectedImage.width}x${selectedImage.height}`} />
                <Typography text={formatBytes(selectedImage.size)} />
                <Button onClick={onImageDelete} text="Delete" icon="trash" backgroundColor="danger" />
              </div>
            </div>
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
    {scrollStyles}
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
      .images-container {
        height: calc(100vh - 181px);
        overflow-y: auto;
        padding-right: 16px;
        width: 100%;
      }
      .images {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        grid-gap: 16px;
      }
      .image::before {
        content: "";
        padding-bottom: 100%;
        display: block;
      }
      .image {
        width: 100%;
        height: 100%;
        position: relative;
        border: 4px solid ${theme.color.border};
      }
      .selectedImage {
        border: 4px solid ${theme.color.main};
      }
      .info-container {
        width: 250px;
        border: 1px solid ${theme.color.border};
        border-radius: 5px;
        padding: 10px;
      }
      .thumbnail {
        width: 100%;
        padding-bottom: 100%;
        position: relative;
      }
      .footer {
        display: flex;
      }
    `}</style>
  </Portal>
)

export default ImageGallery;
