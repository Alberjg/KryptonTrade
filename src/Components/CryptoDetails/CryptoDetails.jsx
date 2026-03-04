import { useContext, useEffect, useState } from "react";
import CryptoContext from "../../Context/CryptoContext";
import { useParams } from "react-router";
import Graphic from "../Graphic/Graphic";

export default function CryptoDetails() {
  const { getCoinById, getCurrencyPricesPerDayById } =
    useContext(CryptoContext);
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [totalDescription, setTotalDescription] = useState(false);
  const [viewDays, setViewDays] = useState(1);
  const [pricePerDays, setPricePerDays] = useState([]);

  const coinValue = coin.market_data?.current_price?.eur.toLocaleString(
    "es-ES",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  );

  const marketCap = coin.market_data?.market_cap?.eur.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const circulating_supply =
    coin.market_data?.circulating_supply.toLocaleString("es-ES", {
    maximumFractionDigits: 0,
  });

const priceChangePercentage24h = coin?.market_data.price_change_percentage_24h

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

  useEffect(() => {
    assignCoin();
  }, []);

  useEffect(() => {
    assigPricePerDays();
  }, [viewDays]);

  return (
    <>
      {console.log(coin)}
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
              <p>{circulating_supply}</p>
            </div>
            <div>
              <p className="text-gray-500">Variacion del precio:</p>
              <div className="flex">
                <p>{priceChangePercentage24h}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500">Descripción:</p>
            
            {totalDescription ? (
              <div>
                <p>{`${coin.description?.en}`}</p>
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
                <p>{`${coin.description?.en.slice(0, 500)}...`}</p>
                <button
                  onClick={() => {
                    setTotalDescription(true);
                  }}
                  className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Ver mas
                </button>
              </div>
            )}</div>
          </div>

          <div className="w-2/3 overflow-hidden">
            <div className="ml-8 h-96">
              <Graphic data={pricePerDays} />
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
