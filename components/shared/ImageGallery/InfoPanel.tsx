import React from 'react';
import Image from 'next/image';
import { Spacer, Button } from '@/components/core';
import theme from '@/styles/theme';
import type { FileDoc } from '@/types/firebase';
import formatBytes from '@/helpers/formatBytes';
import InfoText from './InfoText';

type Props = {
  onImageDelete: () => void;
  image: FileDoc;
};

const InfoPanel = ({ onImageDelete, image }: Props) => (
  <div className="info-container">
    <div className="thumbnail">
      <Image src={image.url} alt={`${image.name}.${image.ext}`} width={205} height={205} />
    </div>
    <Spacer direction="vertical" size={2} />
    <InfoText text={`${image.name}.${image.ext}`} />
    <InfoText text={image.createdAt.toDate().toLocaleString()} />
    <InfoText text={`${image.width}x${image.height}`} />
    <InfoText text={formatBytes(image.size)} />
    <Button onClick={onImageDelete} text="Delete" icon="trash" backgroundColor="danger" />
    <style jsx>{`
      .info-container {
        width: 250px;
        border: 1px solid ${theme.color.border};
        border-radius: 5px;
        padding: 10px;
      }
      .thumbnail {
        width: 205px;
        height: 205px;
        position: relative;
        background: ${theme.color.black};
      }
      :global(.thumbnail img) {
        object-fit: contain;
      }
    `}</style>
  </div>
);

export default InfoPanel;
