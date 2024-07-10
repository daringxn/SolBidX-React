import { create } from "zustand";
import axios from "axios";

export default create(() => ({
  data: [],
  loading: false,
  error: null,
  createOffer: async (offer) => {
    const response = await axios.post("/api/offers", offer);
    return response.data;
  },
}));
