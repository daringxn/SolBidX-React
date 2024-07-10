import { create } from "zustand";
import axios from "axios";

export default create((set, get) => ({
  id: 1,
  wallet_address: "GkpXEwtTuwgTdBWRDrwu2xNb3jbXWXhoMs5CQzKLrDZs",
  name: "Marvin McKinney",
  getCollections: async () => {
    const { id } = get();
    if (!id) {
      return;
    }
    const response = await axios.get("/api/users/" + get().id + "/collections");
    return response.data;
  },
}));
