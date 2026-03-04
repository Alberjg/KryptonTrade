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

  return (
    <CryptoContext.Provider
      value={{ getCryptosList, getCoinById, getCurrencyPricesPerDayById }}
    >
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;
