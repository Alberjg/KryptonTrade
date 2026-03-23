const API_URL = import.meta.env.VITE_API_URL;
async function getCryptosList() {
  try {
    const response = await fetch(
      `${API_URL}${import.meta.env.VITE_API_URL_ALL_COINS}`,
      {
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Errooor ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la lista de criptomondedas,", error);
    throw error;
  }
}

async function getCoinById(id) {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la informacion de la criptomoneda,", error);
    throw error;
  }
}

async function getCurrencyPricesPerDayById(id, days) {
  try {
    const response = await fetch(
      `${API_URL}${id}${import.meta.env.VITE_API_URL_COIN_DETAILS}${days}`,
      {
        method: "GET",
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      },
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de la grafica,", error);
    throw error;
  }
}

async function translateText(text) {
  if (!text) return "";
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_TRANSLATE_URL}${encodeURIComponent(text)}`,
    );
    if(!response.ok){
      throw new Error(response.status)
    }
    const data = await response.json();
    const refactorText = data.translation;
    return refactorText;
  } catch (error) {
    console.error("Error al traducir la descripción de la criptomoneda,", error)
    throw error
  }
}

export {
  getCryptosList,
  getCoinById,
  getCurrencyPricesPerDayById,
  translateText,
};
