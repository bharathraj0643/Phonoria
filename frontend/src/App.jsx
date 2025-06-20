import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

import { ENV } from './constants/env'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{ENV.API_URL}</h1>
      <p>dynamic enviroment variable</p>
      <Card />
    </>
  )
}

export default App
