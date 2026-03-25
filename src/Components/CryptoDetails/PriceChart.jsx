import { useState, useEffect } from "react";
import Graphic from "../Graphic/Graphic";
import Button from "../Button/Button";
import { TIME_PERIODS } from "../../Constants/chart";
import { getCurrencyPricesPerDayById } from "../../Services/ApiServices";

export default function PriceChart({ id }) {
  const [viewDays, setViewDays] = useState(1);
  const [pricePerDays, setPricePerDays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    assigPricePerDays();
  }, [viewDays, id]);

  async function assigPricePerDays() {
    setError(null)
    try {
      const currentPricePerDays = await getCurrencyPricesPerDayById(
        id,
        viewDays,
      );
      const refactorCurrentPrices = currentPricePerDays.prices.map(
        (price) => price[1],
      );
      setPricePerDays(refactorCurrentPrices);
    } catch (error) {
      setError("No se pudieron cargar los datos. Intenta de nuevo mas tarde.");
    }
  }

  return (
    <div className="w-2/3 overflow-hidden">
      <div className="ml-8 h-96">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Graphic data={pricePerDays} details={true} />
        )}
      </div>
      <div className="flex mt-4 gap-2 justify-end">
        {TIME_PERIODS.map((time, index) => {
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
  );
}
