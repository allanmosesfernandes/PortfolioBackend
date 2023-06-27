import {codeInput} from '@sanity/code-input'

export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'CustomImage',
      options: {
        hotspot: true,
      },
    },
    {
        type: 'CustomCode',
    },
    
  ],
  validation: (Rule) => Rule.required().min(1).max(10),
}
