import React, { FC } from 'react';
import NextLink from 'next/link';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import classNames from 'classnames';

type Props = {
  href: string;
  children: React.ReactNode | Array<React.ReactNode>;
  className?: string;
};

const I18nLink: FC<Props> = ({ href, children, className }) => {
  const { locale } = useTranslation('Link');
  const redirectLink = href === '/' ? '' : href;
  return (
    <>
      <NextLink
        href={`/[lang]${redirectLink}`}
        as={`/${locale}${redirectLink}`}
        className={classNames(className, 'link')}
      >
        {children}
      </NextLink>
      <style jsx>{`
        :global(.link) {
          text-decoration: none;
          color: ${theme.color.main};
          font-size: 15px;
        }
      `}</style>
    </>
  );
};

export default I18nLink;
