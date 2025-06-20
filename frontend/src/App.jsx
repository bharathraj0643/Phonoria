import { useState } from 'react'

import Card from './components/Card'

import { ENV } from './constants/env'

function App() {

  return (
    <>
      <h1>{ENV.API_URL}</h1>
      <p>dynamic enviroment variable</p>
      <Card />
    </>
  )
}

export default App
