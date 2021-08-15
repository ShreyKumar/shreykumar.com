import StaticLink from '@/components/StaticLink'
import styles from '@/styles/Navigation.module.css'

function Navigation() {
  return (
    <nav>
      <ul className="d-flex justify-content-between align-items-center px-4 py-2">
        <StaticLink href="/" className="fs-4" disableUnderline>eternaloptimist.life</StaticLink>
        <StaticLink href="/about" disableUnderline>about</StaticLink>
        <StaticLink href="/coding" disableUnderline>coding</StaticLink>
        <StaticLink href="/self-development" disableUnderline>self-development</StaticLink>
        <StaticLink href="/philosophy" disableUnderline>philosophy</StaticLink>
        <StaticLink href="/psychology" disableUnderline>psychology</StaticLink>
      </ul>
    </nav>
  )
}

export default Navigation