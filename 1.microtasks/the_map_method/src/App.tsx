import './App.css'
import { useState } from 'react'
import {NewComponent} from './NewComponent.tsx'

function App() {
  const [cars, carType] =  useState([
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ])

  return (
    <>
      <NewComponent cars={cars}/>
    </>
  )
}

export default App
