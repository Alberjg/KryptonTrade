export default function Button({ text, onClick}) {    
  // console.log(action);
  
  return (
    <button
      onClick={() => {
        onClick()
      }}
      className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
    >
      {text}
    </button>
  );
}
