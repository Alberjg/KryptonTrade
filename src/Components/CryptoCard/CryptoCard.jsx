import { Link } from "react-router";
import Graphic from "../Graphic/Graphic";
import PercentageChange from "../PercentageChange/PercentageChange";
export default function CrytoCard({ coin }) {
  const coinValue = coin.current_price.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
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
      <td className="px-6 py-4"><PercentageChange percentage={coin.price_change_percentage_1h_in_currency}/></td>
      <td className="px-6 py-4"><PercentageChange percentage={coin.price_change_percentage_24h}/></td>
      <td className="px-6 py-4">
        <div className="w-3xs h-12.5">
          <Graphic data={graphData} />
        </div>
      </td>
    </tr>
  );
}
