import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { BiUser, BiHeart } from 'react-icons/bi'
import { Logo } from '../UI/Logo/Logo'
import Counter from '../UI/Counter/Counter'
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
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <ul className="flex justify-between items-center mr-5">
        <li>
          <BsSearch className="icon" />
        </li>
        <li onClick={cart.toggleCart} className="relative">
          <BsCartPlus className="icon " />
          <Counter>{cart.cartItems.length}</Counter>
          <span> {slicePrice(cart.fullPrice)} ₽.</span>
        </li>
        <li>
          <Link to="/favorites">
            <BiHeart className="icon" />
          </Link>
        </li>
        <li>
          <BiUser className="icon" />
        </li>
      </ul>
    </header>
  )
}

export { Header }
