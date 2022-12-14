import { FcTwoSmartphones } from 'react-icons/fc'

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <FcTwoSmartphones className="logo" />
          <div className="headerInfo">
            <h3>Top smartphone </h3>
            <p>Магазин лучших смартфонов</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>9999 р.</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все смартфоны</h1>
      </div>
    </div>
  )
}

export default App
