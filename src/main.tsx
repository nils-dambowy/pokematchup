/* import { StrictMode } from 'react'
* removed StrictMode because it causes the
* useEffect hook to fetch the pokemon data 
* twice.
*/

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <App />,
)
