import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)

reactRoot.render(
  <StrictMode>
          <App />
  </StrictMode>,
)
