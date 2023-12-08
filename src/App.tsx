import Form from './components/Form'
import Card from './components/Card'

import { useState } from 'react'

import './App.css'

export type Card = {
  name: string
  number: string | number
  validDate: {
    month: string
    year: string
  }
  cvc: string
}

function App() {
  const [card, setCard] = useState<Card>({
    name: 'Jane Appleseed',
    number: '0000 000 000 0000',
    validDate: {
      month: '00',
      year: '00',
    },
    cvc: '123',
  })

  const handleInputChange = (field: string, value: string) => {
    setCard({
      ...card,
      [field]: value,
      validDate: {
        ...card.validDate,
        [field]: value,
      },
    })
  }

  return (
    <main className='main-container'>
      <Card card={card} />
      <Form onInputChange={handleInputChange} />
    </main>
  )
}

export default App
