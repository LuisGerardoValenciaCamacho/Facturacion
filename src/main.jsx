import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InvoceApp } from './InvoceApp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <InvoceApp />
  // </StrictMode>,
)
