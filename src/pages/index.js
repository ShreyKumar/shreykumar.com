import Head from 'next/head'
import Definition from '@/components/Definition'
import StaticLink from '@/components/StaticLink'

export default function Home() {
  return (
    <>
      <Head>
        <title>eternaloptimist.life</title>
      </Head>
      <Definition />
      <div className="w-50 mx-auto">
        <StaticLink href="/about" className="mx-auto">Who exactly am I?</StaticLink>
      </div>
    </>
  )
}
