/* eslint-disable import/no-cycle */
import type { AuthorizationType } from './Authorization/Authorization';

import Authorization from './Authorization/Authorization';
import BlogMeta from './BlogMeta/BlogMeta';
import FloatingMenu from './FloatingMenu/FloatingMenu';
import Login from './Login/Login';
import Logo from './Logo/Logo';
import Modal from './Modal/Modal';
import Parallax from './Parallax/Parallax';
import Particles from './Particles/Particles';
import ScrollUp from './ScrollUp/ScrollUp';
import Section from './Section/Section';
import SectionFooter from './SectionFooter/SectionFooter';
import SlideElement from './SlideElement/SlideElement';
import Slider from './Slider/Slider';
import SocialIcons from './SocialIcons/SocialIcons';
import Spinner from './Spinner/Spinner';

// TODO: This fixes an ESLint crash. Find a better way to fix it.
export default null;

export {
  Authorization,
  BlogMeta,
  FloatingMenu,
  Login,
  Logo,
  Modal,
  Parallax,
  Particles,
  ScrollUp,
  Section,
  SectionFooter,
  SlideElement,
  Slider,
  SocialIcons,
  Spinner,
};

export type { AuthorizationType };
