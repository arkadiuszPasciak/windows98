import { useContext } from 'react'
import { DomainContext } from '../context/domain.context'

export default function useCalendar() {
  const store = useContext(DomainContext)

  return {
    calendarService: store,
  }
}
