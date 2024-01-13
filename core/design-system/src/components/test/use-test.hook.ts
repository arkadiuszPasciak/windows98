import type UseTestHook from './test.type'
import { useState } from 'react'

export default function useTest(): UseTestHook {
  const [count, setCount] = useState(0)

  const setCountByOne = () => {
    setCount((count) => count + 1)
  }

  return {
    count,
    setCountByOne,
  }
}
