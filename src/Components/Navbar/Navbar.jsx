import { Link } from "react-router";
import whiteLogo from "../../assets/whiteLogo.png";
export default function Navbar() {
  return (
    <>
      <header className="flex max-w-7xl mx-auto p-9 pb-5 justify-between ">
        <Link to={"/"}>
          <img src={whiteLogo} alt="logo" className="w-90" />
        </Link>
        {/* <form></form> */}
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
              {/* <li className="bg-green-200 border border-green-600 text-green-800 pl-3 pr-3 rounded-lg"> */}
              <Link className="hover:text-green-500 font-medium text-2xl">
                Conversor
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="border-b border-gray-300 w-full"></div>
    </>
  );
}
