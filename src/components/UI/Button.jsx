import styles from './Button.module.scss'

const Button = ({ children, buttonClass }) => {
  return (
    <button className={`${styles.button} ${styles[buttonClass]}`}>
      {children}
    </button>
  )
}

export default Button
