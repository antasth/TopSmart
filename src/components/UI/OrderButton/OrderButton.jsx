import styles from './OrderButton.module.scss'

const OrderButton = ({ children }) => {
  return <button className={styles.orderbutton}>{children}</button>
}

export { OrderButton }
