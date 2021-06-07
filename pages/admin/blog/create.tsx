import React from 'react';
import Router from 'next/router';
import { AdminLayout as Layout } from '@/components/layout';
import { BlogPostForm } from '@/components/shared';
import { createPost } from '@/firebase/posts';
import useCurrentUser from '@/hooks/useCurrentUser';
import useBoolean from '@/hooks/useBoolean';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import { getDate } from '@/firebase/utils';
import type { SubmitHandler } from 'react-hook-form';
import type { NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';
import type { BlogPostFormType } from '@/components/shared';

const CreatePost: NextPage = () => {
  const { currentUser } = useCurrentUser();
  const [isLoading, setIsLoadingTrue, setIsLoadingFalse] = useBoolean();

  const formatPost = (formPost: Partial<BlogPostFormType>, published = false) => {
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
        createdAt: getDate(),
        updatedAt: getDate(),
        ...published && { publishedAt: getDate() },
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
        const createdPost = await createPost(newPost);
        return createdPost;
      } catch (e) {
        setIsLoadingFalse();
        alert(e)
        return false;
      }
    } else {
      alert('Usuario no logueado');
      return false;
    }
  }

  const onSave = async (blogPostForm: Partial<BlogPostFormType>) => {
    const newPost = formatPost(blogPostForm);
    const res = await addPostToFirebase(newPost);
    if (res) Router.push(`/admin/blog/${res.id}`);
  };

  const onPublish: SubmitHandler<BlogPostFormType> = async (formPost) => {
    const newPost = formatPost(formPost, true);
    const res = await addPostToFirebase(newPost);
    if (res) Router.push('/admin');
  };

  return (
    <Layout authorizationType="only_auth" title="Create Post">
      <BlogPostForm onPublish={onPublish} onSave={onSave} isLoading={isLoading} />
    </Layout>
  );
};

export default CreatePost;
