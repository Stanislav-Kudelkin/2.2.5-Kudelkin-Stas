import { useState, useEffect } from 'react'

export default function useLocalStorage(key: string, inputValue: string) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : inputValue
    } catch (error) {
      return inputValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
