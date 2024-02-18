import { createContext } from 'react'
import { calendarService } from '../../domain/services/calendar.service'

export const DomainContext = createContext(calendarService)
