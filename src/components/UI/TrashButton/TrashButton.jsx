import { Tooltip } from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'
import styles from './TrashButton.module.scss'

const TrashButton = ({ onClick }) => {
  return (
    <>
      <Tooltip
        label={'Удалить из сравнения'}
        aria-label="A tooltip"
        bg="var(--dark-blue)"
        color="var(--white)"
        padding={4}
        borderRadius={10}
        placement="top"
        openDelay={200}
        closeOnClick={false}
      >
        <button className={styles.trashButton} onClick={onClick}>
          <BsTrash />
        </button>
      </Tooltip>
    </>
  )
}

export { TrashButton }
