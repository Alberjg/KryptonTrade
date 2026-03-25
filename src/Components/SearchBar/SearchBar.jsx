import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function SearchBar({coinList}) {
  const [coinSought, setCoinSought] = useState("");
  const [listCoinsSought, setListCoinsSought] = useState([]);

  function search(event) {
    setCoinSought(event.target.value);
    const buscar = event.target.value;
    const list = coinList.filter((coin) =>
      coin.name.toLowerCase().includes(buscar.toLowerCase()),
    );
    setListCoinsSought(list);
  }

  function cleanSearch() {
    setCoinSought("");
    setListCoinsSought([]);
  }

  return (
    <div className="p-5 relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="py-2 pl-4 pr-10 text-sm bg-gray-100  rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
        onChange={search}
        onBlur={() => setTimeout(() => setCoinSought(""), [100])}
        defaultValue={coinSought}
      />
      {coinSought.length > 0 && (
        <ul className="absolute bg-gray-200 rounded-lg mt-[px] ring-2 ring-lime-500">
          {listCoinsSought.map((coin, index) => {
            return (
              <Link
                to={`/details/${coin.id}`}
                onClick={cleanSearch}
                key={index}
              >
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-lime-500 hover:text-white cursor-pointer transition-colors duration-150">
                  {coin.name}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}
