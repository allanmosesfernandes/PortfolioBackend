import { defineField, defineType } from "sanity";

export default defineType({
    name: 'Blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'Title',
            title: 'Title',
            type: 'string',
            description: 'Title of the blog',
            validation: Rule => Rule.required().min(10)
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'Slug of the blog',
            options: {
                source: 'Title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            title: 'Published Date',
            name: 'publishedDate',
            type: 'datetime',
            description: 'Published date of the blog',
            validation: Rule => Rule.required()
        }),
        defineField({
            title: 'Cover Image',
            name: 'coverImage',
            type: 'image',
            description: 'Cover image of the blog',
            options: {
                hotspot: true
            }, 
            validation: Rule => Rule.required()
        }),
        

    ],
})
