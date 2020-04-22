import React, { FC } from 'react'
import NextLink from 'next/link'
import useTranslation from '../../hooks/useTranslation'

type Props = {
  href: string,
  children: React.ReactNode | Array<React.ReactNode>
}

const Link: FC<Props> = ({ href, children }) => {
  const { locale } = useTranslation('Link')
  return (
    <NextLink href={`/[lang]${href}`} as={`/${locale}${href}`}>
      {children}
    </NextLink>
  )
}

export default Link;