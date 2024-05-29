import  React, {  useState, useMemo } from 'react'

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const [errorMessage, setErrorMessage] = useState(null);


  const handleAmountChange = (e) => {
    const parsedAmount = (Number(e.target.value));
    if (!isNaN(parsedAmount)) {
      amount=parsedAmount;
      setErrorMessage(null); 
      onAmountChange && onAmountChange(parsedAmount);
      } else {
        setErrorMessage('Please enter a valid number.');
    }
  };
  const formattedClassName = useMemo(() => `bg-white p-3 rounded-lg text-sm flex ${className}`, [className]);

  const currencyOptionsList = useMemo(() => (
    <select
      className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      disabled={currencyDisabled}
    >
      
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency} className="text-gray-800">
          {currency}
        </option>
      ))}
    </select>
  ), [currencyOptions, selectedCurrency, currencyDisabled, onCurrencyChange]);

   
  return (
    <div className={formattedClassName}>
        <div className='w-1-2'>
            <label htmlFor="currency" className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
                id='currency'
                type="number" 
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='0'
                disabled={amountDisabled}
                value={amount || ''}
                onChange={handleAmountChange}
              />
            {errorMessage && (
            <p id="error-message" role="alert" className="text-red-500 text-xs mt-1">
              {errorMessage}
            </p>
        )}
        </div>
        <div className='w-1-2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            {currencyOptionsList}
        </div>
    </div>
  )
}

export default InputBox;
