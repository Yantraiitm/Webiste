import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    }),
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
      group: 'hero',
    }),
    // Join CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'cta',
    }),
  ],
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'cta', title: 'Join CTA Section'},
  ],
})