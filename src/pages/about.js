import Navigation from "@/components/Navigation"
import { RICH_TEXT_RENDERER } from "@/constants";
import { getGenericPageBySlug } from "@/serverless/getPage"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

export default function About ({ content }) {
  const customOptions = {
    renderNode: {
      ...RICH_TEXT_RENDERER.renderNode,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const url = node?.data?.target?.fields?.file?.url ?? ''
        return <img className="rounded-circle mx-auto d-block mb-5 border border-dark" src={`https://${url}`} width={200} height={200}/>
      }
    }
  }

  const renderedReactComponents = documentToReactComponents(content, customOptions)

  return (
    <>
      <div className="w-50 mx-auto" style={{ marginTop: '10%', lineHeight: '50px' }}>
        {renderedReactComponents}
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const content = await getGenericPageBySlug('about')
  return {
    props: { content }
  }
}
