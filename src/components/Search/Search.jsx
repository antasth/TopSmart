import { BsSearch } from 'react-icons/bs'
import styles from './Search.module.scss'

const Search = ({ filter, setFilter, showFoundCards }) => {
  return (
      <div className={styles.search}>
        {/* <h1 className="text-2xl">Смартфоны</h1> */}

        <div className="pt-2 relative  text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Поиск..."
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <BsSearch onClick={showFoundCards} />
          </button>
        </div>
      </div>
  )
}

export default Search
