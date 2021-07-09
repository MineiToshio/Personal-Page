import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { FlexContainer } from '@/components/core';
import { MainContainer } from '@/components/shared';
import useTranslation from '@/hooks/useTranslation';

type Props = {
  url: string;
  id: string;
  title: string;
};

const LANGUAGE = {
  en: 'en_EN',
  es: 'es_ES',
};

const Comments = ({ url, id, title }: Props) => {
  const { locale } = useTranslation('');

  return (
    <MainContainer>
      <FlexContainer centered fullWidth>
        <div className="comments">
          <DiscussionEmbed
            shortname={process.env.DISQUS_SHORTNAME!}
            config={{
              url,
              identifier: id,
              title,
              language: LANGUAGE[locale],
            }}
          />
        </div>
      </FlexContainer>
      <style jsx>{`
        .comments {
          max-width: 700px;
          width: 100%;
        }
      `}</style>
    </MainContainer>
  );
};

export default Comments;
