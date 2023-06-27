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
        type: 'code',
        options: {
            withFilename: true,
            languageAlternatives: [
                {title: 'JavaScript', value: 'javascript'},
                {title: 'HTML', value: 'html'},
                {title: 'CSS', value: 'css'},
            ]
        }
    },
  ],
  validation: (Rule) => Rule.required().min(1).max(10),
}
