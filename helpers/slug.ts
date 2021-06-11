import slugify from 'slugify';

const slug = (name: string) => slugify(name, { lower: true }).replace(/[^\w-]+/g, '')

export default slug;
