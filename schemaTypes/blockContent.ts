import {defineType} from 'sanity'

export default defineType({
  name: 'blockContent',
  title: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading', value: 'h3'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [{title: 'Bold', value: 'strong'}],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
  ],
})
