import { Link } from "react-router";
import Graphic from "../Graphic/Graphic";
export default function CrytoCard({ coin }) {
  console.log(coin);
  
  const coinValue = coin.current_price.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const priceChangePercentage1h =
    coin.price_change_percentage_1h_in_currency.toFixed(1);
  const priceChangePercentage24h = coin.price_change_percentage_24h.toFixed(1);

  const upIcon = "▲";
  const downIcon = "▼";

  const upColor = "text-green-500";
  const downColor = "text-red-500";

  let icon1h = "";
  let icon24h = "";

  let textColor1h = "";
  let textColor24h = "";

  if (priceChangePercentage1h >= 0) {
    icon1h = upIcon;
    textColor1h = upColor;
  } else {
    icon1h = downIcon;
    textColor1h = downColor;
  }

  if (priceChangePercentage24h >= 0) {
    icon24h = upIcon;
    textColor24h = upColor;
  } else {
    icon24h = downIcon;
    textColor24h = downColor;
  }
  const graphData = coin.sparkline_in_7d.price;

  return (
    <tr className="bg-white">
      <td>
        <Link
          to={`/details/${coin.id}`}
          className="flex px-6 py-4 items-center"
        >
          <img
            src={coin.image}
            alt="image coin"
            className="rounded-full size-7 mr-2"
          />
          <p className="font-bold text-2xl uppercase mr-2">{coin.symbol}</p>
          <p className="text-gray-500">{coin.name}</p>
        </Link>
      </td>
      <td className="px-6 py-4">{`${coinValue}€`}</td>
      <td
        className={`px-6 py-4 ${textColor1h}`}
      >{`${icon1h} ${priceChangePercentage1h}%`}</td>
      <td
        className={`px-6 py-4 ${textColor24h}`}
      >{`${icon24h} ${priceChangePercentage24h}%`}</td>
      <td className="px-6 py-4">
        <div className="w-3xs h-12.5">
          <Graphic data={graphData} />
        </div>
      </td>
    </tr>
  );
}
