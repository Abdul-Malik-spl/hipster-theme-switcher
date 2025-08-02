import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Storedata from './Component/Redux/Store.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  

  <StrictMode>
   <Provider store={Storedata}>
      <App />
    </Provider>
  </StrictMode>



)
