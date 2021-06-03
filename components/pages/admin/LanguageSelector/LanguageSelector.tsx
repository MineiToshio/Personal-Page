import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Typography, Spacer } from '@/components/core';
import theme from '@/styles/theme';
import { languageNames } from '@/i18n/config';
import type { Locale } from '@/types/i18n';

type Props = {
  onLanguageChange: (newLanguage: Locale) => void;
  language: Locale;
}

const LanguageSelector = ({ onLanguageChange, language }: Props) => (
  <div className="container">
    {Object.entries(languageNames).map((lang) => (
      <Fragment key={lang[0]}>
        <button
          type="button"
          onClick={() => onLanguageChange(lang[0] as Locale)}
          className={classnames({
            language: true,
            selected: language === lang[0],
          })
        }>
          <Typography text={lang[1]} color={language === lang[0] ? 'white' : 'dark'} />
        </button>
        <Spacer direction="horizontal" size={2} />
      </Fragment>
    ))}
    <style jsx>{`
      .contaier {
        display: flex;
      }
      .language {
        border-radius: 10px;
        cursor: pointer;
        padding: 8px 16px;
        border: 0;
      }
      .selected {
        background: ${theme.color.main};
      }
    `}</style>
  </div>
);

export default LanguageSelector;
