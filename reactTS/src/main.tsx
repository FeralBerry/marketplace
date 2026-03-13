import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import {ToastContainer} from "react-toastify";

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)

reactRoot.render(
  <StrictMode>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
          <App />
  </StrictMode>,
)
