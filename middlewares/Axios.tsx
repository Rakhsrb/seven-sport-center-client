import axios from "axios";

export const Fetch = axios.create({
  baseURL: "http://localhost:3000/",
});
