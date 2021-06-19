import Link from 'next/link'
import styles from '@/styles/StaticLink.module.css'

function StaticLink ({ href, disableUnderline, children, ...rest }) {
  return (
    <div className="d-inline-block">
      <Link href={href}>
        <a {...rest}>
          {children}
          { !disableUnderline && <div className={styles.underline} />}
        </a>
      </Link>
    </div>
  )
}

export default StaticLink