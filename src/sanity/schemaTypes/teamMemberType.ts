// filepath: e:\code\code\iitm\Webiste\src\sanity\schemaTypes\teamMemberType.ts
import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          {title: 'Leadership', value: 'Leadership'},
          {title: 'Technical Team', value: 'Technical Team'},
          {title: 'Creative Team', value: 'Creative Team'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})