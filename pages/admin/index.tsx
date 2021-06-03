import React, { useState } from 'react';
import Router from 'next/router';
import { AdminLayout as Layout } from '@/components/layout';
import { Button, Spacer } from '@/components/core';
import { BlogTable } from '@/components/pages/admin-blog';
import { getPosts, updatePost, deletePost } from '@/firebase/posts';
import replaceElementInArray from '@/helpers/replaceElementInArray';
import type { NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';

type Props = {
  initialPosts: PostDoc[];
};

const Admin: NextPage<Props> = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  const onEdit = (index: number) => {
    const selectedPost = posts[index];
  };

  const onDelete= (index: number) => {
    const selectedPost = posts[index];
    const r = window.confirm(`¿Estás seguro de eliminar el curso ${selectedPost.titleEs}?`);
    if (r) {
      deletePost(selectedPost.id!);
      setPosts(posts.filter((post) => post.id !== selectedPost.id));
    }
  };

  const onPublish = (index: number) => {
    const selectedPost = posts[index];
    const published = !selectedPost.published;
    updatePost(selectedPost.id!, {
      published,
    });
    const editedPost = { ...selectedPost, published };
    const editedPosts = replaceElementInArray<PostDoc>(posts, selectedPost, editedPost);
    setPosts(editedPosts);
  };

  return (
    <Layout authorizationType="only_auth">
      <div className="container">
        <div className="button">
          <Button text="Nuevo Post" onClick={() => Router.push('/admin/blog/create')} />
        </div>
        <Spacer direction="vertical" size={2} />
        <BlogTable posts={posts} onPublish={onPublish} onDelete={onDelete} onEdit={onEdit} />
      </div>
      <style jsx>{`
        .button {
          margin-left: auto;
          width: fit-content;
        }
      `}</style>
    </Layout>
  );
};

Admin.getInitialProps = async () => {
  const posts = await getPosts();
  return { initialPosts: posts };
};

export default Admin;
