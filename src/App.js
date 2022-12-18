import { FcTwoSmartphones } from 'react-icons/fc'
import { BsCartPlus, BsSearch, BsX } from 'react-icons/bs'
import { BiUser, BiHeart } from 'react-icons/bi'
import { FaPlusCircle } from 'react-icons/fa'

function App() {
  return (
    <div className="wrapper relative">
      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer flex flex-col justify-between">
          <div className="cart">
            <h2 className="mb-5">Корзина</h2>
            <div className="cartItems ">
              <div className="cartItem flex justify-between items-center mb-3">
                <img width={70} src={require('./img/1.jpg')} alt="phone" />
                <div>
                  <p>POCO M4 Pro 4G 256 ГБ</p>
                  <b>15 999 ₽</b>
                </div>
                <button className="button grayButton">
                  <BsX />
                </button>
              </div>
              <div className="cartItem flex justify-between items-center mb-3">
                <img width={70} src={require('./img/1.jpg')} alt="phone" />
                <div>
                  <p>POCO M4 Pro 4G 256 ГБ</p>
                  <b>15 999 ₽</b>
                </div>
                <button className="button grayButton">
                  <BsX />
                </button>
              </div>
            </div>
          </div>

          <div className="fullprice flex flex-col">
            <div className="fullprice__info flex justify-between mb-4">
              <div className="fullprice__text">
                <span className="text-sm opacity-70">Итого: </span>
                <div className="font-bold text-xl leading-4 ">1 товар</div>
              </div>

              <div className="fullprice__sum text-right">
                <div className="price__default text-sm line-through	opacity-70">
                  17999 ₽
                </div>
                <div className="price__current font-bold text-xl leading-4 ">
                  15999 ₽
                </div>
              </div>
            </div>

            <button className="button orderbutton"> Оформить заказ</button>
          </div>
        </div>
      </div>

      <header className="flex justify-between	py-5">
        <div className="flex items-center">
          <FcTwoSmartphones className="logo" />
          <div className="headerInfo">
            <h3 className="text-3xl font-bold">
              Top<span className="text-orange-400">Smart</span>{' '}
            </h3>
          </div>
        </div>

        <ul className="flex justify-between items-center mr-5">
          <li>
            <BsSearch className="icon" />
          </li>
          <li>
            <BsCartPlus className="icon" />
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
      <div className="content">
        <div className="flex items-center justify-between mt-5 ml-5 mr-4">
          <h1>Все смартфоны</h1>

          <div className="pt-2 relative  text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Поиск..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <BsSearch />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="card ">
            <div className="relative cursor-zoom-in">
              <img src={require('./img/1.jpg')} alt="phone" />
              <FaPlusCircle className="plusBtn" />
            </div>

            <h5>POCO M4 Pro 4G 256 ГБ</h5>
            <div className="flex justify-end">
              {/* <span>Цена:</span> */}
              <b> 15 999 ₽</b>
            </div>
            <div className="flex items-center justify-end">
              <button className="button grayButton">
                <BiHeart />
              </button>
              <button className="button first"> Купить</button>
            </div>
          </div>
          <div className="card">
            <img src={require('./img/2.jpg')} alt="phone" />
            <h5>Huawei P50 512 ГБ 12 Гб</h5>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Цена:</span>
                <b> 19 999 ₽.</b>
              </div>
              <button className="button first"> Купить</button>
            </div>
          </div>
          <div className="card">
            <img src={require('./img/3.jpg')} alt="phone" />
            <h5>realme GT2 256 ГБ 12 Гб</h5>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Цена:</span>
                <b> 13 999 ₽.</b>
              </div>
              <button className="button first"> Купить</button>
            </div>
          </div>
          <div className="card">
            <img src={require('./img/4.jpg')} alt="phone" />
            <h5>Xiaomi 12Pro 256 ГБ 12 Гб</h5>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Цена:</span>
                <b> 16 999 ₽.</b>
              </div>
              <button className="button first"> Купить</button>
            </div>
          </div>
          <div className="card">
            <img src={require('./img/5.jpg')} alt="phone" />
            <h5>Honor 70 256 ГБ 8 Гб</h5>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Цена:</span>
                <b> 18 999 ₽.</b>
              </div>
              <button className="button first"> Купить</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-between	py-5">
        <div className="flex items-center">
          <FcTwoSmartphones className="logo" />
          <div className="headerInfo">
            <h3 className="text-3xl font-bold">
              Top<span className="text-orange-400">Smart</span>{' '}
            </h3>
            <p className="opacity-70">Магазин лучших смартфонов</p>
          </div>
        </div>

        <ul className="flex justify-between items-center mr-5">
          <li>
            <BsSearch className="icon" />
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
