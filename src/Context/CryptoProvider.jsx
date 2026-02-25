import CryptoContext from "./CryptoContext";

function CryptoProvider({ children }) {
  async function getCryptosList() {
    const response = await fetch(
      import.meta.env.VITE_API_URL_ALL_COINS,
      {
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      },
    );
    const data = await response.json();
    return data;
  }
  return (
    <CryptoContext.Provider value={{ getCryptosList }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;
