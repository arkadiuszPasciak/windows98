import React from 'react'
import ReactDOM from 'react-dom/client'
import '@windows98/design-system/base.config.css'
import { CalendarView } from '../../calendar/src/ui/views/calendar.view'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalendarView />
  </React.StrictMode>,
)
