import { Checkbox } from '@chakra-ui/react'
import styles from './MassSelect.module.scss'

const MassSelect = ({allChecked, onChange}) => {

  return (
    <div className={styles.select}>
      <div className={styles.checkbox}>
        <Checkbox
          colorScheme='orange'
          isChecked={allChecked}
          onChange={onChange}
        >
          Выбрать все
        </Checkbox>
      </div>
      <div className={styles.delete}>Удалить выбранные</div>
    </div>
  )
}

export default MassSelect
