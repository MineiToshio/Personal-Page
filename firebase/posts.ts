/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';
import db from './db';
import { getFirstDocument } from './utils';
import type { PostDoc } from '@/types/firebase';

export const getPost = async (id: string) => {
  const snap = await db.posts.doc(id).get();
  const post = snap.data();
  if (post) {
    return {
      ...post,
      id: snap.id,
    };
  }
  return null;
};

export const getPostByUrl = async (url: string) => {
  const snap = await db.posts.where('url', '==', url).get();
  const post = getFirstDocument<PostDoc>(snap);
  return post;
};

export const getAnotherPostByUrl = async (id: string, url: string) => {
  const snap = await db.posts
    .where(firebase.firestore.FieldPath.documentId(), '!=', id)
    .where('url', '==', url)
    .get();
  const post = getFirstDocument(snap);
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

export const getPostsByIsPublished = async () => {
  const snap = await db.posts.where('isPublished', '==', true).orderBy('publishedAt', 'desc').get();
  const posts = snap.docs.map(doc => {
    const post = doc.data();
    return {
      ...post,
      id: doc.id,
    };
  });
  return posts;
};

export const createPost = async (post: PostDoc) => {
  if (post.url) {
    const postWithUrl = await getPostByUrl(post.url);
    if (postWithUrl) throw new Error('Invalid url');
  }

  const ref = await db.posts.add(post);
  return {
    ...post,
    id: ref.id,
  };
};

export const updatePostIsPublished = async (id: string, isPublished: boolean) => {
  if (isPublished) {
    const post = await getPost(id);
    if (post && post.en.title && post.en.content && post.es.title && post.es.content && post.url) {
      db.posts.doc(id).set({ isPublished: true }, { merge: true });
    } else {
      throw new Error('Post cannot be published cause it has missing data.');
    }
  } else {
    db.posts.doc(id).set({ isPublished: false }, { merge: true });
  }
};

export const updatePost = async (id: string, post: Partial<PostDoc>, merge = true) => {
  if (post.url) {
    const postWithUrl = await getAnotherPostByUrl(id, post.url);
    if (postWithUrl) throw new Error('Invalid url');
  }
  db.posts.doc(id).set(post, { merge });
};

export const deletePost = (id: string) => db.posts.doc(id).delete();

export const deleteField = (id: string, fieldToDelete: string) => {
  db.posts.doc(id).update({
    [fieldToDelete]: firebase.firestore.FieldValue.delete(),
  });
};
