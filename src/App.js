import { FcTwoSmartphones } from 'react-icons/fc'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

function App() {
  return (
    <div className="wrapper">
      <header className="flex justify-between	py-5">
        <div className="flex items-center">
          <FcTwoSmartphones className="logo" />
          <div className="headerInfo">
            <h3 className="text-3xl font-bold">Top<span className='text-orange-400'>Smart</span> </h3>
            {/* <p>Магазин лучших смартфонов</p> */}
          </div>
        </div>

        <ul className="flex justify-between items-center mr-5">
          <li>
            <BsSearch className="icon" />
          </li>
          <li>
            <BsCartPlus className="icon" />
            <span> 9999 р.</span>
          </li>
          <li>
            <BiUserCircle className="icon" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все смартфоны</h1>

        <div className="flex flex-wrap">
          <div className="card">
            <img src={require('./img/1.jpg')} alt="phone" />
            <h5>POCO M4 Pro 4G 256 ГБ</h5>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Цена:</span>
                <b> 15 999 р.</b>
              </div>
              <button className="button first"> Купить</button>
            </div>
          </div>
          <div className="card">
            <img src={require('./img/2.jpg')} alt="phone" />
            <h5>Huawei P50 512 ГБ 12 Гб</h5>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Цена:</span>
                <b> 19 999 р.</b>
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
                <b> 13 999 р.</b>
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
                <b> 16 999 р.</b>
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
                <b> 18 999 р.</b>
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
            <h3 className="text-3xl font-bold">Top<span className='text-orange-400'>Smart</span> </h3>
            <p className='opacity-70'>Магазин лучших смартфонов</p>
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
