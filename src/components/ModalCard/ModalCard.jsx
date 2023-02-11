import styles from './ModalCard.module.scss'

const ModalCard = ({ toggleModal, children }) => {
  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export { ModalCard }
