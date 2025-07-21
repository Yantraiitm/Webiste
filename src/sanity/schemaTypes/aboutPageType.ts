// filepath: e:\code\code\iitm\Webiste\src\sanity\schemaTypes\aboutPageType.ts
import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'About Page',
      readOnly: true,
    }),
    // Our Story Section
    defineField({
      name: 'storyTitle',
      title: 'Story Section Title',
      type: 'string',
      group: 'story',
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'story',
    }),
    defineField({
      name: 'storyImage',
      title: 'Story Image',
      type: 'image',
      options: {hotspot: true},
      group: 'story',
    }),
    // Our Mission Section
    defineField({
      name: 'missionTitle',
      title: 'Mission Section Title',
      type: 'string',
      group: 'mission',
    }),
    defineField({
      name: 'missionContent',
      title: 'Mission Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'mission',
    }),
    defineField({
      name: 'missionImage',
      title: 'Mission Image',
      type: 'image',
      options: {hotspot: true},
      group: 'mission',
    }),
    // Our Values Section
    defineField({
      name: 'values',
      title: 'Our Core Values',
      type: 'array',
      of: [{type: 'value'}],
      group: 'values',
    }),
    // Our Team Section
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'teamMember'}],
      group: 'team',
    }),
  ],
  groups: [
    {name: 'story', title: 'Our Story'},
    {name: 'mission', title: 'Our Mission'},
    {name: 'values', title: 'Our Values'},
    {name: 'team', title: 'Our Team'},
  ],
})