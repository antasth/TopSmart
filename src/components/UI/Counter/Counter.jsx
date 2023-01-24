import styles from './Counter.module.scss'

const Counter = ({ children }) => {
  return <span className={styles.counter}>{children}</span>
}

export default Counter
