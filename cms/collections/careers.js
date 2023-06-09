import { PermalinkField } from '../fields/permalink-field';
import seo from '../fields/seo';
import { ID } from '../fields';

const collection = {
  name: 'careers',
  label: 'Careers',
  editor: {
    preview: false,
  },
  description: 'Careers collection',
  folder: 'content/careers',
  slug: '{{slug}}',
  summary:
    "{{title}} - {{date | date('YYYY-MM-DD')}} – {{body | truncate(40, '***')}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'post',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'career-single',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    PermalinkField('careers'),
    {
      label: 'Featured Image',
      name: 'thumbnail',
      widget: 'image',
      default: '',
      required: false,
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      widget: 'markdown',
      default: '',
      required: false,
    },
    {
      label: 'Location',
      name: 'location',
      widget: 'string',
      default: '',
      required: false,
    },
    {
      label: 'Hours',
      name: 'hours',
      widget: 'string',
      default: '',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default collection;
