import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.loader__wrapper}>
      <div className={classes.load}>
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  )
}

export default Loader
