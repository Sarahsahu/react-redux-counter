import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
         <App />
    </Provider>
  </StrictMode>,
)


// S1 create store.js..to place entire logic pf reducers
// S2 in main.jsx import store,provider..so that all the components inside App can use the store for accesiible
// S3 slice creation 
//S4 register the counterSlice reducers in the store ..so than store can get to know how to increment or decrement