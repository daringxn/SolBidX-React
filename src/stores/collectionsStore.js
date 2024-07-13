import { create } from "zustand";
import axios from "axios";

export default create((set) => ({
  data: [],
  loading: false,
  error: null,
  createCollection: async (collection) => {
    const response = await axios.post("/api/collections", collection);
    return response.data;
  },
  getCollections: async ({ pageIndex, pageSize, searchValue }) => {
    const response = await axios.get(
      "/api/collections?pageIndex=" +
        pageIndex +
        "&pageSize=" +
        pageSize +
        "&searchValue=" +
        searchValue
    );
    return response.data;
  },
}));
