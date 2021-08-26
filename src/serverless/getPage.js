import client from '@/utils/contentfulClient'

export async function getPage (entryId) {
  return await client.getEntry(entryId)
}

export async function getGenericPageBySlug (slug) {
  const genericPage = await client.getEntries({
    content_type: 'genericPage',
    'fields.slug': slug
  })

  return ctnEntryReducer(genericPage)
}

export async function getBlogEntryBySlug (slug) {
  const blogEntry = await client.getEntries({
    content_type: 'blogEntry',
    'fields.slug': slug
  })

  return ctnEntryReducer(blogEntry)
}

export async function getBlogEntriesByCategory (category) {
  const blogEntries = await client.getEntries({
    content_type: 'blogEntry',
    'fields.category': category
  })

  return ctnEntriesReducer(blogEntries)
}

export function ctnEntriesReducer (result) {
  return result?.items?.map(({ fields }) => fields) ?? null
}

export function ctnEntryReducer (result) {
  return result?.items?.[0]?.fields?.content ?? null
}

