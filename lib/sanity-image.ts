import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity-client'

export const urlFor = (source: any) => createImageUrlBuilder(client).image(source)