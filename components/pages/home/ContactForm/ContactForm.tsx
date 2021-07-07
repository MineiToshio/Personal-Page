import React, { FC } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { SlideElement, MainContainer } from '@/components/shared';
import { Icon } from '@/components/core';

const ContactForm: FC = () => {
  const { t } = useTranslation('ContactForm');
  return (
    <MainContainer centered>
      <form
        className="contact"
        action="https://formsubmit.co/21b37449ee460882bde6e52feb240178 "
        method="POST"
      >
        <SlideElement animation="slide-in-left">
          <input type="text" placeholder={t('name')} name="name" />
          <input type="email" placeholder={t('email')} name="email" />
          <input type="text" placeholder={t('subject')} name="subject" />
        </SlideElement>
        <SlideElement animation="slide-in-right">
          <textarea name="message" id="" cols={30} placeholder="Message" />
          <button type="submit">
            <Icon icon="envelope" />
          </button>
        </SlideElement>
      </form>
      <style jsx>{`
        .contact {
          display: grid;
          grid-template-columns: 1fr;
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
          width: 100%;
        }
        button:hover {
          filter: brightness(85%);
        }
        input,
        textarea {
          cursor: auto;
          width: calc(100% - 16px);
          padding: 20px 8px;
          border: 1px solid ${theme.color.border};
          font-family: ${theme.font.family.default};
          font-size: 18px;
          margin-bottom: 16px;
          color: ${theme.color.dark};
        }
        textarea {
          height: 110px;
        }
        @media only screen and ${theme.breakpoint.smUp} {
          .contact {
            grid-template-columns: 1fr 1fr;
            grid-gap: 16px;
          }
        }
      `}</style>
    </MainContainer>
  );
};

export default ContactForm;
