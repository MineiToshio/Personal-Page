/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';
import type { TableHeader, TableOptions } from './Table/Table';

import BrandButton from './BrandButton/BrandButton';
import Button from './Button/Button';
import I18nLink from './I18nLink/I18nLink';
import Icon from './Icon/Icon';
import ImageUpload from './ImageUpload/ImageUpload';
import Input from './Input/Input';
import Link from './Link/Link';
import Spacer from './Spacer/Spacer';
import Table from './Table/Table';
import Typography from './Typography/Typography';

const TextEditor = dynamic(() => import('./TextEditor/TextEditor'), { ssr: false });

// TODO: This fixes an ESLint crash. Find a better way to fix it.
export default null;

export {
  BrandButton,
  Button,
  I18nLink,
  Icon,
  ImageUpload,
  Input,
  Link,
  Spacer,
  Table,
  TextEditor,
  Typography,
};

export type { TableHeader, TableOptions };
