import CryptoContext from "./CryptoContext";

function CryptoProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL;
  async function getCryptosList() {
    const response = await fetch(
      `${API_URL}${import.meta.env.VITE_API_URL_ALL_COINS}`,
      {
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      },
    );
    const data = await response.json();
    return data;
  }

  async function getCoinById(id) {
    const response = await fetch(`${API_URL}${id}`, {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    });
    const data = await response.json();
    return data;
  }

  async function getCurrencyPricesPerDayById(id, days) { 
    const response = await fetch(
      `${API_URL}${id}${import.meta.env.VITE_API_URL_COIN_DETAILS}${days}`,
      {
        method: "GET",
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      },
    );
    const data = await response.json();
    return data;
  }

  async function translateText(text) {
  
    if (!text) return "";
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0,500))}&langpair=autodetect|es`);

      const data = await response.json();
      const refactorText = data.responseData.translatedText
      console.log(refactorText);
      
      return refactorText;
  }
  return (
    <CryptoContext.Provider
      value={{ getCryptosList, getCoinById, getCurrencyPricesPerDayById, translateText }}
    >
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;
