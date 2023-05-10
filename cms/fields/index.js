export const ID = { label: 'ID', name: 'id', widget: 'uuid' };

export const VariantField = (initial, options = []) => ({
  label: 'Variant',
  name: 'variant',
  widget: 'select',
  default: initial,
  options: options,
  required: false,
});

export const Button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'Content',
      name: 'content',
      widget: 'string',
      required: false,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      required: false,
    },
    VariantField('default', ['default', 'white', 'arrow', 'arrow-white', 'simple']),
  ],
};

export const Buttons = {
  label: 'Buttons',
  name: 'buttons',
  widget: 'list',
  required: false,
  fields: [Button],
};

export const Heading = {
  label: 'Heading',
  name: 'heading',
  widget: 'string',
  required: false,
};

export const RichEditor = {
  label: 'Rich Editor',
  name: 'rich_editor',
  widget: 'markdown',
  required: false,
};

export const Image = {
  label: 'Image',
  name: 'image',
  widget: 'image',
  required: false,
};

export const Images = {
  label: 'Images',
  name: 'images',
  widget: 'list',
  required: false,
  fields: [
    Image
  ],
};

export const Video = {
  label: 'Video',
  name: 'video',
  widget: 'string',
  required: false,
};

export const Intro = {
  label: 'Intro',
  name: 'intro',
  widget: 'object',
  required: false,
  fields: [
    Heading,
    RichEditor,
    Buttons,
  ],
}

export const Content = {
  label: 'Content',
  name: 'content',
  widget: 'object',
  required: false,
  fields: [
    Heading,
    RichEditor,
    Buttons,
  ],
}

export const List = {
  label: 'List',
  name: 'list',
  widget: 'list',
  required: false,
  fields: [
    VariantField('default', ['default', 'with-counter']),
    {
      label: 'List Item',
      name: 'list_item',
      widget: 'object',
      fields: [
        Heading,
        Content,
        Image,
      ],
    },
  ],
};

export const Tabs = {
  label: 'Tabs',
  name: 'tabs',
  widget: 'list',
  required: false,
  fields: [
    {
      label: 'Tab',
      name: 'tab',
      widget: 'object',
      fields: [
        Heading,
        Content,
        Image,
      ],
    },
  ],
};

export const Slider = {
  label: 'Slider',
  name: 'slider',
  widget: 'list',
  required: false,
  fields: [
      {
        label: 'Slide',
        name: 'slide',
        widget: 'object',
        required: false,
        fields: [
          Content,
          Image,
          {
            label: 'Slide List',
            name: 'slide_list',
            widget: 'object',
            required: false,
            fields: [
              List,
            ],
          },
        ],
      },
  ],
};

export const Testimonials = {
  label: 'Testimonials',
  name: 'testimonials',
  widget: 'list',
  required: false,
  fields: [
    {
      label: 'Testimonial',
      name: 'testimonial',
      widget: 'object',
      required: false,
      fields: [
        Image,
        {
          label: 'Testimonial',
          name: 'testimonial',
          widget: 'markdown',
          required: false,
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          required: false,
        },
        {
          label: 'Job Title',
          name: 'job_title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Company Name',
          name: 'company_name',
          widget: 'string',
          required: false,
        },
      ],      
    },
  ],
};

export const Team = {
  label: 'Team',
  name: 'team',
  widget: 'list',
  required: false,
  fields: [
    {
      label: 'Team Member',
      name: 'team_member',
      widget: 'object',
      fields: [
        Image,
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          required: false,
        },
        {
          label: 'Job Role',
          name: 'job_role',
          widget: 'string',
          required: false,
        },
        {
          label: 'LinkedIn',
          name: 'linkedin',
          widget: 'string',
          required: false,
        },
        {
          label: 'Bio',
          name: 'bio',
          widget: 'markdown',
          required: false,
        }
      ],
    },
  ],
};

export const Accordions = {
  label: 'Accordions',
  name: 'accordions',
  widget: 'list',
  required: false,
  fields: [
    {
      label: 'Accordion',
      name: 'Accordion',
      widget: 'object',
      fields: [
        Content,
      ],
    },
  ],
};

export const Vacancies = {
  label: 'Vacancies',
  name: 'vacancies',
  widget: 'list',
  required: false,
  fields: [
    {
      label: 'Vacancy',
      name: 'vacancy',
      widget: 'object',
      required: false,
      fields: [
        Heading,
        RichEditor,
        {
          label: 'Apply Link',
          name: 'apply_link',
          widget: 'string',
          required: false,
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
          required: false,
          fields: [
            Image,
            Heading,
          ]
        },
      ],      
    },
  ],
};