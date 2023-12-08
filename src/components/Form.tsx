type FormProps = {
  onInputChange: (field: string, value: string) => void
}

export default function Form({ onInputChange }: FormProps) {
  return (
    <section id='form' className='form-container'>
      <form action='' className='form'>
        <div className='form-item'>
          <label htmlFor='card-number'>Cardholder Name</label>
          <input
            type='text'
            name='card-number'
            id='card-number'
            placeholder='e.g. Jane Appleseed'
            onChange={(e) => onInputChange('name', e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='card-number'>Card Number</label>
          <input
            type='text'
            name='card-number'
            id='card-number'
            placeholder='e.g. 1234 5678 9123 0000'
            onChange={(e) => onInputChange('number', e.target.value)}
          />
        </div>

        <div className='form-item exp-date-cvc'>
          <div className='exp-date exp-date-mm'>
            <label htmlFor='exp-date'>Exp. Date (mm yy)</label>
            <input
              type='text'
              name='exp-date'
              id='exp-date'
              placeholder='MM'
              onChange={(e) => onInputChange('month', e.target.value)}
            />
          </div>
          <div className='exp-date exp-date-yy'>
            <label htmlFor='exp-date'>x</label>
            <input
              type='text'
              name='exp-date'
              id='exp-date'
              placeholder='YY'
              onChange={(e) => onInputChange('year', e.target.value)}
            />
          </div>
          <div className='cvc'>
            <label htmlFor='cvc'>CVC</label>
            <input
              type='text'
              name='cvc'
              id='cvc'
              placeholder='e.g. 123'
              onChange={(e) => onInputChange('cvc', e.target.value)}
            />
          </div>
        </div>

        <button className='btn' type='submit'>
          Confirm
        </button>
      </form>
    </section>
  )
}
