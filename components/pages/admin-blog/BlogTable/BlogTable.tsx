import React, { useMemo } from 'react';
import { timestampToDateString } from '@/firebase/utils';
import { Table } from '../../../core';
import type { TableHeader, TableOptions } from '../../../core';
import type { PostDoc } from '@/types/firebase';

const header: TableHeader = [
  {
    title: 'TÍTULO',
    dataAttribute: 'title',
    align: 'left',
  },
  {
    title: 'FECHA CREACIÓN',
    dataAttribute: 'createdAt',
    width: 200,
  },
  {
    title: 'PUBLICADO',
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
        title: 'Editar',
        onClick: onEdit,
        icon: 'pencil',
        color: 'secondary',
      },
      {
        title: 'Eliminar',
        onClick: onDelete,
        icon: 'trash',
        color: 'danger',
      },
      {
        title: 'Publicar / Anular',
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
        isPublished: post.isPublished ? 'Si' : 'No',
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
