// import { FcTwoSmartphones } from 'react-icons/fc'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { BiUser, BiHeart } from 'react-icons/bi'
import styles from './Header.module.scss'
import Logo from '../UI/Logo/Logo'

const Header = ({ toggleCart }) => {
  return (
    <header className={`${styles.header} flex justify-between py-3 mb-7`}>
      <div className="flex items-center">
        <Logo />
      </div>

      <ul className="flex justify-between items-center mr-5">
        <li>
          <BsSearch className="icon" />
        </li>
        <li>
          <BsCartPlus className="icon" onClick={toggleCart} />
          <span> 9999 ₽.</span>
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

export default Header
