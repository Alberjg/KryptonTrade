import { useState } from "react";
import Button from "../Button/Button";

export default function CryptoDescription({ refactoredCoin, coin }) {
  const [totalDescription, setTotalDescription] = useState(false);
  return (
    <div>
      <p className="text-gray-500">Descripción:</p>

      {totalDescription ? (
        <div>
          <p>
            {refactoredCoin.description
              ? refactoredCoin.description
              : coin.description?.en}
          </p>
          <Button
            label="Ver menos"
            onClick={() => setTotalDescription(false)}
          />
        </div>
      ) : (
        <div>
          <p className="line-clamp-10">
            {refactoredCoin.description
              ? refactoredCoin.description
              : coin.description?.en}
          </p>
          <Button label="Ver mas" onClick={() => setTotalDescription(true)} />
        </div>
      )}
    </div>
  );
}
