import {React,useState} from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap'

function App() {
  const [lol, setlol] = useState("mohamed")
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <CallToAction/>
    </div>
  )
}

export default App
