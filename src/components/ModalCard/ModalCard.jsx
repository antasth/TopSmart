import styles from './ModalCard.module.scss'

const ModalCard = ({ toggleModal }) => {
  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
          MODAL
        </div>
      </div>
    </div>
  )
}

export default ModalCard
