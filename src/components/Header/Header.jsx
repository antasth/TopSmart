import { useContext } from 'react'
import { BiHeart } from 'react-icons/bi'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { RiBarChartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { FavContext } from '../../context/FavContext'
import { slicePrice } from '../../Utils/PageFunctions'
import { Counter } from '../UI/Counter/Counter'
import { Logo } from '../UI/Logo/Logo'
import styles from './Header.module.scss'

const Header = () => {
  const cart = useContext(CartContext)
  const fav = useContext(FavContext)

  return (
    <header
      className={`${styles.header} flex justify-between py-1.5 h-50  sticky top-0 z-10`}
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
        <li>
          <Link to="/compare">
            <RiBarChartFill className="icon" />
          </Link>
        </li>
        <li onClick={cart.toggleCart} className="relative">
          <BsCartPlus className="icon " />
          <Counter>{cart.cartItems.length}</Counter>
          <span> {slicePrice(cart.fullPrice)} ₽.</span>
        </li>
        <li className="relative">
          <Link to="/favorites">
            <BiHeart className="icon" />
            <Counter>{fav.favItems.length}</Counter>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export { Header }
