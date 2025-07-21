import { type SchemaTypeDefinition } from 'sanity'
import { courseType } from './courseType'
import { postType } from './postType'
import { authorType } from './authorType'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { projectType } from './projectType'
import { eventType } from './eventType'
import { galleryImageType } from './galleryImageType'
import { aboutPageType } from './aboutPageType'
import { valueType } from './valueType'
import { teamMemberType } from './teamMemberType'
import { homePageType } from './homePageType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType, postType, authorType, categoryType, blockContentType, projectType, eventType, galleryImageType, aboutPageType, valueType, teamMemberType, homePageType], 
}
