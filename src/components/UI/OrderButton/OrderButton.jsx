import styles from './OrderButton.module.scss'

const OrderButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.orderbutton}>
      {children}
    </button>
  )
}

export { OrderButton }
