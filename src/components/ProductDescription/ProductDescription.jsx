import styles from './ProductDescription.module.scss'

const ProductDescription = ({ device }) => {
  console.log(device)
  return (
    <div className={styles.description}>
      <h1 className={styles.header}>Характеристики</h1>
      <ul className={styles.devicespecs}>
        {device.more_specification.map((category) => (
          <>
            <h3>{category.title}</h3>
            {category.data.map((subcat) => (
              <li>
                {subcat.title}
                <span>{subcat.data.join(', ')}</span>
              </li>
            ))}
          </>
        ))}
      </ul>
    </div>
  )
}

export { ProductDescription }
