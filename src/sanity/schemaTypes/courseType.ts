import {defineField, defineType} from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
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
      name: 'instructor',
      title: 'Instructor',
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
          {title: 'Bot', value: 'Bot'},
          {title: 'Robotic Arm', value: 'Robotic Arm'},
          {title: 'Drone', value: 'Drone'},
          {title: 'Microcontroller', value: 'Microcontroller'},
          {title: 'ROS', value: 'ROS'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Course',
      description: 'Enable this to feature the course on the main courses page.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sessions',
      title: 'Sessions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'session',
          fields: [
            {name: 'name', type: 'string', title: 'Session Name', validation: (Rule) => Rule.required()},
            {name: 'date', type: 'date', title: 'Session Date'},
            {name: 'link', type: 'url', title: 'Video Link (e.g., YouTube)'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      instructor: 'instructor',
      media: 'mainImage',
    },
    prepare(selection) {
      const {instructor} = selection
      return {...selection, subtitle: instructor && `by ${instructor}`}
    },
  },
})