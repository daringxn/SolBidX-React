import { create } from "zustand";
import axios from "axios";

export default create((set, get) => ({
  wallet_address: "",
  updateInfo: (values) => {
    set(values);
  },
  signin: async (walletAddress) => {
    set({ wallet_address: walletAddress });
    const response = await axios.post("/api/auth/signin", {
      wallet_address: walletAddress,
    });
    return response.data;
  },
  getCollections: async () => {
    const { id } = get();
    if (!id) {
      return;
    }
    const response = await axios.get("/api/users/" + get().id + "/collections");
    return response.data;
  },
  createOrUpdateProfile: async (formData) => {
    formData.append("id", get().id);
    formData.append("wallet_address", get().wallet_address);
    const response = await axios.post("/api/users", formData);
    return response.data;
  },
}));
