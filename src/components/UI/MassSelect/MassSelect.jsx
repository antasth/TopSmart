import { Checkbox } from '@chakra-ui/react'
import styles from './MassSelect.module.scss'

const MassSelect = () => {
  return (
    <div className={styles.select}>
      <Checkbox colorScheme="orange">Выбрать все</Checkbox>
      <div className={styles.delete}>Удалить выбранные</div>
    </div>
  )
}

export default MassSelect
