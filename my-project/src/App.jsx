
import './App.css'
import { useState, useMemo } from 'react'

// currency converter

function App() {

  const [money, setMoney] = useState(0);
  const [exchangeFrom, setExchangeFrom] = useState('USD');
  const [exchangeTo, setExchangeTo] = useState('EUR');

  const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 157
  };


  function handleMoneyInput(e){
    setMoney(e.target.value);
  }

  function handleExchangeFrom(e){
    setExchangeFrom(e.target.value);
  }

  function handleExchangeTo(e){
    setExchangeTo(e.target.value);
  }



  

  return (
    <>
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="UI">
          <label htmlFor="">
            Amount: 
            <input type="number" value={money} onChange={handleMoneyInput} />
          </label><br />
          <label htmlFor="">
            From:
            <select value={exchangeFrom} onChange={handleExchangeFrom} name="" id="">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </label><br />
          <label htmlFor="">
            To:
            <select value={exchangeTo} onChange={handleExchangeTo} name="" id="">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </label>
        </div>
        <div className="result">Convertion of {exchangeFrom} to {exchangeTo} Amount: </div>
      </div>
    </>
  )
}

export default App;
