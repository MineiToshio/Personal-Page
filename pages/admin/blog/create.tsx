import React from 'react';
import Router from 'next/router';
import { AdminLayout as Layout } from '@/components/layout';
import { BlogPostForm } from '@/components/shared';
import { createPost } from '@/firebase/posts';
import useCurrentUser from '@/hooks/useCurrentUser';
import useBoolean from '@/hooks/useBoolean';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import { getDate } from '@/firebase/utils';
import { deleteFile } from '@/firebase/storage';
import type { SubmitHandler } from 'react-hook-form';
import type { NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';
import type { BlogPostFormType } from '@/components/shared';

const CreatePost: NextPage = () => {
  const { currentUser } = useCurrentUser();
  const [isLoading, setIsLoadingTrue, setIsLoadingFalse] = useBoolean();

  const formatPost = (formPost: Partial<BlogPostFormType>, isPublished = false) => {
    if (currentUser) {
      const { contentEs, contentEn, titleEn, titleEs, url, featureImage } = formPost;
      const readingTimeEs = calculateReadingTime(contentEs);
      const readingTimeEn = calculateReadingTime(contentEn);
      const post: PostDoc = {
        en: {
          ...titleEn && { title: titleEn },
          ...contentEn && { content: contentEn },
          readingTime: readingTimeEn,
        },
        es: {
          ...titleEs && { title: titleEs },
          ...contentEs && { content: contentEs },
          readingTime: readingTimeEs,
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
        ...isPublished && { publishedAt: getDate() },
        isPublished,
        likeQty: 0,
        viewsQty: 0,
        commentsQty: 0,
        order: 1,
      };
      return post;
    }
    return null;
  };

  const addPostToFirebase = async (newPost: PostDoc | null) => {
    if (newPost) {
      try {
        setIsLoadingTrue();
        const createdPost = await createPost(newPost);
        return createdPost;
      } catch (e) {
        setIsLoadingFalse();
        alert(e);
        return false;
      }
    } else {
      alert('User is not logged in');
      return false;
    }
  };

  const onSave = async (blogPostForm: Partial<BlogPostFormType>) => {
    const newPost = formatPost(blogPostForm);
    const res = await addPostToFirebase(newPost);
    if (res) Router.push(`/admin/blog/${res.id}`);
  };

  const onPublish: SubmitHandler<BlogPostFormType> = async formPost => {
    const newPost = formatPost(formPost, true);
    const res = await addPostToFirebase(newPost);
    if (res) Router.push('/admin');
  };

  const onImageDelete = (imgUrl: string) => {
    deleteFile(imgUrl);
    return true;
  };

  return (
    <Layout authorizationType="only_auth" title="Create Post">
      <BlogPostForm onPublish={onPublish} onSave={onSave} onImageDelete={onImageDelete} isLoading={isLoading} />
    </Layout>
  );
};

export default CreatePost;
