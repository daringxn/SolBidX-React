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
  signout: async () => {
    set({ wallet_address: "" });
  },
  getCollections: async () => {
    const { id } = get();
    if (!id) {
      return;
    }
    const response = await axios.get("/api/users/" + get().id + "/collections");
    return response.data;
  },
  getItems: async () => {
    const { id } = get();
    if (!id) {
      return;
    }
    const response = await axios.get("/api/users/" + get().id + "/items");
    return response.data;
  },
  getOffers: async () => {
    const { id } = get();
    if (!id) {
      return;
    }
    const response = await axios.get("/api/users/" + get().id + "/offers");
    return response.data;
  },
  createOrUpdateProfile: async (formData) => {
    const { id, wallet_address: walletAddress } = get();
    if (id) {
      formData.append("id", id);
    }
    formData.append("wallet_address", walletAddress);
    const response = await axios.post("/api/users", formData);
    return response.data;
  },
}));
