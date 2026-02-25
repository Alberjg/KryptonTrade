import { Routes, Route } from "react-router";
import CryptoList from "./Components/CryptoList/CryptoList";
import CryptoProvider from "./Context/CryptoProvider";

function App() {
  return (
    <>
      <CryptoProvider>
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CryptoList />} />
          </Routes>
        </main>
      </CryptoProvider>
    </>
  );
}

export default App;
