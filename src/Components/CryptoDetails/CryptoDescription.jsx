import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function CryptoDescription({ description }) {
  const [totalDescription, setTotalDescription] = useState(false);
  return (
    <div>
      <p className="text-gray-500">Descripción:</p>
      {totalDescription ? (
        <Modal text={description} close={() => setTotalDescription(false)} />
      ) : (
        <div>
          <p className="line-clamp-10">{description}</p>
          <Button label="Ver mas" onClick={() => setTotalDescription(true)} />
        </div>
      )}
    </div>
  );
}

CryptoDescription.PropTypes = {
  description: PropTypes.string.isRequired,
};
