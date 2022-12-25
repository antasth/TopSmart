import styles from './ModalCard.module.scss'

const ModalCard = ({ isActive, toggleModal }) => {
  return (
    <div
      className={styles.overlay}
      style={isActive ? { display: 'block' } : { display: 'none' }}
      onClick={toggleModal}
    >
      <div className={styles.modalWrapper}>
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
         MODAL

      </div>

      </div>

    </div>
  )
}

export default ModalCard
