import { useState, useEffect } from "react"

const usePersistedState = (key, initialState) => {
  const isBrowser = () => typeof window !== "undefined"

  const [state, setState] = useState(() => {
    const storageValue = isBrowser() && window.localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    isBrowser() && window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
