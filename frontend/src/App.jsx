import { useState } from 'react'

import Card from './components/Card'

import { ENV } from './constants/env'

function App() {

  return (
    <>
      <h1 className='text-3xl'>{ENV.API_URL}</h1>
      <p className='bg-amber-200'>dynamic enviroment variable</p>
      <Card />
    </>
  )
}

export default App
