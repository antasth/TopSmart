import styles from './Button.module.scss'

const Button = ({ children, buttonClass, isCardHover }) => {
  return (
    <button
      className={`${styles.button} ${styles[buttonClass]} ${
        isCardHover ? styles[buttonClass + 'ActiveCard'] : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
