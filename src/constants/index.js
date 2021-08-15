import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image'

export const RICH_TEXT_RENDERER = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = node?.data?.target?.fields?.file?.url ?? ''
      return <Image src={`https://${url}`} layout="fill" />
    }
  }
}
