import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export type Icon =
  | 'eye'
  | 'calendar'
  | 'clock'
  | 'commentDots'
  | 'envelope'
  | 'thumbsUp'
  | 'bars'
  | 'times'
  | 'caretDown'
  | 'signOut'
  | 'chevronLeft'
  | 'chevronRight'
  | 'quoteLeft'
  | 'quoteRight'
  | 'angleUp'
  | 'globeAmericas'
  | 'user'
  | 'pencil'
  | 'trash'
  | 'spinner'
  | 'upload'
  | 'check'
  | 'save'
  | 'plus'
  | 'twitter'
  | 'facebookSquare'
  | 'github'
  | 'instagram'
  | 'linkedin';

const icons: Record<Icon, IconDefinition> = Object.freeze({
  calendar: icon({ name: 'calendar', style: 'regular' }),
  clock: icon({ name: 'clock', style: 'regular' }),
  commentDots: icon({ name: 'comment-dots', style: 'regular' }),
  envelope: icon({ name: 'envelope', style: 'regular' }),
  thumbsUp: icon({ name: 'thumbs-up', style: 'solid' }),
  eye: icon({ name: 'eye', style: 'solid' }),
  bars: icon({ name: 'bars', style: 'solid' }),
  times: icon({ name: 'times', style: 'solid' }),
  caretDown: icon({ name: 'caret-down', style: 'solid' }),
  signOut: icon({ name: 'sign-out-alt', style: 'solid' }),
  chevronLeft: icon({ name: 'chevron-left', style: 'solid' }),
  chevronRight: icon({ name: 'chevron-right', style: 'solid' }),
  quoteLeft: icon({ name: 'quote-left', style: 'solid' }),
  quoteRight: icon({ name: 'quote-right', style: 'solid' }),
  angleUp: icon({ name: 'angle-up', style: 'solid' }),
  globeAmericas: icon({ name: 'globe-americas', style: 'solid' }),
  user: icon({ name: 'user', style: 'solid' }),
  pencil: icon({ name: 'pencil-alt', style: 'solid' }),
  trash: icon({ name: 'trash-alt', style: 'solid' }),
  spinner: icon({ name: 'spinner', style: 'solid' }),
  upload: icon({ name: 'upload', style: 'solid' }),
  check: icon({ name: 'check', style: 'solid' }),
  save: icon({ name: 'save', style: 'solid' }),
  plus: icon({ name: 'plus', style: 'solid' }),
  twitter: icon({ name: 'twitter', style: 'brands' }),
  facebookSquare: icon({ name: 'facebook-square', style: 'brands' }),
  github: icon({ name: 'github', style: 'brands' }),
  instagram: icon({ name: 'instagram', style: 'brands' }),
  linkedin: icon({ name: 'linkedin', style: 'brands' }),
});

export default icons;
