import React, { useMemo } from 'react';
import Router from 'next/router';
import useCurrentUser from '@/hooks/useCurrentUser';
import useBoolean from '@/hooks/useBoolean';
import { getPost, updatePost, updatePostIsPublished, deleteField } from '@/firebase/posts';
import { getDate } from '@/firebase/utils';
import { deleteFile } from '@/firebase/storage';
import { Spinner, BlogPostForm } from '@/components/shared';
import { AdminLayout as Layout } from '@/components/layout';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import type { SubmitHandler } from 'react-hook-form';
import type { NextPageContext, NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';
import type { BlogPostFormType } from '@/components/shared';

type Props = {
  post: PostDoc | null;
};

type Context = NextPageContext & {
  query: {
    postId: string;
  };
};

const AdminPost: NextPage<Props> = ({ post }) => {
  const { currentUser } = useCurrentUser();
  const [isLoading, setIsLoadingTrue, setIsLoadingFalse] = useBoolean();
  const [isPostPublished, setIsPostPublishedTrue, setIsPostPublishedFalse] = useBoolean(
    post?.isPublished,
  );

  const blogFormPost: Partial<BlogPostFormType> = useMemo(
    () => ({
      url: post?.url,
      titleEs: post?.es.title,
      titleEn: post?.en.title,
      contentEn: post?.en.content,
      contentEs: post?.es.content,
      featureImage: post?.featureImage,
    }),
    [post],
  );

  if (!post) {
    Router.push('/admin');
    return <Spinner />;
  }

  const formatPost = (formPost: Partial<BlogPostFormType>, isPublished = false) => {
    if (currentUser) {
      const { contentEs, contentEn, titleEn, titleEs, url, featureImage } = formPost;
      const readingTimeEs = calculateReadingTime(contentEs);
      const readingTimeEn = calculateReadingTime(contentEn);
      const editedPost: Partial<PostDoc> = {
        en: {
          ...(titleEn && { title: titleEn }),
          ...(contentEn && { content: contentEn }),
          readingTime: readingTimeEn,
        },
        es: {
          ...(titleEs && { title: titleEs }),
          ...(contentEs && { content: contentEs }),
          readingTime: readingTimeEs,
        },
        ...(featureImage && { featureImage }),
        ...(url && { url }),
        updatedAt: getDate(),
        ...(isPublished && { publishedAt: getDate() }),
        ...(isPublished && { isPublished }),
      };
      return editedPost;
    }
    return null;
  };

  const addPostToFirebase = async (newPost: Partial<PostDoc> | null) => {
    if (newPost) {
      try {
        setIsLoadingTrue();
        await updatePost(post.id!, newPost);
        return true;
      } catch (e) {
        setIsLoadingFalse();
        alert(e);
        return false;
      }
    } else {
      alert('User not logged in');
      return false;
    }
  };

  const onSave = async (blogPostForm: Partial<BlogPostFormType>) => {
    const newPost = formatPost(blogPostForm);
    const res = await addPostToFirebase(newPost);
    if (res) setIsLoadingFalse();
  };

  const onPublish: SubmitHandler<BlogPostFormType> = async formPost => {
    const newPost = formatPost(formPost, true);
    const res = await addPostToFirebase(newPost);
    if (res) {
      setIsLoadingFalse();
      setIsPostPublishedTrue();
    }
  };

  const onUnpublish = async () => {
    setIsLoadingTrue();
    await updatePostIsPublished(post.id!, false);
    setIsPostPublishedFalse();
    setIsLoadingFalse();
  };

  const onImageDelete = (imgUrl: string) => {
    const r = window.confirm(
      'Are you sure you want to delete the photo? You can\t undo this later.',
    );
    if (r) {
      deleteFile(imgUrl);
      deleteField(post.id!, 'featureImage');
      return true;
    }
    return false;
  };

  return (
    <Layout authorizationType="only_auth" title={`Edit Post - ${post.es.title}`}>
      <BlogPostForm
        onSave={onSave}
        onPublish={onPublish}
        onUnpublish={onUnpublish}
        onImageDelete={onImageDelete}
        isLoading={isLoading}
        initialPost={blogFormPost}
        isPostPublished={isPostPublished}
      />
    </Layout>
  );
};

AdminPost.getInitialProps = async ({ query }: Context) => {
  const { postId } = query;
  const post = await getPost(postId);
  return { post };
};

export default AdminPost;
