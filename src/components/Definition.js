import styles from '@/styles/Definition.module.css'
import classNames from 'classnames'
import StaticLink from './StaticLink'

function Definition () {
  return (
    <div className={classNames(styles.definition, "d-flex flex-column mx-auto")}>
      <h2 className={classNames(styles.definitionName, "fw-bold")}>Eternal Optimist</h2>
      <p className="text-left">[eter·​nal op·​ti·​mist]</p>
      <p>a person who is always positive</p>
      <hr />
    </div>
  )
}

export default Definition
