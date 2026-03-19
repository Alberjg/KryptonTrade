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
  const response = await fetch(
    `${import.meta.env.VITE_API_TRANSLATE_URL}${encodeURIComponent(text)}`,
  );
  const data = await response.json();
  const refactorText = data.translation;

  return refactorText;
}

export{
  getCryptosList,
  getCoinById,
  getCurrencyPricesPerDayById,
  translateText,
};
