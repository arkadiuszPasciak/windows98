import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from '../../src/components/test'
import './styles/main.scss'
import '../../configs/base.config.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
)
