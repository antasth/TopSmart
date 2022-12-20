import { FcTwoSmartphones } from 'react-icons/fc'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { BiUser, BiHeart } from 'react-icons/bi'

const Header = ({ toggleCart }) => {
  return (
    <header className="flex justify-between py-5 mb-7">
      <div className="flex items-center">
        <FcTwoSmartphones className="logo" />
        <div className="headerInfo">
          <h3 className="text-3xl font-bold">
            Top<span className="text-orange-400">Smart</span>
          </h3>
        </div>
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
