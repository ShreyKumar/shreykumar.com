import { getBlogEntriesByCategory } from "@/serverless/getPage"

export default function Coding ({ blogEntries }) {
  return (
    <div className="w-75 mx-auto" style={{ marginTop: '7%' }}>
      <h1>Latest on Coding</h1>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const blogEntries = await getBlogEntriesByCategory('coding')

  console.log(blogEntries)

  return {
    props: { blogEntries }
  }
}