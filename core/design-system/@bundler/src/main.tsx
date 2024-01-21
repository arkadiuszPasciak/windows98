import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from '../../src/components/test'
import './styles/main.scss?inline'
import '../../src/styles/configs/base.config.css?inline'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
)
