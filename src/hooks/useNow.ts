import { useEffect, useState, useRef } from 'react'

export const useNow = (interval = 1000): [Date] => {
  const [time, setTime] = useState(new Date())
  const _timer = useRef(null)

  const updateTime = (): void => setTime(new Date())

  useEffect(() => {
    _timer.current = setInterval(updateTime, interval)
    return (): void => clearInterval(_timer.current)
  }, [])

  return [time]
}
