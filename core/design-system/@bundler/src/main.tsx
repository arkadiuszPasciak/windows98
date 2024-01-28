import React from 'react'
import ReactDOM from 'react-dom/client'
import { DSText } from '../../src'
import './styles/main.scss?inline'
import '../../src/styles/configs/base.config.css?inline'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DSText id='hello-world' text='Hello World' />
  </React.StrictMode>,
)
