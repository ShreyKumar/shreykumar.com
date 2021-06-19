import StaticLink from '@/components/StaticLink'
import styles from '@/styles/Navigation.module.css'

function Navigation() {
  return (
    <nav>
      <ul className="d-flex justify-content-between align-items-center px-4 py-2">
        <StaticLink href="/" className="fs-4">eternaloptimist.life</StaticLink>
        <StaticLink href="/about">about</StaticLink>
        <StaticLink href="/coding">coding</StaticLink>
        <StaticLink href="/philosophy">philosophy</StaticLink>
        <StaticLink href="/psychology">psychology</StaticLink>
      </ul>
    </nav>
  )
}

export default Navigation