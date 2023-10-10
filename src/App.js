import "./App.css";
import RandomGif from "./components/RandomGif";
import SearchGif from "./components/SearchGif";

function App() {
  return (
    <div className="bg-[#B1D2FF] min-h-screen h-full w-screen relative pb-10">
      <h1 className="bg-[white] text-black top-10 left-5 right-5 w-[90%] absolute mx-auto text-center rounded-md py-3 text-lg font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex justify-center items-center pt-40 flex-col gap-10">
        <RandomGif />
        <SearchGif />
      </div>
    </div>
  );
}

export default App;
