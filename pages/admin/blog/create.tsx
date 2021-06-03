import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Spacer, Input, ImageUpload, TextEditor } from '@/components/core';
import { LanguageSelector } from '@/components/pages/admin';
import { AdminLayout as Layout } from '@/components/layout';
import { createPost } from '@/firebase/posts';
import useCurrentUser from '@/hooks/useCurrentUser';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import type { NextPage } from 'next';
import type { Locale } from '@/types/i18n';

export type BlogPostForm = {
  url: string;
  title: string;
  content: string;
  featureImage?: string;
};

const Create: NextPage = () => {
  const { currentUser } = useCurrentUser();
  const [language, setLanguage] = useState <Locale>('es');
  const { control, handleSubmit } = useForm();
  
  const onPublish: SubmitHandler<BlogPostForm> = ({ url, title, content, featureImage }) => {
    if (currentUser) {
      const timeToRead = calculateReadingTime(content);
      const post = {
        titleEs: title,
        titleEn: title,
        featureImage,
        contentEs: content,
        contentEn: content,
        url,
        timeToRead,
        creatorId: currentUser.uid,
        creator: currentUser.displayName,
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
        published: false,
        likeQty: 0,
        order: 1,
      };
      createPost(post);
    } else {
      alert('Usuario no logueado');
    }
  };
  return (
    <Layout authorizationType="only_auth">
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onPublish)}>
          <LanguageSelector language={language} onLanguageChange={setLanguage} />
          <Spacer size={3} direction="vertical" />
          <Input placeholder="Title" name="title" control={control} rules={{ required: true }} />
          <Spacer size={3} direction="vertical" />
          <Input placeholder="Url" name="url" control={control} rules={{ required: true }} />
          <Spacer size={3} direction="vertical" />
          <Controller
            control={control}
            name="featureImage"
            render={({ field: { onChange, value } }) => (
              <ImageUpload onImageUpload={onChange} />
            )}
          />
          <Spacer size={3} direction="vertical" />
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, value } }) => (
              <TextEditor onChange={onChange} value={value} />
            )}
          />
          <Spacer size={3} direction="vertical" />
          <div className="buttons">
            <Button icon="save" text="Guardar" backgroundColor="secondary" type="submit" />
            <Spacer size={2} direction="horizontal" />
            <Button icon="upload" text="Publicar" type="submit" />
          </div>
        </form>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: center;
          justify-content: center;
          width: 100%;
        }
        .form {
          max-width: 720px;
        }
        .buttons {
          display: flex;
        }
      `}</style>
    </Layout>
  );
};

export default Create;
