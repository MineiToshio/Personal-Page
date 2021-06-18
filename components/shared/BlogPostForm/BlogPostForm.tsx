import React, { useState } from 'react';
import type { Locale } from '@/types/i18n';
import PostPreview from './PostPreview';
import Form from './Form';
import type { Props as FormProps, FormType } from './Form';

type Props = Omit<FormProps, 'language' | 'onLanguageChange' | 'onPreview'>;

const BlogPostForm = ({
  onSave,
  onPublish,
  onUnpublish,
  onImageDelete,
  isLoading,
  initialPost,
  isPostPublished = false,
}: Props) => {
  const [language, setLanguage] = useState<Locale>('es');
  const [previewData, setPreviewData] = useState<Partial<FormType> | null>(null);
  const onPreviewClose = () => setPreviewData(null);

  return (
    <>
      {previewData ? (
        <PostPreview
          title={language === 'en' ? previewData.titleEn : previewData.titleEs}
          content={language === 'en' ? previewData.contentEn : previewData.contentEs}
          publishedAt={new Date()}
          readingTime={0}
          featureImage={previewData.featureImage}
          commentsQty={0}
          onClose={onPreviewClose}
        />
      ) : (
        <Form
          onSave={onSave}
          onPublish={onPublish}
          onUnpublish={onUnpublish}
          onImageDelete={onImageDelete}
          isLoading={isLoading}
          initialPost={initialPost}
          isPostPublished={isPostPublished}
          language={language}
          onLanguageChange={setLanguage}
          onPreview={setPreviewData}
        />
      )}
    </>
  );
};

export default BlogPostForm;
