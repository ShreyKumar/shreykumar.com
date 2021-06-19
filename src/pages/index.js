import Head from 'next/head'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>eternaloptimist.life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">eternaloptimist.life</h1>
          <h2>The blog for optimists</h2>
          <div>
            <h2 className="fw-bold">Eternal Optimist</h2>
            <p className="text-left">[eter·​nal op·​ti·​mist]</p>
            <p>a person who is always positive</p>
          </div>
        </div>
      </main>
    </div>
  )
}
