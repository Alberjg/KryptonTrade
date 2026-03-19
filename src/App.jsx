import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import CryptoList from "./Components/CryptoList/CryptoList";
import CryptoDetails from "./Components/CryptoDetails/CryptoDetails";
import CryptoConverter from "./Components/CryptoConverter/CryptoConverter";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 pt-4 shadow-2xl shadow-lime-500 rounded-xl overflow-hidden mb-10">
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/details/:id" element={<CryptoDetails />} />
          <Route path="/converter" element={<CryptoConverter />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
