import axios from "axios";
import { useState } from "react";

export default function UseApi(token) {
  const apiKey = "G9Pv14ZGIP3vmAfrKJc3z2CyCSxOytJW";
  const [imgurl, setImgUrl] = useState();
  const [loading, setLoading] = useState(false);
  async function apiCall() {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${token}`
      );
      console.log(resp);
      setImgUrl(resp.data.data.images.downsized_large.url);
      setLoading(false);
    } catch (e) {}
  }
  return { imgurl, loading, apiCall };
}
