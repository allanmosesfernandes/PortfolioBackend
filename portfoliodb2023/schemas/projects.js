import { defineField, defineType } from "sanity";

export default defineType({
  name: 'Project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'Year',
      title: 'Year',
      type: 'date',
      description: 'Year of the project',
      //add validation so date is not greater than current date
      //with custom error message year cannot be greater than current year
        validation: Rule => Rule.max(new Date().getFullYear()).error('Please enter valid date')
    }),
    defineField({
        name: 'Title',
        title: 'Title',
        type: 'string',
        description: 'Title of the project',
        validation: Rule => Rule.required().min(10).max(50)
  ],
}) 