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
