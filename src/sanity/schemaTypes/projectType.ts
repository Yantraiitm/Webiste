import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author(s)',
      description: 'Name of the student or team who created the project.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Robotics', value: 'Robotics'},
          {title: 'IoT', value: 'IoT'},
          {title: 'AI/ML', value: 'AI/ML'},
          {title: 'Web Dev', value: 'Web Dev'},
          {title: 'App Dev', value: 'App Dev'},
        ],
        layout: 'radio',
      },
      initialValue: 'Robotics',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'Completed'},
          {title: 'In Progress', value: 'In Progress'},
          {title: 'Planned', value: 'Planned'},
        ],
        layout: 'radio',
      },
      initialValue: 'Completed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      description: 'Enable this to feature the project on the projects page slider.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility.',
          },
        ],
      }],
      validation: (Rule) => Rule.min(1).error('At least one image is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'images.0.asset',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})