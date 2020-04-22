import React, { FC } from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import useTranslation from '../../hooks/useTranslation'

type Props = {
  createdAt: string,
  commentQty: number,
  readingTime: number,
}

const BlogMeta: FC<Props> = ({ createdAt, commentQty, readingTime }) => {
  const { t } = useTranslation('BlogMeta')
  return (
    <div className="blog-meta">
      <span><FA icon={['far', "calendar"]} /> { createdAt }</span>
      <span><FA icon={['far', "clock"]} /> {readingTime} {t('minRead')}</span>
      <span><FA icon={['far', "comment-dots"]} /> {commentQty} {t('comments')}</span>

      <style jsx>{`
        .blog-meta {
          grid-area: meta;
          font-size: 14px;
          color: #8f8f8f;
        }
        .blog-meta > * {
          margin-right: 15px;
        }
      `}</style>
    </div>
  )
}

export default BlogMeta