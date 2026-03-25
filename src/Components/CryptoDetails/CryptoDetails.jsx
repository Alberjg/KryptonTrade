import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CryptoStats from "./CryptoStats";
import CryptoDescription from "./CryptoDescription";
import PriceChart from "./PriceChart";
import { getCoinById, translateText } from "../../Services/ApiServices";

export default function CryptoDetails() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState({});
  const [refactoredCoin, setRefactoredCoin] = useState({});

  useEffect(() => {
    assignCoin();
  }, [id]);

  useEffect(() => {
    if (Object.keys(coin).length !== 0) {
      assingValues();
    }
  }, [coin]);

  async function assignCoin() {
    try {
      const currentCoin = await getCoinById(id);
      setCoin(currentCoin);
    } catch (error) {
      setError("No se pudieron cargar los datos. Intenta de nuevo mas tarde.");
    }
  }

  async function assingValues() {
    try {
      const currentCoin = {
        name: coin.name,
        image: coin.image?.small,
        value: formatNumberToLocaleString(
          coin.market_data.current_price.eur,
          2,
        ),
        marketCap: formatNumberToLocaleString(
          coin.market_data.market_cap.eur,
          2,
        ),
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
    } catch (error) {
      setError("No se pudieron cargar los datos. Intenta de nuevo mas tarde.");
    }
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
          <CryptoStats coin={refactoredCoin} />
          {refactoredCoin.description ? (
            <CryptoDescription description={refactoredCoin.description} />
          ) : (
            <CryptoDescription description={coin.description?.en} />
          )}
        </div>
        <PriceChart id={id} />
      </div>
    </>
  );
}
