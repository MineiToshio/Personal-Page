import React from 'react';
import Link from 'next/link';

export type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  href: string;
};

const InternalLink = ({ href, children }: Props) => (
  <>
    <Link href={href} className="link">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {children}
    </Link>
    <style jsx>{`
      :global(.link) {
        text-decoration: none;
      }
    `}</style>
  </>
);

export default InternalLink;
