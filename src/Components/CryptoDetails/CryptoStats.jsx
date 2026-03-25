import PropTypes from "prop-types";
import PercentageChange from "../PercentageChange/PercentageChange";
export default function CryptoStats({ coin }) {
  return (
    <div>
      <div>
        <p className="text-gray-500">Cap. de mercado:</p>
        <p>{`${coin.marketCap}€`}</p>
      </div>
      <div>
        <p className="text-gray-500">Cantidad circulante:</p>
        <p>{coin.circulatingSupply}</p>
      </div>
      <div>
        <p className="text-gray-500">Variacion del precio:</p>
        <div className="flex flex-wrap">
          {coin.priceChangePercentage.map((time, index) => {
            return (
              <div key={index} className="flex w-1/2 gap-2">
                <p>{time.label}</p>
                <PercentageChange percentage={time.percentage} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

CryptoStats.PropTypes = {
  coin: PropTypes.object.isRequired,
};
