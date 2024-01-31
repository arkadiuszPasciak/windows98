import React from 'react'
import ReactDOM from 'react-dom/client'
import '@windows98/design-system/base.config.css'
import { DSText } from '@windows98/design-system'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DSText id='hello-world' text="Hello world!" />
  </React.StrictMode>,
)
