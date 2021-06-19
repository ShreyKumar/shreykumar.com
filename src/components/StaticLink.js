import Link from 'next/link'

function StaticLink ({ href, children, ...rest }) {
  return <Link href={href}><a {...rest}>{children}</a></Link>
}

export default StaticLink