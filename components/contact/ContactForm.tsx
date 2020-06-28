import React, { FC } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import TrackVisibility from 'react-on-screen';
import useTranslation from '../../hooks/useTranslation';

const ContactForm: FC = () => {
  const { t } = useTranslation('ContactForm');
  return (
    <form
      className="contact"
      action="https://formsubmit.co/21b37449ee460882bde6e52feb240178 "
      method="POST"
    >
      <TrackVisibility once>
        {({ isVisible }) => (
          <div className={isVisible ? 'slide-in-left' : 'invisible'}>
            <input type="email" placeholder={t('email')} name="email" />
            <input type="text" placeholder={t('subject')} name="subject" />
            <input type="text" placeholder={t('name')} name="name" />
          </div>
        )}
      </TrackVisibility>

      <TrackVisibility once>
        {({ isVisible }) => (
          <div className={isVisible ? 'slide-in-right' : 'invisible'}>
            <textarea name="message" id="" cols={30} rows={5} placeholder="Message" />
            <button type="submit">
              <FA icon={['far', 'envelope']} />
            </button>
          </div>
        )}
      </TrackVisibility>

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
          padding: 10px 8px;
          border: 0 none;
          color: #fff;
          height: 56px;
          background-color: var(--green);
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
          font-family: 'Open Sans', sans-serif;
          font-size: 13px;
          color: var(--black);
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
