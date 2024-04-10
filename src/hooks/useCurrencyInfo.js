import { useState, useEffect } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState([])
    
    const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`

    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.min.json`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch (primaryUrl)
                
                if (!response.ok){
                    throw new Error("Could not fetch data from primary resource")
                }
                const fetchedData = await response.json()
                setData(fetchedData[currency])
            }catch (error){
                console.error("Error fetching currency information:", error)
                try {
                    const fallbackResponse = await fetch(fallbackUrl)
    
                    if (!fallbackResponse.ok){
                        throw new Error(`Could not fetch data from fallback  resource`)
                    }
    
                    const fallbackData = await fallbackResponse.json()
                    setData(fallbackData[currency])
                }catch(fallbackError){
                    console.error("Error fetching currency information:", fallbackError)
                }
            }
           
        }
    
        fetchData()
    }, [currency, fallbackUrl, primaryUrl])
    return data
}

export default useCurrencyInfo