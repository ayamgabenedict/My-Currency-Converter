import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { InputBox } from './components/index'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("eur")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const reset = () => {
    setAmount(1)
    setConvertedAmount && setConvertedAmount(0)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-wide'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto  bg-opacity-100 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <h1 className="text-3xl text-center font-extrabold text-white mb-4 font-serif">Currency Converter</h1>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-2'>
              <InputBox 
                label={`From:  ${from.toUpperCase()}`}
                amount={amount}
                currencyOptions = {options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
              type="button"
              className='absolute right-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-400 text-white px-2  py-0.5'
              onClick={swap}
              >Swap</button>
              <button 
              type="button"
              className='absolute left-1/2 -translate-x-2/2 -translate-y-1/2 border-2 border-white rounded-md bg-red-400 text-white px-2  py-0.5'
              onClick={reset}
              >Reset</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
                label={`To: ${to.toUpperCase()}`}
                amount={convertedAmount.toFixed(2)}
                currencyOptions = {options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
            type="submit"
            className='w-full bg-sky-500 text-white px-4 py-3 rounded-lg hover:bg-blue-400 mt-3'>Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
             </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
