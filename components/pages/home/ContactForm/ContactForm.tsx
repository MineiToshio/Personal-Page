import React, { FC } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { SlideElement } from '../../../shared';
import { Icon } from '../../../core';

const ContactForm: FC = () => {
  const { t } = useTranslation('ContactForm');
  return (
    <form
      className="contact"
      action="https://formsubmit.co/21b37449ee460882bde6e52feb240178 "
      method="POST"
    >
      <SlideElement animation="slide-in-left">
        <input type="email" placeholder={t('email')} name="email" />
        <input type="text" placeholder={t('subject')} name="subject" />
        <input type="text" placeholder={t('name')} name="name" />
      </SlideElement>
      <SlideElement animation="slide-in-right">
        <textarea name="message" id="" cols={30} rows={5} placeholder="Message" />
        <button type="submit">
          <Icon icon="envelope" />
        </button>
      </SlideElement>
      <style jsx>{`
        .contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        input,
        textarea,
        button {
          outline: none;
          cursor: pointer;
          border-radius: 5px;
        }
        button {
          padding: 0 8px;
          border: 0 none;
          color: ${theme.color.white};
          height: 56px;
          background-color: ${theme.color.main};
          transition: all 0.2s;
          font-size: 24pt;
          font-weight: bold;
          margin: 2px 5px;
          width: calc(100% - 10px);
        }
        button:hover {
          filter: brightness(85%);
        }
        input,
        textarea {
          cursor: auto;
          width: calc(100% - 28px);
          margin: 5px;
          padding: 20px 8px;
          border: 1px solid #e8e8e8;
          font-family: ${theme.font.family.default};
          font-size: 13px;
          color: ${theme.color.dark};
        }
        textarea {
          height: 82px;
        }
        @media only screen and (max-width: 600px) {
          .contact {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
