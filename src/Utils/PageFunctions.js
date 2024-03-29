import { useMemo } from 'react'

export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  let result = []
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  return result
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export const useCards = (cards, query) => {
  const foundCards = useMemo(() => {
    return cards.filter((card) =>
      card.full_name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, cards])
  return foundCards
}

export const randomPrice = () => {
  return (
    Math.round(Math.floor(Math.random() * (1000 - 100) + 100) / 20) * 1000 - 1
  )
}

export const slicePrice = (price) => {
  if (price) {
    const stringPrice = price.toString()
    return `${stringPrice.slice(0, stringPrice.length - 3)} ${stringPrice.slice(
      -3
    )}`
  }
}

export const randomMinMax = (min, max, tofixed) => {
  return (Math.random() * (max - min) + min).toFixed(tofixed)
}

export const saveToLocalStorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items))
}

export const getFromLocalStorage = (name, action) => {
  if (localStorage.getItem(name)) {
    const items = JSON.parse(localStorage.getItem(name))
    action(items)
  }
}
