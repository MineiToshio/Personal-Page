import type { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

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
  | 'save'
  | 'twitter'
  | 'facebookSquare'
  | 'github'
  | 'instagram'
  | 'linkedin';

const icons: Record<Icon, [IconPrefix, IconName]> = Object.freeze({
  calendar: ['far', 'calendar'],
  clock: ['far', 'clock'],
  commentDots: ['far', 'comment-dots'],
  envelope: ['far', 'envelope'],
  thumbsUp: ['fas', 'thumbs-up'],
  eye: ['fas', 'eye'],
  bars: ['fas', 'bars'],
  times: ['fas', 'times'],
  caretDown: ['fas', 'caret-down'],
  signOut: ['fas', 'sign-out-alt'],
  chevronLeft: ['fas', 'chevron-left'],
  chevronRight: ['fas', 'chevron-right'],
  quoteLeft: ['fas', 'quote-left'],
  quoteRight: ['fas', 'quote-right'],
  angleUp: ['fas', 'angle-up'],
  globeAmericas: ['fas', 'globe-americas'],
  user: ['fas', 'user'],
  pencil: ['fas', 'pencil-alt'],
  trash: ['fas', 'trash-alt'],
  spinner: ['fas', 'spinner'],
  upload: ['fas', 'upload'],
  save: ['fas', 'save'],
  twitter: ['fab', 'twitter'],
  facebookSquare: ['fab', 'facebook-square'],
  github: ['fab', 'github'],
  instagram: ['fab', 'instagram'],
  linkedin: ['fab', 'linkedin'],
});

export default icons;
