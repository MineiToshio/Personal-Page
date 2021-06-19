import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Spacer, Input, ImageUpload, TextEditor } from '@/components/core';
import type { Locale } from '@/types/i18n';
import LanguageSelector from './LanguageSelector';

export type FormType = {
  url: string;
  titleEs: string;
  titleEn: string;
  contentEn: string;
  contentEs: string;
  featureImage?: string;
};

export type Props = {
  onSave: (formPost: Partial<FormType>) => void;
  onPublish: SubmitHandler<FormType>;
  onImageDelete: (imgUrl: string) => boolean;
  isLoading: boolean;
  initialPost?: Partial<FormType>;
  language: Locale;
  onLanguageChange: (locale: Locale) => void;
  onPreview: (formPost: Partial<FormType>) => void;
  isPostPublished?: boolean;
  onUnpublish?: () => void;
};

const BlogPostForm = ({
  onSave,
  onPublish,
  onUnpublish,
  onImageDelete,
  isLoading,
  initialPost,
  isPostPublished = false,
  language,
  onLanguageChange,
  onPreview,
}: Props) => {
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
    const blogPostForm = getValues() as FormType;
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

  const onPreviewClick = () => {
    const blogPostForm = getValues() as Partial<FormType>;
    onPreview(blogPostForm);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onPublish)}>
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
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
              onImageChange={onChange}
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
            onClick={onPreviewClick}
            isLoading={isLoading}
          />
        </div>
      </form>
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
    </div>
  );
};

export default BlogPostForm;
