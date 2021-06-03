import React, { useMemo } from 'react';
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
    title: 'PUBLICADO',
    dataAttribute: 'published',
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
        published: post.published ? 'Si' : 'No',
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
