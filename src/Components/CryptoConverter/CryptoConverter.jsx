import { useEffect, useState } from "react";
import { getCryptosList } from "../../Services/ApiServices";
import changeImg from "../../assets/changeImg.png";
export default function CryptoConverter() {
  const [listCoins, setListSelect] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("Bitcoin");
  const [coinToConvert, setCoinToConvert] = useState("EUR");
  const [selectedValue, setSelectedValue] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    getLists();
  }, []);

  useEffect(() => {
    if (listCoins.length > 0) {
      const priceCoinToConvert = listCoins.find(
        (coin) => coin.coin === coinToConvert,
      ).price;
      const priceSelectedCoin = listCoins.find(
        (coin) => coin.coin === selectedCoin,
      ).price;

      const result = (selectedValue * priceSelectedCoin) / priceCoinToConvert;

      setResult(result);
    }
  }, [selectedCoin, coinToConvert, selectedValue, listCoins]);

  async function getLists() {
    const coins = await getCryptosList();
    let list = coins.map((coin) => {
      return { coin: coin.name, price: coin.current_price };
    });
    setListSelect([{ coin: "EUR", price: 1 }, ...list]);
  }

  function handleResultChange(event) {
    const resultValue = event.target.value;
    setResult(resultValue);

    if (listCoins.length > 0) {
      const priceSelectedCoin = listCoins.find(
        (coin) => coin.coin === selectedCoin,
      )?.price;
      const priceCoinToConvert = listCoins.find(
        (coin) => coin.coin === coinToConvert,
      )?.price;

      const inverseRes = (resultValue * priceCoinToConvert) / priceSelectedCoin;
      setSelectedValue(inverseRes);
    }
  }

  function changePosition(event) {
    event.preventDefault();
    setSelectedCoin(coinToConvert);
    setCoinToConvert(selectedCoin);
    setSelectedValue(result);
    setResult(selectedValue);
  }

  return (
    <div className="flex justify-center m-15">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Conversor de criptomonedas
        </h2>
        <form>
          <div className="flex">
            <div className="flex flex-col">
              <select
                name=""
                id=""
                value={selectedCoin}
                onChange={(event) => setSelectedCoin(event.target.value)}
              >
                {listCoins.map((coin, index) => {
                  return (
                    <option key={index} value={coin.coin}>
                      {coin.coin}
                    </option>
                  );
                })}
              </select>
              <input
                type="number"
                value={selectedValue}
                className="border rounded-xl overflow-hidden p-1 pl-2"
                onChange={(event) => setSelectedValue(event.target.value)}
              />
            </div>

            <button
              className="m-3.5 text-3xl border rounded-xl"
              onClick={changePosition}
            >
              <img src={changeImg} alt="" className="w-12" />
            </button>

            <div className="flex flex-col">
              <select
                name=""
                id=""
                value={coinToConvert}
                onChange={(event) => setCoinToConvert(event.target.value)}
              >
                {listCoins.map((coin, index) => {
                  return (
                    <option key={index} value={coin.coin}>
                      {coin.coin}
                    </option>
                  );
                })}
              </select>
              <input
                type="number"
                value={result}
                className="border rounded-xl overflow-hidden p-1 pl-2"
                onChange={handleResultChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
