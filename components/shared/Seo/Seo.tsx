import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const Seo = ({ title, description, image, url }: Props) => (
  <Head>
    {title && (
      <>
        <meta name="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
      </>
    )}
    {description && (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />
      </>
    )}
    {url && (
      <>
        <meta property="og:url" content={url} />
        <meta property="twitter:url" content={url} />
      </>
    )}
    <meta property="og:type" content="website" />
    <meta property="fb:app_id" content={process.env.FACEBOOK_APP_ID} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@MineiToshio" />
  </Head>
);

export default Seo;
