import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterComponent } from './assets/components/CounterComponent'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterComponent></CounterComponent>
  </StrictMode>,
)
