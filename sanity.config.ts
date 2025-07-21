'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
            // Regular document types
            ...S.documentTypeListItems().filter(
              listItem => !['aboutPage', 'homePage'].includes(listItem.getId()!)
            )
          ])
    }),
    visionTool(),
  ],
})
