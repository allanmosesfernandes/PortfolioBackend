import {Preview} from 'sanity'

export default {
  name: 'Categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the category',
      validation: (Rule) => Rule.required().min(3).max(20),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug of the category',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'customImage',
      title: 'Custom Image',
      type: 'CustomImage',
      description: 'Custom image of the category',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the category',
      validation: (Rule) => Rule.required().min(10).max(100),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'customImage',
      description: 'description',
    },
    prepare({title, media, description}) {
        return {
            title: title,
            media: media,
            subtitle: description,
        }
        }
  },
}
