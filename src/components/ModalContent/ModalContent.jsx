import styles from './ModalContent.module.scss'

const ModalContent = ({ header, description, img }) => {
  return (
    <div className={styles.content}>
      <h2>{header}</h2>
      <div className={styles.description}>{description}</div>
      <img src={require(`../../assets/img/${img}.jpg`)} alt="img" />
    </div>
  )
}

export { ModalContent }
