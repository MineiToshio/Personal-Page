import React, { useMemo } from 'react';
import { timestampToDateString } from '@/firebase/utils';
import type { PostDoc } from '@/types/firebase';
import { Table } from '../../../core';
import type { TableHeader, TableOptions } from '../../../core';

const header: TableHeader = [
  {
    title: 'TITLE',
    dataAttribute: 'title',
    align: 'left',
  },
  {
    title: 'CREATED AT',
    dataAttribute: 'createdAt',
    width: 200,
  },
  {
    title: 'PUBLISH',
    dataAttribute: 'isPublished',
    width: 150,
  },
];

export type Props = {
  posts: PostDoc[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onPublish: (index: number) => void;
};

const BlogTable = ({ posts, onEdit, onDelete, onPublish }: Props) => {
  const options: TableOptions = useMemo(
    () => [
      {
        title: 'Edit',
        onClick: onEdit,
        icon: 'pencil',
        color: 'secondary',
      },
      {
        title: 'Delete',
        onClick: onDelete,
        icon: 'trash',
        color: 'danger',
      },
      {
        title: 'Publish / Unpublish',
        onClick: onPublish,
        icon: 'upload',
        color: 'main',
      },
    ],
    [onEdit, onDelete, onPublish],
  );

  const datasource = useMemo(
    () =>
      posts.map(post => ({
        id: post.id,
        title: post.es.title,
        createdAt: timestampToDateString(post.createdAt, 'es'),
        isPublished: post.isPublished ? 'Yes' : 'No',
      })),
    [posts],
  );

  return (
    <Table
      datasource={datasource}
      header={header}
      showRowNumber
      datasourceKeyAttribute="id"
      options={options}
    />
  );
};

export default BlogTable;
