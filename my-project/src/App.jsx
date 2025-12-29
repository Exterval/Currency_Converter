
import './App.css'
import { useState, useMemo } from 'react'

// currency converter

function App() {

  const [money, setMoney] = useState(1);
  const [exchangeFrom, setExchangeFrom] = useState('USD');
  const [exchangeTo, setExchangeTo] = useState('EUR');

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  // similar to rates, there will be a dictionary for
  // symbols that will change accordingly to the rates.
  const rateSymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥'
  }

  function handleMoneyInput(e){
    setMoney(Number(e.target.value));
  }

  function handleExchangeFrom(e){
    setExchangeFrom(e.target.value);
  }

  function handleExchangeTo(e){
    setExchangeTo(e.target.value);
  }

  // Precompute conversions from `exchangeFrom` to all currencies — depends only on amount and source currency.
  const conversions = useMemo(() => {
    const result = {};
    for (const curr in rates) {
      console.log(curr, result)
      result[curr] = (money * (rates[curr] / rates[exchangeFrom])).toFixed(2);
    }
    return result;
  }, [exchangeFrom, money]);

  function determineExchangeAmountSymbol(){
    return rateSymbols[exchangeTo] || '';
  }

  return (
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="UI">
          <label htmlFor="">
            Amount
          </label>
          <input type="number" value={money} onChange={handleMoneyInput} id='moneyInput'/>
          <label htmlFor="">
            From
          </label>
          <select value={exchangeFrom} onChange={handleExchangeFrom} name="" id="exchangeFrom">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          <label htmlFor="">
            To
          </label>
          <select value={exchangeTo} onChange={handleExchangeTo} name="" id="exchangeTo">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
        </div>
        <div className="result">Convertion of {money} {exchangeFrom} to {exchangeTo} <br /> Amount: <span id='exchangeToAmount'>{conversions[exchangeTo]}{determineExchangeAmountSymbol()}</span></div>
      </div>
  )
}

export default App;
