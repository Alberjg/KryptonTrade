import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PercentageChange from "../PercentageChange/PercentageChange";
import Graphic from "../Graphic/Graphic";
import Button from "../Button/Button";
import {
  getCoinById,
  getCurrencyPricesPerDayById,
  translateText,
} from "../../Services/ApiServices";

export default function CryptoDetails() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState({});
  const [totalDescription, setTotalDescription] = useState(false);
  const [viewDays, setViewDays] = useState(1);
  const [pricePerDays, setPricePerDays] = useState([]);
  const [refactoredCoin, setRefactoredCoin] = useState({});

  const buttonsDays = [
    { label: "24h", days: 1 },
    { label: "1S", days: 7 },
    { label: "1M", days: 30 },
    { label: "1A", days: 365 },
  ];

  useEffect(() => {
    try {
      assignCoin();
      assigPricePerDays();
    } catch (error) {
      setError("No se pudieron cargar los datos. Intenta de nuevo mas tarde.");
    }
  }, [id]);

  useEffect(() => {
    try {
      assigPricePerDays();
    } catch (error) {
      setError("No se pudieron cargar los datos. Intenta de nuevo mas tarde.");
    }
  }, [viewDays]);

  useEffect(() => {
    if (Object.keys(coin).length !== 0) {
      assingValues();
    }
  }, [coin]);

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
    const currentCoin = {
      name: coin.name,
      image: coin.image?.small,
      value: formatNumberToLocaleString(coin.market_data.current_price.eur, 2),
      marketCap: formatNumberToLocaleString(coin.market_data.market_cap.eur, 2),
      circulatingSupply: formatNumberToLocaleString(
        coin.market_data.circulating_supply,
        0,
      ),
      priceChangePercentage: [
        {
          label: "24h",
          percentage: coin.market_data.price_change_percentage_24h,
        },
        {
          label: "1s",
          percentage: coin.market_data.price_change_percentage_7d,
        },
        {
          label: "1m",
          percentage: coin.market_data.price_change_percentage_30d,
        },
        {
          label: "1a",
          percentage: coin.market_data.price_change_percentage_1y,
        },
      ],
      description: await translateText(coin.description?.en),
    };
    setRefactoredCoin(currentCoin);
  }

  function formatNumberToLocaleString(number, digits) {
    return number.toLocaleString("es-ES", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  }

  if (Object.keys(refactoredCoin).length === 0) {
    return <div>Cargando datos de criptomoneda...</div>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <div className="flex">
        <img src={refactoredCoin.image} alt="logo" className="mr-4" />
        <div className="flex items-baseline">
          <h2 className="text-5xl font-bold">{refactoredCoin.name}</h2>
          <p className="text-3xl ml-3 text-gray-500">{`${refactoredCoin.value}€`}</p>
        </div>
      </div>
      <div className="flex overflow-hidden mt-8">
        <div className="w-1/3 overflow-hidden">
          <div>
            <p className="text-gray-500">Cap. de mercado:</p>
            <p>{`${refactoredCoin.marketCap}€`}</p>
          </div>
          <div>
            <p className="text-gray-500">Cantidad circulante:</p>
            <p>{refactoredCoin.circulatingSupply}</p>
          </div>
          <div>
            <p className="text-gray-500">Variacion del precio:</p>
            <div className="flex flex-wrap">
              {refactoredCoin.priceChangePercentage.map((time, index) => {
                return (
                  <div key={index} className="flex w-1/2 gap-2">
                    <p>{time.label}</p>
                    <PercentageChange percentage={time.percentage} />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-gray-500">Descripción:</p>

            {totalDescription ? (
              <div>
                <p>
                  {refactoredCoin.description
                    ? refactoredCoin.description
                    : coin.description?.en}
                </p>
                <Button
                  label="Ver menos"
                  onClick={() => setTotalDescription(false)}
                />
              </div>
            ) : (
              <div>
                <p className="line-clamp-10">
                  {refactoredCoin.description
                    ? refactoredCoin.description
                    : coin.description?.en}
                </p>
                <Button
                  label="Ver mas"
                  onClick={() => setTotalDescription(true)}
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-2/3 overflow-hidden">
          <div className="ml-8 h-96">
            <Graphic data={pricePerDays} details={true} />
          </div>
          <div className="flex mt-4 gap-2 justify-end">
            {buttonsDays.map((time, index) => {
              return (
                <Button
                  key={index}
                  label={time.label}
                  onClick={() => setViewDays(time.days)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
