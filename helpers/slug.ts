import slugify from 'slugify';

export default function slug(name: string) {
  return slugify(name, { lower: true }).replace(/[^\w\-]+/g, '');
}
