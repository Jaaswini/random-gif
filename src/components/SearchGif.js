import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import UseApi from "./UseApi";

export default function SearchGif() {
  const [searchText, setSearchText] = useState("Cat");
  const { imgurl, apiCall, loading } = UseApi(searchText);

  useEffect(() => apiCall, []);
  return (
    <div className="bg-[#60A5F9] py-5 px-10 border-[1px] border-black rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-lg underline text-center font-bold mb-5">
        A RANDOM {searchText} GIF
      </h1>
      {loading ? <Loader /> : <img src={imgurl} />}
      <input
        value={searchText}
        onKeyDown={(e)=>{
          if(e.key==="Enter") apiCall()
        }}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="search"
        className="bg-white w-full mt-5 rounded-md p-2 font-bold"
      />
      <button
        onClick={apiCall}
        className="bg-white w-full mt-5 rounded-md p-2 font-bold"
      >
        GENERATE
      </button>
    </div>
  );
}
