import React, { useEffect } from "react";
import Loader from "./Loader";
import UseApi from "./UseApi";

export default function RandomGif() {
  const { imgurl, apiCall, loading } = UseApi();
  useEffect(() => apiCall, []);
  return (
    <div className="bg-[#49DE80] py-5 px-10 border-[1px] border-black rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-lg underline text-center font-bold mb-5">
        A RANDOM GIF
      </h1>
      {loading ? <Loader /> : <img src={imgurl} />}
      <button
        onClick={apiCall}
        className="bg-white w-full mt-5 rounded-md p-2 font-bold"
      >
        GENERATE
      </button>
    </div>
  );
}
