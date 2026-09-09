
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import {Greet,Qn} from"./App.jsx";



createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Greet/>
    <Qn/>

  </>
)
