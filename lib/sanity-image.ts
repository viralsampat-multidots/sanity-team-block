import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from './sanity-client'

export const urlFor = (source: Image) => createImageUrlBuilder(client).image(source)
