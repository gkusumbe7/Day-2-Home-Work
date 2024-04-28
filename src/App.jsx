import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeWork from './Page/HomeWork'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomeWork />
    </>
  )
}

export default App
