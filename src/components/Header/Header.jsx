// import { FcTwoSmartphones } from 'react-icons/fc'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { BiUser, BiHeart } from 'react-icons/bi'
import styles from './Header.module.scss'

const Header = ({ toggleCart }) => {
  return (
    <header className={`${styles.header} flex justify-between py-3 mb-7`}>
      <div className="flex items-center">
        {/* <img src='../assets/img/logo2.png' alt='logo'></img> */}
        <img src={require('../../assets/img/logo2.png')} alt='logo' width={170} className='ml-5'></img>
        {/* <FcTwoSmartphones className="logo" />
        <div className="headerInfo">
          <h3 className="text-3xl font-extrabold leading-7">
            Top<span className="text-orange-400"><br/>Smart</span>
          </h3>
        </div> */}
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
