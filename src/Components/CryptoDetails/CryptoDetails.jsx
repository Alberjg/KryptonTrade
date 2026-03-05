import { useContext, useEffect, useState } from "react";
import CryptoContext from "../../Context/CryptoContext";
import { useParams } from "react-router";
import PercentageChange from "../PercentageCahange/PercentageChange";
import Graphic from "../Graphic/Graphic";

export default function CryptoDetails() {
  const { getCoinById, getCurrencyPricesPerDayById, translateText } =
    useContext(CryptoContext);
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [totalDescription, setTotalDescription] = useState(false);
  const [viewDays, setViewDays] = useState(1);
  const [pricePerDays, setPricePerDays] = useState([]);
  const [coinValue, setCoinValue] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(0);
  const [priceChangePercentage24h, setPriceChangePercentage24h] = useState(0);
  const [priceChangePercentage7d, setPriceChangePercentage7d] = useState(0);
  const [priceChangePercentage1m, setPriceChangePercentage1m] = useState(0);
  const [priceChangePercentage1y, setPriceChangePercentage1y] = useState(0);
  const [description, setDescription] = useState("");

  async function assignCoin() {
    const currentCoin = await getCoinById(id);
    setCoin(currentCoin);
  }

  async function assigPricePerDays() {
    const currentPricePerDays = await getCurrencyPricesPerDayById(id, viewDays);
    const refactorCurrentPrices = currentPricePerDays.prices.map(
      (price) => price[1],
    );
    setPricePerDays(refactorCurrentPrices);
  }

  async function assingValues() {
    setCoinValue(
      formatNumberToLocaleString(coin.market_data.current_price.eur, 2),
    );
    setMarketCap(
      formatNumberToLocaleString(coin.market_data.market_cap.eur, 2),
    );
    setCirculatingSupply(
      formatNumberToLocaleString(coin.market_data.circulating_supply, 0),
    );
    setPriceChangePercentage24h(coin.market_data.price_change_percentage_24h);
    setPriceChangePercentage7d(coin.market_data.price_change_percentage_7d);
    setPriceChangePercentage1m(coin.market_data.price_change_percentage_30d);
    setPriceChangePercentage1y(coin.market_data.price_change_percentage_1y);

    const text = await translateText(coin.description?.en);
    setDescription(text);
  }

  function formatNumberToLocaleString(number, digits) {
    return number.toLocaleString("es-ES", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  }

  useEffect(() => {
    assignCoin();
  }, []);

  useEffect(() => {
    assigPricePerDays();
  }, [viewDays]);

  useEffect(() => {
    if (Object.keys(coin).length !== 0) {
      assingValues();
    }
  }, [coin]);

  return (
    <>
      {/* {console.log(coin)} */}
      <div className="p-7 shadow-2xl shadow-lime-500 rounded-xl overflow-hidden mb-10">
        <div className="flex">
          <img src={coin.image?.small} alt="logo" className="mr-4" />
          <div className="flex items-baseline">
            <h2 className="text-5xl font-bold">{coin.name}</h2>
            <p className="text-3xl ml-3 text-gray-500">{`${coinValue}€`}</p>
          </div>
        </div>
        <div className="flex overflow-hidden mt-8">
          <div className="w-1/3 overflow-hidden">
            <div>
              <p className="text-gray-500">Cap. de mercado:</p>
              <p>{`${marketCap}€`}</p>
            </div>
            <div>
              <p className="text-gray-500">Cantidad circulante:</p>
              <p>{circulatingSupply}</p>
            </div>
            <div>
              <p className="text-gray-500">Variacion del precio:</p>
              <div>
                <div className="flex gap-8">
                  <div className="flex gap-2">
                    <p>{`24h`}</p>
                    <PercentageChange percentage={priceChangePercentage24h} />
                  </div>
                  <div className="flex gap-2">
                    <p>{`1s`}</p>
                    <PercentageChange percentage={priceChangePercentage7d} />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <p>{`1m`}</p>
                    <PercentageChange percentage={priceChangePercentage1m} />
                  </div>
                  <div className="flex gap-2">
                    <p>{`1a`}</p>
                    <PercentageChange percentage={priceChangePercentage1y} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-500">Descripción:</p>

              {totalDescription ? (
                <div>
                  <p>{description ? description : coin.description?.en}</p>
                  <button
                    onClick={() => {
                      setTotalDescription(false);
                    }}
                    className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    Ver menos
                  </button>
                </div>
              ) : (
                <div>
                  <p>
                    {description
                      ? `${description.slice(0, 500)}...`
                      : coin.description?.en.slice(0, 500)}
                  </p>
                  <button
                    onClick={() => {
                      setTotalDescription(true);
                    }}
                    className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    Ver mas
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-2/3 overflow-hidden">
            <div className="ml-8 h-96">
              <Graphic data={pricePerDays} details={true}/>
            </div>
            <div className="flex mt-4 gap-2 justify-end">
              <button
                onClick={() => {
                  setViewDays(1);
                }}
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                24h
              </button>
              <button
                onClick={() => {
                  setViewDays(7);
                }}
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                1S
              </button>
              <button
                onClick={() => {
                  setViewDays(30);
                }}
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                1M
              </button>
              <button
                onClick={() => {
                  setViewDays(365);
                }}
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                1A
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
