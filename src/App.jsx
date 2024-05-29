import { useState } from 'react'
import { InputBox, useCurrencyInfo } from './components/index'
import './index.css'


function App() {
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("eur")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  
  const swap = () => {
    setAmount(convertedAmount)
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
  }

  const reset = () => {
    setAmount(1)
    setFrom("usd")
    setTo("eur")
    setConvertedAmount && setConvertedAmount(0)
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-wide'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto bg-opacity-100 rounded-lg p-7 backdrop-blur-none bg-gray-600/30'>
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
              className='absolute right-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-400 text-white px-2  py-0.5 hover:scale-125 duration-150 cursor-pointer'
              onClick={swap}
              >Swap</button>
              <button 
              type="button"
              className='absolute left-1/2 -translate-x-2/2 -translate-y-1/2 border-2 border-white rounded-md bg-red-400 text-white px-2  py-0.5 hover:scale-125 duration-150 cursor-pointer'
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
            className='w-full bg-sky-500 text-white px-4 py-3 rounded-lg hover:bg-blue-400 mt-3 hover:text-zinc-700 hover:text-base duration-150 cursor-pointer  hover:bg-opacity-50 hover:font-bold'>Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
             </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
