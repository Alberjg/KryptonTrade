import Button from "../Button/Button";
export default function Modal({ text, close }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="flex-1 bg-white max-w-5xl mx-auto px-4 py-8 pt-4 shadow-2xl shadow-lime-500 rounded-xl overflow-hidden mb-10">
        <p>{text}</p>
        <Button label="Cerrar" onClick={close} />
      </div>
    </div>
  );
}
