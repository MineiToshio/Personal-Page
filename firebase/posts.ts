/* eslint-disable import/prefer-default-export */
import db from './db';
import type { PostDoc } from '@/types/firebase';

export const getPostByUrl = async (url: string) => {
  const snap = await db.posts.where('url', '==', url).get();
  if (snap.docs.length === 0) return null;
  const doc = snap.docs[0];
  const data = doc.data();
  const post = { id: doc.id, ...data };
  return post;
};

export const getPosts = async () => {
  const snap = await db.posts.get();
  const posts = snap.docs.map(doc => {
    const post = doc.data();
    return {
      ...post,
      id: doc.id,
    };
  });                                
  return posts;
};

export const createPost = async (post: Omit<PostDoc, 'id'>) => {
  const postWithUrl = await getPostByUrl(post.url);

  if (postWithUrl) throw new Error('Invalid url');

  const ref = await db.posts.add(post);
  return {
    ...post,
    id: ref.id,
  };
};

export const updatePost = (id: string, post: Partial<PostDoc>, merge = true) =>
  db.posts.doc(id).set(post, { merge });

export const deletePost = (id: string) => db.posts.doc(id).delete();