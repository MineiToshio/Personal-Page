import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Spacer, Input, ImageUpload, TextEditor } from '@/components/core';
import LanguageSelector from './LanguageSelector';
import PostPreview from './PostPreview';
import type { NextPage } from 'next';
import type { Locale } from '@/types/i18n';

export type BlogPostFormType = {
  url: string;
  titleEs: string;
  titleEn: string;
  contentEn: string;
  contentEs: string;
  featureImage?: string;
};

type PostIsPublished = {
  isPostPublished: true;
  onUnpublish: () => void;
};

type PostIsNotPublished = {
  isPostPublished?: false;
  onUnpublish?: () => void;
};

type Props = {
  onSave: (formPost: Partial<BlogPostFormType>) => void;
  onPublish: SubmitHandler<BlogPostFormType>;
  onImageDelete: (imgUrl: string) => boolean;
  isLoading: boolean;
  initialPost?: Partial<BlogPostFormType>;
} & (PostIsPublished | PostIsNotPublished);

const BlogPostForm: NextPage<Props> = ({
  onSave,
  onPublish,
  onUnpublish,
  onImageDelete,
  isLoading,
  initialPost,
  isPostPublished = false,
}) => {
  const [language, setLanguage] = useState<Locale>('es');
  const [previewData, setPreviewData] = useState<BlogPostFormType | null>(null);
  const { control, handleSubmit, getValues, setValue, trigger } = useForm();

  useEffect(() => {
    setValue('url', initialPost?.url);
    setValue('titleEs', initialPost?.titleEs);
    setValue('titleEn', initialPost?.titleEn);
    setValue('contentEn', initialPost?.contentEn);
    setValue('contentEs', initialPost?.contentEs);
    setValue('featureImage', initialPost?.featureImage);
  }, [setValue, initialPost]);

  const saveForm = () => {
    const blogPostForm = getValues() as BlogPostFormType;
    onSave(blogPostForm);
  };

  const onSaveClick = async () => {
    if (!isPostPublished) {
      saveForm();
    } else {
      const isValidated = await trigger();
      if (isValidated) {
        saveForm();
      }
    }
  };

  const onImageDeleteClick = (imgUrl: string) => {
    const shouldDeletePhoto = onImageDelete(imgUrl);
    if (shouldDeletePhoto) {
      setValue('featureImage', undefined);
    }
  };

  const onPreview = () => {
    const blogPostForm = getValues() as BlogPostFormType;
    setPreviewData(blogPostForm);
  };

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
        <div className="container">
          <form className="form" onSubmit={handleSubmit(onPublish)}>
            <LanguageSelector language={language} onLanguageChange={setLanguage} />
            <Spacer size={3} direction="vertical" />
            {/* There is a bug with react-hook-forms which mixes the values in a ternary operator
          https://react-hook-form.com/faqs#Whyisdefaultvaluenotchangingcorrectlywithternaryoperator */}
            {language === 'en' ? (
              <Input
                placeholder="Title"
                name="titleEn"
                control={control}
                rules={{ required: true }}
                key="titleEn"
              />
            ) : (
              <Input
                placeholder="Title"
                name="titleEs"
                control={control}
                rules={{ required: true }}
                key="titleEs"
              />
            )}
            <Spacer size={3} direction="vertical" />
            <Input placeholder="Url" name="url" control={control} rules={{ required: true }} />
            <Spacer size={3} direction="vertical" />
            <Controller
              control={control}
              name="featureImage"
              render={({ field: { onChange, value } }) => (
                <ImageUpload
                  onImageUpload={onChange}
                  onImageDelete={onImageDeleteClick}
                  imgUrl={value}
                  label="Feature Image"
                />
              )}
            />
            <Spacer size={3} direction="vertical" />
            {language === 'en' ? (
              <Controller
                key="contentEn"
                control={control}
                name="contentEn"
                defaultValue={initialPost?.contentEn}
                render={({ field: { onChange, value } }) => (
                  <TextEditor onChange={onChange} value={value} />
                )}
              />
            ) : (
              <Controller
                key="contentEs"
                control={control}
                name="contentEs"
                defaultValue={initialPost?.contentEs}
                render={({ field: { onChange, value } }) => (
                  <TextEditor onChange={onChange} value={value} />
                )}
              />
            )}

            <Spacer size={3} direction="vertical" />
            <div className="buttons">
              <Button
                icon="save"
                text="Save Post"
                backgroundColor="secondary"
                onClick={onSaveClick}
                isLoading={isLoading}
              />
              <Spacer size={2} direction="horizontal" />
              {isPostPublished ? 
                onUnpublish && (
                  <Button
                    icon="times"
                    text="Unpublish"
                    onClick={onUnpublish}
                    isLoading={isLoading}
                    backgroundColor="danger"
                    type="button"
                    key="unpublish"
                  />
                )
               : (
                <Button
                  icon="upload"
                  text="Publish"
                  type="submit"
                  isLoading={isLoading}
                  key="publish"
                />
              )}
              <Spacer size={2} direction="horizontal" />
              <Button
                icon="eye"
                text="Preview"
                backgroundColor="muted"
                onClick={onPreview}
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      )}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: center;
          justify-content: center;
          width: 100%;
        }
        .form {
          width: 720px;
        }
        .buttons {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default BlogPostForm;
