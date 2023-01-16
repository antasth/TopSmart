import styles from './ModalCard.module.scss'
import Gallery from '../Gallery/Gallery'


const ModalCard = ({ toggleModal }) => {
  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
          {/* <Gallery/> */}
        </div>
      </div>
    </div>
  )
}

export default ModalCard
