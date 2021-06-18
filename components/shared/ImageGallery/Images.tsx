import React from 'react';
import Image from 'next/image'
import classnames from 'classnames';
import { Icon } from '@/components/core'
import theme from '@/styles/theme';
import type { FileDoc } from '@/types/firebase';
import { getResetButtonStyles, getScrollStyles } from '@/styles/common';

type Props = {
  onImageSelect: (image: FileDoc) => void;
  onImageUpload: () => void;
  images: FileDoc[] | null;
  selectedImage: FileDoc | null;
}

const { className: resetButtonClass, styles: resetButtonStyles } = getResetButtonStyles();
const { className: scrollClass, styles: scrollStyles } = getScrollStyles('div');

const Images = ({ onImageSelect, onImageUpload, images, selectedImage }: Props) => (
  <div className={classnames(scrollClass, "container")}>
    <>
      {images
        ? (
          <div className="images">
            <button type="button" onClick={onImageUpload} className="upload">
              <Icon icon="plus" />
            </button>
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
          </div>
        ) : (
          <div className="spinner">
            <Icon icon="spinner" pulse />
          </div>
        )
      }
    </>
    {resetButtonStyles}
    {scrollStyles}
    <style jsx>{`
      .container {
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
      .upload {
        border: 2px dashed ${theme.color.muted};
        cursor: pointer;
        font-size: 32px;
        color: ${theme.color.muted};
      }
      .spinner {
        width: 100%;
        height: 100%;
        font-size: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.color.muted}
      }
    `}</style>
  </div>
)

export default Images;
