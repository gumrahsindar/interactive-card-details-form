import { useState } from 'react'

type FormProps = {
  onInputChange: (field: string, value: string) => void
}

export default function Form({ onInputChange }: FormProps) {
  const [nameError, setNameError] = useState<string | null>(null)
  const [numberError, setNumberError] = useState<string | null>(null)
  const [expDateError, setExpDateError] = useState<string | null>(null)
  const [cvcError, setCvcError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.value

    if (typeof name === 'string' && name.trim().length > 1) {
      setNameError(null)
    }
    if (name.trim().length < 2) {
      setNameError('Name must be at least 2 characters long')
    }
    if (name.trim().length === 0) {
      setNameError('Name is required')
    }
    if (/^\d+$/.test(name)) {
      setNameError('Name must be a string')
    }
    onInputChange('name', name)
  }

  // Card Number Validation (if string iputted say 'Wrong format, number only')
  const handleNumberBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const number = e.target.value

    if (typeof number === 'string' && number.trim().length > 1) {
      setNumberError(null)
    }
    if (number.trim().length < 16) {
      setNumberError('Number must be at least 16 characters long')
    }

    if (number.trim().length === 0) {
      setNumberError('Number is required')
    }
    if (!/^\d+$/.test(number)) {
      setNumberError('Wrong format, numbers only')
    }
    onInputChange('number', number)
  }

  // handleExpDateBlur (can not be blank)
  const handleExpDateBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const expDate = e.target.value

    if (typeof expDate === 'string' && expDate.trim().length > 1) {
      setExpDateError(null)
    }

    if (expDate.trim().length === 0) {
      setExpDateError("Cant't be blank")
    }

    onInputChange('expDate', expDate)
  }

  const handleCvcBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const cvc = e.target.value

    if (typeof cvc === 'string' && cvc.trim().length > 1) {
      setCvcError(null)
    }

    if (cvc.trim().length === 0) {
      setCvcError("Cant't be blank")
    }

    onInputChange('cvc', cvc)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check if any of the inputs are empty
    const inputs = {
      name: e.currentTarget.elements.namedItem('name') as HTMLInputElement,
      number: e.currentTarget.elements.namedItem('number') as HTMLInputElement,
      expDate: e.currentTarget.elements.namedItem(
        'expDate'
      ) as HTMLInputElement,
      cvc: e.currentTarget.elements.namedItem('cvc') as HTMLInputElement,
    }

    // for (const input in inputs) {
    //   if (inputs[input]?.value.trim() === '') {
    //     return
    //   }
    // }
    for (const inputKey of Object.keys(inputs)) {
      const inputName = inputKey as keyof typeof inputs
      const inputValue = inputs[inputName]?.value.trim()

      if (inputValue === '') {
        // Eğer boş bir alan varsa, işlem yapma
        return
      }
    }

    // Check if there are any errors
    if (nameError || numberError || expDateError || cvcError) {
      return
    }

    setSubmitted(true)
  }

  const handleSuccessClick = () => {
    setSubmitted(false)
    window.location.reload()
  }

  return (
    <section id='form' className='form-container'>
      (
      {!submitted ? (
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-item'>
            <label htmlFor='card-number'>Cardholder Name</label>
            <input
              type='text'
              name='name'
              id='card-name'
              placeholder='e.g. Jane Appleseed'
              onChange={(e) => onInputChange('name', e.target.value)}
              onBlur={handleNameBlur}
            />
            {nameError && <p className='error'>{nameError}</p>}
          </div>
          <div className='form-item'>
            <label htmlFor='card-number'>Card Number</label>
            <input
              type='text'
              name='number'
              id='card-number'
              placeholder='e.g. 1234 5678 9123 0000'
              onChange={(e) => onInputChange('number', e.target.value)}
              onBlur={handleNumberBlur}
            />
            {numberError && <p className='error'>{numberError}</p>}
          </div>

          <div className='form-item exp-date-cvc'>
            <div className='exp-date exp-date-mm'>
              <label htmlFor='exp-date'>Exp. Date (mm yy)</label>
              <input
                type='number'
                name='exp-date-month'
                id='exp-date-mm'
                placeholder='MM'
                onChange={(e) => onInputChange('month', e.target.value)}
                onBlur={handleExpDateBlur}
              />
              {numberError && <p className='error'>{expDateError}</p>}
            </div>
            <div className='exp-date exp-date-yy'>
              <label htmlFor='exp-date'>YY</label>
              <input
                type='number'
                name='exp-date-year'
                id='exp-date-yy'
                placeholder='YY'
                onChange={(e) => onInputChange('year', e.target.value)}
              />
            </div>
            <div className='cvc'>
              <label htmlFor='cvc'>CVC</label>
              <input
                type='number'
                name='cvc'
                id='cvc'
                placeholder='e.g. 123'
                onChange={(e) => onInputChange('cvc', e.target.value)}
                onBlur={handleCvcBlur}
              />
              {cvcError && <p className='error'>{cvcError}</p>}
            </div>
          </div>

          <button className='btn' type='submit'>
            Confirm
          </button>
        </form>
      ) : (
        <div className='success-container'>
          <img className='success-img' src='images/icon-complete.svg' alt='' />
          <h2 className='success-heading'>Thank You!</h2>
          <p className='success-desc'>We’ve added your card details</p>
          <button onClick={handleSuccessClick} className='btn' type='submit'>
            Continue
          </button>
        </div>
      )}
    </section>
  )
}
