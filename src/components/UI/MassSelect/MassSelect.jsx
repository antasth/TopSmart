import { Checkbox } from '@chakra-ui/react'
import styles from './MassSelect.module.scss'

const MassSelect = () => {
  const selectAll = () => {
    const allCheckboxes = document.querySelectorAll('#checkbox')
    console.log(allCheckboxes)
   //  allCheckboxes.forEach((checkbox) => {
   //    checkbox.isChecked = true
   //    checkbox.checked = true
   //  })
  }
  return (
    <div className={styles.select}>
      <div className={styles.checkbox} onClick={selectAll}>
        <Checkbox colorScheme="orange">Выбрать все</Checkbox>
      </div>
      <div className={styles.delete}>Удалить выбранные</div>
    </div>
  )
}

export default MassSelect
