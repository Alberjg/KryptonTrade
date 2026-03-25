import PropTypes from "prop-types";
import Button from "../Button/Button";
export default function Modal({ text, close }) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center">
      <div className="flex-1 bg-white max-w-5xl mx-auto px-4 py-8 pt-4 shadow-2xl shadow-lime-500 rounded-xl overflow-hidden">
        <p className="m-5">{text}</p>
        <div className="flex justify-center mr-5"><Button label="Cerrar" onClick={close}/></div>
      </div>
    </div>
  );
}

Modal.PropTypes = {
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
