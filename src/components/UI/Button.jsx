import styles from './Button.module.scss'

const Button = ({ children, buttonClass, isHover }) => {
  return (
    <button
      className={`${styles.button} ${styles[buttonClass]} ${
        isHover ? styles[buttonClass + 'ActiveCard'] : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
