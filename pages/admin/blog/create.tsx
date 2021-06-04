import React, { useState } from 'react';
import Router from 'next/router';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Spacer, Input, ImageUpload, TextEditor } from '@/components/core';
import { LanguageSelector } from '@/components/pages/admin';
import { AdminLayout as Layout } from '@/components/layout';
import { createPost } from '@/firebase/posts';
import useCurrentUser from '@/hooks/useCurrentUser';
import useBoolean from '@/hooks/useBoolean';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import type { NextPage } from 'next';
import type { Locale } from '@/types/i18n';
import type { PostDoc } from '@/types/firebase';

export type BlogPostForm = {
  url: string;
  titleEs: string;
  titleEn: string;
  contentEn: string;
  contentEs: string;
  featureImage?: string;
};

const CreatePost: NextPage = () => {
  const { currentUser } = useCurrentUser();
  const [language, setLanguage] = useState <Locale>('es');
  const [isLoading, setIsLoadingTrue, setIsLoadingFalse] = useBoolean();
  const { control, handleSubmit, getValues } = useForm();

  const formatPost = (formPost: Partial<BlogPostForm>, published = false) => {
    if (currentUser) {
      const { contentEs, contentEn, titleEn, titleEs, url, featureImage } = formPost;
      const timeToReadEs = calculateReadingTime(contentEs);
      const timeToReadEn = calculateReadingTime(contentEn);
      const post: PostDoc = {
        en: {
          ...titleEn && { title: titleEn },
          ...contentEn && { content: contentEn },
          timeToRead: timeToReadEn,
        },
        es: {
          ...titleEs && { title: titleEs },
          ...contentEs && { content: contentEs },
          timeToRead: timeToReadEs,
        },
        creator: {
          id: currentUser.uid,
          name: currentUser.displayName,
          photoUrl: currentUser.photoURL,
        },
        ...featureImage && { featureImage },
        ...url && { url },
        createdAt: new Date(),
        updatedAt: new Date(),
        ... published && { publishedAt: new Date() },
        published,
        likeQty: 0,
        order: 1,
      };
      return post;
    }
    return null;
  }

  const addPostToFirebase = async (newPost: PostDoc | null) => {
    if (newPost) {
      try {
        setIsLoadingTrue();
        await createPost(newPost);
      } catch (e) {
        setIsLoadingFalse();
        alert(e)
      }
    } else {
      alert('Usuario no logueado');
    }
  }

  const onSave = async () => {
    const blogPostForm = getValues() as BlogPostForm;
    const newPost = formatPost(blogPostForm);
    await addPostToFirebase(newPost);
    setIsLoadingFalse();
  };

  const onPublish: SubmitHandler<BlogPostForm> = async (formPost) => {
    const newPost = formatPost(formPost, true);
    await addPostToFirebase(newPost);
    Router.push('/admin');
  };
  return (
    <Layout authorizationType="only_auth">
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onPublish)}>
          <LanguageSelector language={language} onLanguageChange={setLanguage} />
          <Spacer size={3} direction="vertical" />
          {/* There is a bug with react-hook-forms which mixes the values in a ternary operator
              https://react-hook-form.com/faqs#Whyisdefaultvaluenotchangingcorrectlywithternaryoperator */}
          {language === 'en' 
            ? <Input placeholder="Title" name="titleEn" control={control} rules={{ required: true }} key="titleEn" />
            : <Input placeholder="Title" name="titleEs" control={control} rules={{ required: true }} key="titleEs" />
          }
          <Spacer size={3} direction="vertical" />
          <Input placeholder="Url" name="url" control={control} rules={{ required: true }} />
          <Spacer size={3} direction="vertical" />
          <Controller
            control={control}
            name="featureImage"
            render={({ field: { onChange, value } }) => (
              <ImageUpload onImageUpload={onChange} imgUrl={value} />
            )}
          />
          <Spacer size={3} direction="vertical" />
          {language === 'en'
            ? (
              <Controller
                key="contentEn"
                control={control}
                name="contentEn"
                render={({ field: { onChange, value } }) => (
                  <TextEditor onChange={onChange} value={value} />
                )}
              />
            )
            : (
              <Controller
                key="contentEs"
                control={control}
                name="contentEs"
                render={({ field: { onChange, value } }) => (
                  <TextEditor onChange={onChange} value={value} />
                )}
              />
            )
          }
          
          <Spacer size={3} direction="vertical" />
          <div className="buttons">
            <Button icon="save" text="Guardar" backgroundColor="secondary" onClick={onSave} isLoading={isLoading} />
            <Spacer size={2} direction="horizontal" />
            <Button icon="upload" text="Publicar" type="submit" isLoading={isLoading} />
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
          width: 720px;
        }
        .buttons {
          display: flex;
        }
      `}</style>
    </Layout>
  );
};

export default CreatePost;
