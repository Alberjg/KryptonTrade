import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getCryptosList } from "../../Services/ApiServices";
import whiteLogo from "../../assets/whiteLogo.png";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  const [coinList, setCoinList] = useState([]);

   useEffect(() => {
    getCryptosList().then((data) => {
      setCoinList(data);
    });
  }, []);
  return (
    <>
      <header className="flex max-w-7xl mx-auto p-9 pb-5 justify-between ">
        <Link to={"/"}>
          <img src={whiteLogo} alt="logo" className="w-90" />
        </Link>
        <SearchBar coinList={coinList}/>
        <nav>
          <ul className="flex p-5">
            <li className="mr-5 bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link
                to={"/"}
                className="hover:text-green-500 font-medium text-2xl"
              >
                Listado
              </Link>
            </li>
            <li className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link to={`/converter`} className="hover:text-green-500 font-medium text-2xl">
                Conversor
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className=" border-b border-gray-300 w-full"></div>
    </>
  );
}
