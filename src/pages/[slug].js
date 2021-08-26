import { getBlogEntryBySlug } from "@/serverless/getPage"

export default function BlogEntry ({ blogEntry }) {
  return <h1>{JSON.stringify(blogEntry)}</h1>
}

export async function getServerSideProps({ query }) {
  const { slug } = query

  const blogEntry = await getBlogEntryBySlug(slug)

  if (!blogEntry) {
    return { notFound: true }
  }

  return {
    props: { blogEntry }
  }
}
