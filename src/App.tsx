import './App.css'

function App() {
  return (
    <main className='main-container'>
      <section id='card' className='card-container'>
        <div className='card card-back'>
          <img
            className='card-img'
            src='/images/bg-card-back.png'
            alt='card back side'
          />
          <div className='card-back-content'>
            <p>000</p>
          </div>
        </div>
        <div className='card card-front'>
          <img
            className='card-img'
            src='/images/bg-card-front.png'
            alt='card front side'
          />
          <div className='card-front-content'>
            <img src='/images/card-logo.svg' alt='card logo' />
            <p className='card-number'>0000 000 000 000</p>
            <div className='card-footer'>
              <p className='owner-name'>jane appleseed</p>
              <p className='valid-date'>00/00</p>
            </div>
          </div>
        </div>
      </section>
      <section id='form' className='form-container'>
        <form action='' className='form'>
          <div className='form-item'>
            <label htmlFor='card-number'>Cardholder Name</label>
            <input
              type='text'
              name='card-number'
              id='card-number'
              placeholder='e.g. Jane Appleseed'
            />
          </div>
          <div className='form-item'>
            <label htmlFor='card-number'>Card Number</label>
            <input type='text' name='card-number' id='card-number' />
          </div>

          <div className='form-item exp-date-cvc'>
            <div className='exp-date exp-date-mm'>
              <label htmlFor='exp-date'>Exp. Date (mm yy)</label>
              <input type='text' name='exp-date' id='exp-date' />
            </div>
            <div className='exp-date exp-date-yy'>
              <label htmlFor='exp-date'>x</label>
              <input type='text' name='exp-date' id='exp-date' />
            </div>
            <div className='cvc'>
              <label htmlFor='cvc'>CVC</label>
              <input type='text' name='cvc' id='cvc' />
            </div>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </section>
    </main>
  )
}

export default App
