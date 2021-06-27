import React from 'react';
import Link from 'next/link';

export type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  href: string;
};

const InternalLink = ({ href, children }: Props) => (
  <>
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{children}</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </>
);

export default InternalLink;
