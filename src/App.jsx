import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import CryptoList from "./Components/CryptoList/CryptoList";
import CryptoProvider from "./Context/CryptoProvider";

function App() {
  return (
    <>
      <CryptoProvider>
        <Navbar/>
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 pt-4">
          <Routes>
            <Route path="/" element={<CryptoList />} />
          </Routes>
        </main>
      </CryptoProvider>
    </>
  );
}

export default App;
