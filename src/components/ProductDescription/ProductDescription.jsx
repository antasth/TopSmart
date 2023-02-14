import styles from './ProductDescription.module.scss'

const ProductDescription = ({ device, scrollRef }) => {
  return (
    <div className={styles.description}>
      <h1 ref={scrollRef} className={styles.header}>
        Характеристики
      </h1>
      <ul className={styles.devicespecs}>
        {device.more_specification.map((category) => (
          <div key={category.title}>
            <h3>{category.title}</h3>
            {category.data.map((subcat) => (
              <li key={subcat.title}>
                {subcat.title}
                <span>{subcat.data.join(', ')}</span>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  )
}

export { ProductDescription }
