import client from '@/utils/contentfulClient'

export async function getPage (entryId) {
  return await client.getEntry(entryId)
}

export async function getGenericPageBySlug (slug) {
  const genericPage = await client.getEntries({
    content_type: 'genericPage',
    'fields.slug': slug
  })

  return genericPageReducer(genericPage)
}

export function genericPageReducer (genericPage) {
  return genericPage?.items?.[0]?.fields?.content ?? {}
}

