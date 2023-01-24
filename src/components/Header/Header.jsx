import { useContext } from 'react'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { BiUser, BiHeart } from 'react-icons/bi'
import { Logo } from '../UI/Logo/Logo'
import { slicePrice } from '../../Utils/PageFunctions'
import { CartContext } from '../../context/CartContext'
import styles from './Header.module.scss'

const Header = () => {
  const cart = useContext(CartContext)
  return (
    <header
      className={`${styles.header} flex justify-between py-1.5 h-50 mb-7 sticky top-0 z-10`}
    >
      <div className="flex items-center">
        <Logo />
      </div>

      <ul className="flex justify-between items-center mr-5">
        <li>
          <BsSearch className="icon" />
        </li>
        <li onClick={cart.toggleCart}>
          <BsCartPlus className="icon" />
          <span> {slicePrice(cart.fullPrice)} ₽.</span>
        </li>
        <li>
          <BiHeart className="icon" />
        </li>
        <li>
          <BiUser className="icon" />
        </li>
      </ul>
    </header>
  )
}

export { Header }
