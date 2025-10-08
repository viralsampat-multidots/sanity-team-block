import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "ailxqglr",   // from sanity.json or manage.sanity.io
  dataset: "production",          // or your dataset name
  apiVersion: "2023-01-01",       // use current date
  useCdn: true,                   // set to false if you need latest data always
})
