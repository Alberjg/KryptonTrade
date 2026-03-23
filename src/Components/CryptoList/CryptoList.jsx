import { useEffect, useState } from "react";
import CryptoCard from "../CryptoCard/CryptoCard";
import { getCryptosList } from "../../Services/ApiServices";

export default function CryptoList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cryptosList, setCryptosList] = useState([]);
  useEffect(() => {
    try {
      setLoading(true);
      getCryptosList().then((data) => {
        setCryptosList(data);
        setLoading(false);
      });
    } catch (error) {
      setError("No se pudieron cargar los datos. Intenta de nuevo mas tarde.");
    }
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
            Activo
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
            Precio
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
            1h
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
            24h
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
            Últimos 7 dias
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {cryptosList.map((coin, index) => (
          <CryptoCard coin={coin} key={index} />
        ))}
      </tbody>
    </table>
  );
}
