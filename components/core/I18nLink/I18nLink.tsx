import React, { FC } from 'react';
import NextLink from 'next/link';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';

type Props = {
  href: string;
  children: React.ReactNode | Array<React.ReactNode>;
};

const I18nLink: FC<Props> = ({ href, children }) => {
  const { locale } = useTranslation('Link');
  const redirectLink = href === '/' ? '' : href;
  return (
    <>
      <NextLink href={`/[lang]${redirectLink}`} as={`/${locale}${redirectLink}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{children}</a>
      </NextLink>
      <style jsx>{`
        a {
          text-decoration: none;
          color: ${theme.color.main};
          font-size: 15px;
        }
      `}</style>
    </>
  );
};

export default I18nLink;
